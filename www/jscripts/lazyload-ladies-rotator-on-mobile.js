// This is for mobile only
// Hide women images when scroll down then display again when scroll top

let prevScrollY = 0;
export function checkPosition(el) {
	const currentScrollY = window.scrollY;
	const isScrollingUp = currentScrollY < prevScrollY;

	el.style.top = isScrollingUp ? "4rem" : "-20rem";
	el.style.transition = "top 0.5s ease-in-out";

	prevScrollY = currentScrollY;
}
