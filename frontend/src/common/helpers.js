/**
 * @param image
 * @returns {`/src/assets/img/${string}`}
 */
export const getImage = (image) => {
    // TODO: why don't work?
    // https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
    // return new URL(`../assets/img/${image}`, import.meta.url).href;
    return `/src/assets/img/${image}`;
};
