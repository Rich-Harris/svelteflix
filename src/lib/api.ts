import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';

export const base = 'https://api.movies.tastejs.com';

const cache = new Map();

export async function get(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string>
) {
	const q = new URLSearchParams(params);
	const url = `${base}/${endpoint}?${q}`;

	if (cache.has(url)) {
		return cache.get(url);
	}

	const response = await fetch(url);

	if (!response.ok) {
		throw error(response.status);
	}

	const data = await response.json();

	if (browser) {
		cache.set(url, data);
	}

	return data;
}
