// oxlint-disable require-await

export function mockFetch(requests: Record<string, Response>) {
	const originalFetch = globalThis.fetch;
	let calls = 0;

	globalThis.fetch = async (
		input: string | URL | Request,
		_init?: RequestInit,
	) => {
		calls++;

		// oxlint-disable-next-line typescript/no-base-to-string
		const url = new URL(input.toString());
		const response = requests[url.pathname];
		if (!response) throw new Error('failed to find mock response');
		return response.clone();
	};

	return {
		calls,
		dispose() {
			globalThis.fetch = originalFetch;
		},
	};
}
