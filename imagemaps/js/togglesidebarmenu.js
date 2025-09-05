import throttle from 'https://cdn.jsdelivr.net/npm/lodash.throttle@4.1.1/+esm';
document.addEventListener("DOMContentLoaded", () => {
	const mainMenu = document.querySelector(".main-menu");

	const menuItems = [
		{ buttonId: "has-submenu-getStarted", menuId: "getStartedMenu" },
		{
			buttonId: "has-submenu-clientTestimonials",
			menuId: "clientTestimonialMenu",
		},
		{
			buttonId: "has-submenu-seeWomensProfile",
			menuId: "seeWomensProfileMenu",
		},
		{
			buttonId: "has-submenu-travelAndMeetHer",
			menuId: "travelAndMeetHerMenu",
		},
		{
			buttonId: "has-submenu-servicesAndOptions",
			menuId: "servicesAndOptionsMenu",
		},
		{ buttonId: "has-submenu-blog", menuId: "blogMenu" },
		{ buttonId: "has-submenu-policies", menuId: "policiesMenu" },
	];

	const backButtons = [
		{ buttonId: "backToMainMenu", menuId: "getStartedMenu" },
		{
			buttonId: "backToMainMenuFromClientTestimonial",
			menuId: "clientTestimonialMenu",
		},
		{
			buttonId: "backToMainMenuFromseeWomensProfileMenu",
			menuId: "seeWomensProfileMenu",
		},
		{
			buttonId: "backToMainMenuFromtravelAndMeetHerMenu",
			menuId: "travelAndMeetHerMenu",
		},
		{
			buttonId: "backToMainMenuFromservicesAndOptionsMenu",
			menuId: "servicesAndOptionsMenu",
		},
		{ buttonId: "backToMainMenuFromblogMenu", menuId: "blogMenu" },
		{ buttonId: "backToMainMenuFrompoliciesMenu", menuId: "policiesMenu" },
	];

	// Attach event listeners to menu items
	for (const item of menuItems) {
		const button = document.getElementById(item.buttonId);
		const menu = document.getElementById(item.menuId);

		if (!button || !menu) return;

		button?.addEventListener("click", async (e) => {
			e.preventDefault();
			const { toggleSubmenu, transferTextContent } = await import(
				"./lazyloadtogglesidebarmenu.js"
			);
			toggleSubmenu(mainMenu, menu);
			transferTextContent(button, menu, ".submenu-text");
		});
	}

	// Attach event listeners to back buttons
	for (const item of backButtons) {
		const button = document.getElementById(item.buttonId);
		const menu = document.getElementById(item.menuId);
		button?.addEventListener("click", async (e) => {
			e.preventDefault();
			const { toggleSubmenu } = await import("/imagemap/js/lazyloadtogglesidebarmenu.js");
			toggleSubmenu(menu, mainMenu);
		});
	}

	const mobileNavbar = document.getElementById("mobile-navbar");
	const fixedBottomNav = document.getElementById("fixed-bottomNav");

	if (!mobileNavbar || !fixedBottomNav) return;

	let prevScrollPos = window.pageYOffset;

	/**
	 * Handles the scroll event by updating the position of the mobile navigation bar and fixed bottom navigation.
	 *
	 * @return {void}
	 */
	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset;
		const isScrollingUp = prevScrollPos > currentScrollPos || currentScrollPos < 50;

		mobileNavbar.style.transform = isScrollingUp ? "translateY(0)" : "translateY(-250px)";
		mobileNavbar.style.transition = "transform 0.3s ease-in-out";
		fixedBottomNav.style.transition = "transform 0.3s ease-in-out";
		fixedBottomNav.style.transform = isScrollingUp ? "translateY(0)" : "translateY(250px)";

		prevScrollPos = currentScrollPos;
	};

	const debouncedScroll = throttle(handleScroll, 100); // Adjust the delay time as needed (in milliseconds)

	window.addEventListener(
		"scroll",
		() => {
			debouncedScroll();
		},
		{ passive: true },
	);
});
