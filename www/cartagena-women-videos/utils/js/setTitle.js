export const setTitle = () => {
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.textContent = document.title;
    }
    return h1;
}
