import { supabase } from '$lib/server/supabase.js';
import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';

const schema = z.object({
	email: z.string().email(),
	password: z.string()
});

export function load({ request, url }) {
	const referer = request.headers.get('referer');

	const redirect_to = referer?.startsWith(url.origin) ? encodeURIComponent(referer) : null;

	return {
		redirect_to,
		title: 'Log in'
	};
}

export const actions = {
	async register({ request, cookies, url }) {
		const form = await request.formData();

		const { email, password } = schema.parse({
			email: form.get('email'),
			password: form.get('password')
		});

		const { data, error } = await supabase.auth.signUp({
			email,
			password
		});

		if (error) {
			return fail(error.status ?? 500, {
				message: error.message
			});
		}

		if (data.session) {
			cookies.set('supabase.auth.token', data.session.access_token);
		}

		throw redirect(303, url.searchParams.get('redirect_to') ?? '/');
	},

	async login({ request, cookies, url }) {
		const form = await request.formData();

		const { email, password } = schema.parse({
			email: form.get('email'),
			password: form.get('password')
		});

		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			return fail(error.status ?? 500, {
				message: error.message
			});
		}

		if (data.session) {
			cookies.set('supabase.auth.token', data.session.access_token);
		}

		// throw redirect(303, url.searchParams.get('redirect_to') ?? '/');
		throw redirect(303, '/');
	}
};
