<script lang="ts">
	import { page } from '$app/stores';
	import Stars from '$lib/components/Stars.svelte';
	import { media } from '$lib/api';
	import { enhance } from '$app/forms';
	import type { MovieDetails } from '$lib/types';
	import { smoothload } from '$lib/actions';

	export let movie: MovieDetails;
	export let in_watchlist: boolean;

	$: backdrop =
		movie.images.backdrops.find((image) => !image.iso_639_1) || movie.images.backdrops[0];
</script>

<div class="featured">
	<div class="backdrop">
		<img
			src={media(backdrop.file_path, 1280)}
			style="aspect-ratio: {backdrop.aspect_ratio}"
			alt={movie.title}
			use:smoothload
		/>
	</div>

	<div class="info">
		<h1>{movie.title}</h1>
		<Stars vote_average={movie.vote_average} vote_count={movie.vote_count} />
		<p>{movie.overview}</p>

		{#if $page.data.user}
			<form method="POST" action="/watchlist?/{in_watchlist ? 'delete' : 'add'}" use:enhance>
				<input type="hidden" name="movie_id" value={movie.id} />
				<button>
					{in_watchlist ? 'Remove this from your watchlist' : 'Add this to your watchlist'}
				</button>
			</form>
		{:else}
			<p><a href="/login">Log in or register</a> to add this to your watchlist.</p>
		{/if}
	</div>
</div>

<style>
	.featured {
		position: relative;
		display: grid;
		background: black;
	}

	.backdrop img {
		width: 100%;
		display: block;
	}

	.backdrop::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 8rem;
		left: 0;
		bottom: 0;
		background: linear-gradient(to top, black, transparent);
	}

	.info {
		display: flex;
		flex-direction: column;
		bottom: 0;
		width: 100%;
		padding: var(--side);
		margin-top: -4rem;
		gap: 1rem;
	}

	.info h1,
	.info p {
		margin: 0;
	}

	.info p {
		max-width: 40ch;
	}

	button {
		background: var(--accent);
		border: none;
		color: black;
		padding: 1rem;
	}

	button:active {
		filter: brightness(0.9);
	}

	@media (min-width: 80em) {
		.featured {
			grid-template-columns: 1fr 80em;
			grid-template-rows: auto;
		}

		.info {
			position: absolute;
			justify-content: center;
			top: 0;
			left: 0;
			width: 40em;
			height: 100%;
			grid-column: 1/2;
			margin: 0;
		}

		.backdrop {
			grid-column: 2/3;
		}

		.backdrop::after {
			width: 15rem;
			height: 100%;
			left: 100px;
			left: 0;
			bottom: 0;
			background: linear-gradient(to right, black, transparent);
		}
	}
</style>
