import { supabase } from '$lib/server/supabase.js';
import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';

const schema = z.object({
	email: z.string().email(),
	password: z.string()
});

export async function load({ locals }) {
	console.log('event.locals.user', locals.user);
}

export const actions = {
	async register({ request, cookies }) {
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

		throw redirect(303, '/');
	},

	async login({ request, cookies }) {
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

		throw redirect(303, '/');
	}
};
