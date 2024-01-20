export const fetcher = (url) =>
	fetch(url, {
		headers: {
			Authorization: ``
		}
	}).then((response) => response.json());
