import { data } from "./data.min.js";
import { fetchMetaDesc } from "./fetch-meta-description.min.js";

const { travel } = data;

const container = document.querySelector('[data-id="travel-container"]');
export const latestCardItem = async () => {
	const latestCardItem = container.querySelector('[data-id="latest"]');

	const link = latestCardItem.querySelector("a");
	const image = latestCardItem.querySelector("img");
	const title = latestCardItem.querySelector("a h3");
	const description = latestCardItem.querySelector("p");

	title.classList.remove(
		"placeholder",
		"bg-secondary",
		"rounded-pill",
		"placeholder-lg",
	);

	link.href = `/${travel[0].pathname}/${travel[0].page_url}`;
	title.textContent = travel[0].title;
	image.dataset.src = `/img${travel[0].thumbnail}`;
	image.classList.add("lozad");
	description.textContent = await fetchMetaDesc(link.href);
};

export const otherPostsCardItem = () => {
	const other_posts = container.querySelector('[data-id="other-posts"]');
	const card_container = other_posts.querySelectorAll(
		'[data-class="card-container"]',
	);
	const newData = travel.slice(1);

	card_container.forEach((card, index) => {
		if (index < newData.length && index < 6) {
            const link = card.querySelector("a");
			const image = card.querySelector("img");
			const title = card.querySelector("a span");

			title.classList.remove("placeholder", "bg-secondary", "rounded-pill");

			image.dataset.src = `/img${newData[index].thumbnail}`;
			title.textContent = newData[index].title;
			link.href = `/${newData[index].pathname}/${newData[index].page_url}`;
		} else {
			card.remove();
		}
	});
};
