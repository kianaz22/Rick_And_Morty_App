const getIdFromURL = (url: string) => url.split("/").slice(-1)[0];

export default getIdFromURL;
