function GetCookie(name) {
	const arg = `${name}=`;
	const cookies = document.cookie.split(";");

	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].trim();

		if (cookie.indexOf(arg) === 0) return "here";
	}

	return null;
}

function testFirstCookie() {
	const visit = GetCookie("FirstTimeVisitCookie");

	if (visit == null) {
		console.log("new visitor");
	} else {
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker.getRegistrations().then((registrations) => {
				for (const registration of registrations) {
					registration.unregister();
				}
			});
		}

		console.log("new visitor");
	}
}

$(document).ready(() => {
	testFirstCookie();
});
