import { renderItem } from "./renderItem.min.js";
import { videoTypes } from "./chunks.min.js";
import {lazyLoadImages} from "./lazyLoadImages.min.js";

export function createPagination(
	paginationContainer,
	archiveContainer,
	prevButton,
	nextButton,
	contents,
) {
	let currentPage = 0;
	const itemsPerPage = 6;
	const totalPages = Math.ceil(contents.length / itemsPerPage);

	function renderCardItems(startIndex, endIndex) {
		const fragment = document.createDocumentFragment();
		const itemsToRender = contents.slice(startIndex, endIndex).map(renderItem);

		for (const item of itemsToRender) {
			fragment.appendChild(item);
		}

		requestAnimationFrame(() => {
			archiveContainer.empty(); // Clear previous items
			archiveContainer.append(fragment);
	
			lazyLoadImages();
		});
	}

	function renderLatest() {
		const container = $(".cardcontainer"); // Replace with your container selector
		const videoType = videoTypes();

		if (contents.length === 0) return;

		const { title, description, page_url, youtube_id } = contents.shift();
		const thumbnailSrc = `https://img.youtube.com/vi_webp/${youtube_id}/maxresdefault.webp`;

		const link = $("<a>", {
			href: `/cartagena-women-videos/${videoType}${page_url}`,
			class: "text-decoration-none link-dark",
		});

		const $card = $("<div>", { class: "card border-0" });
		const $row = $("<div>", { class: "row g-0" });

		const $col1 = $("<div>", {
			class: "col-md-7 has-yt-play-btn",
			id: "latest",
		});

		const $img = $("<img>", {
			"data-src": thumbnailSrc,
			src: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYmQtcGxhY2Vob2xkZXItaW1nIGNhcmQtaW1nLXRvcCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iUGxhY2Vob2xkZXIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIHNsaWNlIiBmb2N1c2FibGU9ImZhbHNlIj48dGl0bGU+UGxhY2Vob2xkZXI8L3RpdGxlPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNFOUVDRUYiPjwvcmVjdD48L3N2Zz4=",
			class: "img-fluid rounded-5",
			alt: title,
			fetchpriority: "high",
			decoding: "async",
		}).attr("width", 500).attr("height", 300);

		$img.on("load", function () {
			$(this).addClass("loaded");
		});

		const $col2 = $("<div>", { class: "col-md-5" });
		const $cardBody = $("<div>", {
			class: "card-body border rounded-end border-0",
		});
		
		const $titleH2 = $("<h2>", {
			class: "card-title text-dark mb-3 display-6 fw-medium",
			text: title,
		});
		const $descriptionP = $("<p>", {
			class: "card-text px-0 h-25",
			text: description,
		});

		// Append elements together
		link.append($card);
		$card.append($row);
		$row.append($col1, $col2);
		$col1.append($img);
		$col2.append($cardBody);
		// $cardBody.append($badgeDiv);
		// $badgeDiv.append($badgeSpan);
		$cardBody.append($titleH2);
		$cardBody.append($descriptionP);

		// Append the card to the desired container
		container.append(link);
	}

	function updateButtons() {
		const prevState = currentPage === 0;
		const nextState = currentPage === totalPages - 1;
		prevButton.prop("disabled", prevState).css({
			cursor: prevState ? "not-allowed" : "pointer",
			color: prevState ? "#212529bf" : "#000000",
		});
		nextButton.prop("disabled", nextState).css({
			cursor: nextState ? "not-allowed" : "pointer",
			color: nextState ? "#212529bf" : "#000000",
		});
		updatePagination();
	}

/**
 * Updates the pagination container with the current page number and surrounding page numbers.
 * Shows the watch more text and container if the current page is 0.
 * Hides the watch more text and container if the current page is not 0.
 * Updates the page indicator text.
 */
	function updatePagination() {
		paginationContainer.empty();

		const startPage = Math.max(0, currentPage - 2);
		const endPage = Math.min(totalPages, currentPage + 3);

		if (startPage > 0) {
			paginationContainer.append(
				`<li class="list-group-item p-2 border-0"><a href="javascript:;" class="page-btn" data-page="0">1</a></li>`,
			);
			if (startPage > 1) {
				paginationContainer.append("<li class='fs-3 px-3'>...</li>");
			}
		}

		for (let i = startPage; i < endPage; i++) {
			const ariaCurrent = i === currentPage ? "page" : "";
			paginationContainer.append(
				`<li class="list-group-item p-2 border-0"><a href="javascript:;" class="page-btn ${i === currentPage ? "active" : ""}" data-page="${i}" aria-current="${ariaCurrent}">${i + 1}</a></li>`,
			);
		}

		if (endPage < totalPages) {
			if (endPage < totalPages - 1) {
				paginationContainer.append("<li class='fs-3 px-3'>...</li>");
			}
			paginationContainer.append(
				`<li class="list-group-item p-2 border-0"><a href="javascript:;" class="page-btn " data-page="${totalPages - 1}">${totalPages}</a></li>`,
			);
		}

		$(".cardcontainer, #watch_more_txt_heading").toggle(currentPage === 0);

		$('[data-id="page_indicator"]').text(
			`Page ${currentPage + 1} of ${totalPages}`,
		);
	}

	function scrollTop() {
		$('[data-id="page_indicator"]')[0].scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}

	function renderedItems() {
		renderCardItems(
			currentPage * itemsPerPage,
			(currentPage + 1) * itemsPerPage,
		);
	}

	const funcPaginationContainer = (e) => {
		const newPage = $(e.target).data("page");
		if (newPage !== currentPage) {
			currentPage = newPage;
			renderedItems();
			updateButtons();
			scrollTop();
		}
	};

	const funcNextButton = () => {
		if (currentPage < totalPages - 1) {
			currentPage++;
			renderedItems();
			updateButtons();
			scrollTop();
		}
	};

	const funcPrevButton = () => {
		if (currentPage > 0) {
			currentPage--;
			renderedItems();
			updateButtons();
			scrollTop();
		}
	};

	renderLatest();
	renderCardItems(0, itemsPerPage);
	updateButtons();

	return {
		funcPaginationContainer,
		funcNextButton,
		funcPrevButton,
		updateButtons,
	};
}
