import { data, dating_data } from "./data.min.js";
import { fetchMetaDesc } from "./fetch-meta-description.min.js";


const featured_section = document.querySelector(
	'[data-id="featured-container"]',
);

const populateOtherFeaturedPost = (post, data) => {
	const link = post.querySelector("a");
	const title = post.querySelector("span");
	const image = post.querySelector("img");

	link.href = `/${data.pathname}/${data.page_url}`;
	title.textContent = data.title;
	image.dataset.src = `/img${data.thumbnail}`;
	image.classList.add("lozad");
	title.classList.remove(
		"placeholder",
		"bg-secondary",
		"rounded-pill",
		"placeholder-sm",
		"h-25",
	);
};

export const highlightFeaturedPostContainer = async () => {
	const highlightFeaturedPost = featured_section.querySelector(
		'[data-id="highlight-featured"]',
	);
	const link = highlightFeaturedPost.querySelector("a");
	const img = highlightFeaturedPost.querySelector("img");
	const title = highlightFeaturedPost.querySelector("a h2");
	const description = highlightFeaturedPost.querySelector("p");
	title.classList.remove(
		"placeholder",
		"bg-secondary",
		"rounded-pill",
		"placeholder-lg",
	);
	link.href = `/${dating_data.dating[0].pathname}/${dating_data.dating[0].page_url}`;
	title.textContent = dating_data.dating[0].title;
	img.dataset.src = `/img${dating_data.dating[0].thumbnail}`;
    img.classList.add("lozad");
	description.textContent = await fetchMetaDesc(link.href);
};

export const otherFeaturedPosts = () => {
	const otherFeaturedPostContainer = featured_section.querySelector(
		'[data-id="other-latest-featured-container"]',
	);
	const otherFeaturedPost = otherFeaturedPostContainer.querySelector(
		'[data-id="other-latest-featured"]',
	);

	populateOtherFeaturedPost(
		otherFeaturedPost.querySelector("div:first-child"),
		dating_data.dating[1],
	);

	const liElements = otherFeaturedPost.querySelectorAll(
		"div:not(:first-child)",
	);
	for (const [index, element] of liElements.entries()) {
		const data_item = Object.values(data)[index][0];
		populateOtherFeaturedPost(element, data_item);
	}
};