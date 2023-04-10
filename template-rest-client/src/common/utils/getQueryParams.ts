export function getQueryParams(request: Request) {
	const url = new URL(request.url);

	return Object.fromEntries(url.searchParams.entries());
}
