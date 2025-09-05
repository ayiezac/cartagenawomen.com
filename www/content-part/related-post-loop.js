import lozad from "https://cdn.jsdelivr.net/npm/lozad@1.16.0/+esm";
const template_container = document.getElementById("template-container");

// Function to create and append blog elements
export function populateData(blogs) {
	template_container.innerHTML = "";
	for (const blog of blogs) {
		const link = document.createElement("a");
		link.href = `/${location.pathname.split("/")[1]}/${blog.page_url}`;

		const card = document.createElement("div");
		card.classList.add("card", "border-0", "shadow-none", "p-0");

		const imageContainer = document.createElement("div");
		imageContainer.id = "image-container";

		// const image = new Image(370, 228);
		const image = document.createElement("img");
		image.width = 370;
		image.height = 228;
		image.classList.add("card-img-top", "object-fit-cover", "lozad");
		image.dataset.src = `/img${blog.thumbnail}`;

		const cardBody = document.createElement("div");
		cardBody.classList.add("card-body");

		const cardTitle = document.createElement("span");
		cardTitle.classList.add("card-text", "fw-bold", "my-3", "text-dark");
		cardTitle.textContent = blog.title;

		link.appendChild(card);
		card.appendChild(imageContainer);
		card.appendChild(cardBody);

		imageContainer.appendChild(image);
		cardBody.appendChild(cardTitle);

		template_container.appendChild(link);
	}
}
export const paginate = (blog_data) => {
	$("#pagination-container").pagination({
		dataSource: blog_data,
		hideLastOnEllipsisShow: true,
		hideFirstOnEllipsisShow: true,
		pageSize: 6,
		callback: (data) => {
			populateData(data); // Populate with paginated data
			const observer = lozad();
			observer.observe();
		},
	});
}
