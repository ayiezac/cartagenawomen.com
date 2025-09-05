import { videoTypes } from "./chunks.min.js";




export function renderItem({ title, description, page_url, youtube_id }) {
	const thumbnailSrc = `https://img.youtube.com/vi_webp/${youtube_id}/mqdefault.webp`;

	const colDiv = document.createElement("div");
	colDiv.classList.add("col");

	const link = document.createElement("a");
	const type = videoTypes();
	link.href = `/cartagena-women-videos/${type}${page_url}`;
	
	link.classList.add("text-decoration-none", "link-dark");

	const cardDiv = document.createElement("div");
	cardDiv.classList.add("card", "h-100", "border-0");

	const ytPlayBtnDiv = document.createElement("div");
	ytPlayBtnDiv.classList.add("has-yt-play-btn");

	const img = new Image(375, 211);
	img.src =
		"data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYmQtcGxhY2Vob2xkZXItaW1nIGNhcmQtaW1nLXRvcCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iUGxhY2Vob2xkZXIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIHNsaWNlIiBmb2N1c2FibGU9ImZhbHNlIj48dGl0bGU+UGxhY2Vob2xkZXI8L3RpdGxlPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNFOUVDRUYiPjwvcmVjdD48L3N2Zz4=";
	img.dataset.src = thumbnailSrc;
	img.classList.add("card-img-top", "rounded-5");
	img.alt = title;
	img.decoding = "async";

	ytPlayBtnDiv.appendChild(img);

	const cardBodyDiv = document.createElement("div");
	cardBodyDiv.classList.add("card-body");

	const titleElem = document.createElement("h3");
	titleElem.classList.add("card-title", "fs-3", "mt-3", "text-dark");
	titleElem.textContent = title;

	const descriptionElem = document.createElement("p");
	descriptionElem.classList.add("card-text", "fst-normal", "fw-light", "px-0");
	descriptionElem.textContent = description;

	cardBodyDiv.append(titleElem, descriptionElem);

	cardDiv.append(ytPlayBtnDiv, cardBodyDiv);

	link.appendChild(cardDiv);
	colDiv.appendChild(link);

	return colDiv;
}