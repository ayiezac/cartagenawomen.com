importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

const fetchData = async (url) => {
	try {
		const response = await fetch(url, {priority: "high"});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return await response.text();
	} catch (error) {
		return error.toString();
	}
};

Comlink.expose({ fetchData });