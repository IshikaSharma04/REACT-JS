export const sortData = (arr, key) => [...arr].sort((a,b) => a[key] > b[key] ? 1 : -1);
