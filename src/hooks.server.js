import { supabase } from '$lib/server/supabase';

export async function handle({ event, resolve }) {
	const { data } = await supabase.auth.getUser(event.cookies.get('supabase.auth.token'));
	event.locals.user = data.user;

	return await resolve(event);
}
