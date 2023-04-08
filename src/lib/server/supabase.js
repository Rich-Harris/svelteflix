import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from '$env/static/private';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
	auth: {
		autoRefreshToken: false,
		persistSession: false,
		detectSessionInUrl: false
	}
});
