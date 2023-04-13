import { supabase } from '$lib/server/supabase.js';
import { error } from '@sveltejs/kit';

export async function load({ locals, params }) {
	if (locals.user) {
		const { status, data } = await supabase
			.from('watchlist')
			.select('*')
			.eq('user_id', locals.user.id)
			.eq('movie_id', params.id)
			.limit(1);

		if (!status) {
			throw error(status);
		}

		return {
			in_watchlist: data!.length > 0
		};
	}

	return {
		in_watchlist: false
	};
}
