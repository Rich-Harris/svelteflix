const views = new Set(['trending', 'popular', 'top-rated', 'newest']);

export function match(param) {
	return views.has(param);
}
