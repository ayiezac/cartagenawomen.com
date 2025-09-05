import lozad from "https://cdn.jsdelivr.net/npm/lozad@1.16.0/+esm";
import { dating_data, data } from "./data.min.js";
import {
	highlightFeaturedPostContainer,
	otherFeaturedPosts,
} from "./featured-post.min.js";
import { sixCardItem } from "./six-card-item.min.js";
import { latestCardItem, otherPostsCardItem } from "./not-a-sixCardItem.min.js";

const { culture, psychology, travel, realities, our_process } = data;

highlightFeaturedPostContainer();
otherFeaturedPosts();
sixCardItem(
	'[data-id="dating-container"]',
	'[data-class="card-container"]',
	dating_data.dating,
);
sixCardItem(
	'[data-id="culture-container"]',
	'[data-class="card-container"]',
	culture,
);
sixCardItem(
	'[data-id="psychology-container"]',
	'[data-class="card-container"]',
	psychology,
);
sixCardItem(
	'[data-id="realities-container"]',
	'[data-class="card-container"]',
	realities,
);
sixCardItem(
	'[data-id="our-process-container"]',
	'[data-class="card-container"]',
	our_process,
);
latestCardItem();
otherPostsCardItem();
const observer = lozad('.lozad',
	{
		load: (el) => {
			el.src = el.dataset.src;
		},
		rootMargin: '10px 0px', // syntax similar to that of CSS Margin
		threshold: 0.1, // ratio of element convergence
		enableAutoReload: true
	}
);
observer.observe();
