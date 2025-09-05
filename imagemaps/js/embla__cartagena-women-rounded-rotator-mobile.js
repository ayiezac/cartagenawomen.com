const emblaNode = document.querySelector(".embla");
const options = { dragFree: true };
const emblaApi = EmblaCarousel(emblaNode, options);

emblaApi.slideNodes(); // Access API
const emblaContainer = emblaNode.querySelector(".embla .embla__container");
const verified_link_badge = document.querySelectorAll("#verified-badge a");

const fragment = document.createDocumentFragment();
for (const link of verified_link_badge) {
	const embla__slide = document.createElement("div");
	embla__slide.className = "embla__slide";

	const embla__slide_link = document.createElement("a");
	embla__slide_link.href = link.href;
	embla__slide_link.className = "d-inline-block border border-2 rounded-circle focus-ring focus-ring-success"

	const img = link.querySelector("img");
	const embla__slide_img = new Image(80, 80);
	embla__slide_img.src = img.src;
	embla__slide_img.alt = img.alt;
	embla__slide_img.fetchPriority = "high";
	embla__slide_img.decoding = "async";
	embla__slide_img.className = "object-fit-cover rounded-circle";

	embla__slide_link.insertBefore(
		embla__slide_img,
		embla__slide_link.firstChild,
	);
	embla__slide.insertBefore(embla__slide_link, embla__slide.firstChild);
	fragment.insertBefore(embla__slide, fragment.firstChild);
}
emblaContainer.insertBefore(fragment, emblaContainer.firstChild);
