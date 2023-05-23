export const getStrapiImage = (url: string) => {
    return `${process.env.REACT_APP_STRAPI_CONTENT_URL}${url}`;
};
