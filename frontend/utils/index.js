export const shortId = () => Math.random().toString(32).substring(2);

export const fakeArr = (length) => [...new Array(length).keys()];
