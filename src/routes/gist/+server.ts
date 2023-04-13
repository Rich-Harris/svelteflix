import { redirect } from '@sveltejs/kit';

export function GET() {
	throw redirect(308, 'https://gist.github.com/Rich-Harris/871d05a3b8c2cdf3e5e8ab3a9da560c9');
}
