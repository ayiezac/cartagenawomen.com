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
			const { toggleSubmenu } = await import("/jscripts/lazyloadtogglesidebarmenu.js");
			toggleSubmenu(menu, mainMenu);
		});
	}

	/**
	 * Creates a debounced version of a function, delaying its execution until a specified time has passed since the last call.
	 *
	 * @param {function} func - The function to debounce.
	 * @param {number} delay - The time in milliseconds to wait before executing the function.
	 * @return {function} A debounced version of the original function.
	 */
	const debounce = (func, delay) => {
		let timeoutId;
		return (/** @type {any} */ ...args) => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				func(...args);
			}, delay);
		};
	};

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
		const isScrollingUp = prevScrollPos > currentScrollPos;

		mobileNavbar.style.top = isScrollingUp ? "0" : "-250px";
		fixedBottomNav.style.bottom = isScrollingUp ? "0" : "-250px";

		prevScrollPos = currentScrollPos;
	};

	const debouncedScroll = debounce(handleScroll, 250); // Adjust the delay time as needed (in milliseconds)

	window.addEventListener(
		"scroll",
		() => {
			debouncedScroll();
		},
		{ passive: true },
	);
});
