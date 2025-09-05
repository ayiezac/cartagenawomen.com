import * as Comlink from "https://unpkg.com/comlink/dist/esm/comlink.mjs";

export const fetchMetaDesc = async (url) => {
    const worker = new Worker("./utils/js/worker-fetch-meta-description.min.js");
    const workerProxy = Comlink.wrap(worker);
    const metaDesc = await workerProxy.fetchMetaDesc(url);
    const parser = new DOMParser();
    const doc = parser.parseFromString(metaDesc, 'text/html');
    const metaDescription = doc.querySelector('[name="description"]');
    const getMetaContent = metaDescription.getAttribute('content');
    return getMetaContent;
};