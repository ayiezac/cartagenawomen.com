(() => {
	if (HTMLScriptElement.supports?.("speculationrules")) {
		const specScript = document.createElement("script");
		specScript.type = "speculationrules";
		specScript.textContent = JSON.stringify({
			prefetch: [
				{
					source: "document",
					where: {
						and: [
							{ href_matches: "/*" },
							{ not: { href_matches: "/logout/*" } },
						],
					},
					eagerness: "immediate",
				},
			],
			prerender: [
				{
					source: "document",
					where: {
						and: [
							{ href_matches: "/*" },
							{ not: { href_matches: "/logout/*" } },
						],
					},
					eagerness: "moderate",
				},
			],
		});
		document.body.append(specScript);
	} else {
		const script = document.createElement("script");
		script.src = "/imagemap/js/instant-page.min.js";
		script.type = "module";
		document.body.append(script);
	}
})();
