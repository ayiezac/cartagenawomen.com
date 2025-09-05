importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

const fetchMetaDesc = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.text();
    return data;
};

Comlink.expose({fetchMetaDesc});