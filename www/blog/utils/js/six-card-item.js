export const sixCardItem = (elmParentSelector, elmChildSelector, data) => {
	const container = document.querySelector(`${elmParentSelector}`);
	if (!container) return;
	const cardContainer = container.querySelectorAll(`${elmChildSelector}`);
	if (!cardContainer) return;
	cardContainer.forEach((card, index) => {
		if (index < data.length && index < 6) {
			const link = card.querySelector("a");
			const image = card.querySelector("img");
			const title = card.querySelector("a span");

			title.classList.remove("placeholder", "bg-secondary", "rounded-pill");

			image.dataset.src = `/img${data[index].thumbnail}`;
			title.textContent = data[index].title;
			link.href = `/${data[index].pathname}/${data[index].page_url}`;
		} else {
			card.remove(); // Remove extra elements if there are more than needed
		}
	});
};
