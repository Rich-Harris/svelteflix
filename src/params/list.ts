import { views } from '$lib/views';

export function match(param) {
	return param in views;
}
