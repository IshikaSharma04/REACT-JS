export const apiGet = async (url) => { const r = await fetch(url); return r.json(); };
