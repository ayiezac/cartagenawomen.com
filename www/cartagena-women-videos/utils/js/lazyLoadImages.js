// @ts-check
export function lazyLoadImages() {
	const images = document.querySelectorAll("img[data-src]");
	if (!images.length) {
		return;
	}
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					const img = entry.target;
					if (img instanceof HTMLImageElement) {
						const dataSrc = img.dataset.src;
						if (dataSrc) {
                            img.src = dataSrc;
                            observer.unobserve(img);
						}
					}
				}
			}
		},
		{
			rootMargin: "0px 0px 50px 0px",
			threshold: 0.1,
		},
	);

	for (const image of images) {
		observer.observe(image);
	}

    return () =>{
        observer.disconnect();
    }
}
