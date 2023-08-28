<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Hero from './Hero.svelte';
	import Stars from '$lib/components/Stars.svelte';

	export let data;
</script>

<Hero movie={data.movie} in_watchlist={data.in_watchlist} />

<div class="column grid" class:has-trailer={!!data.trailer}>
	{#if data.trailer}
		<iframe
			src="https://www.youtube.com/embed/{data.trailer.key}"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	{/if}

	<dl class="data">
		<dt>Released</dt>
		<dd>{data.movie.release_date}</dd>

		<dt>Rating</dt>
		<dd>{data.movie.vote_average}</dd>
		<!-- <Stars vote_average={data.movie.vote_average} vote_count={data.movie.vote_count} /> -->

		<dt>Budget</dt>
		<dd>${Math.round(data.movie.budget / 1e6)}M</dd>

		<dt>Revenue</dt>
		<dd>${Math.round(data.movie.revenue / 1e6)}M</dd>

		<dt>Genre</dt>
		<dd class="genres">{data.movie.genres?.map((g) => g.name).join(', ')}</dd>

		<dt>Runtime</dt>
		<dd>{data.movie.runtime} minutes</dd>
	</dl>
</div>

{#if data.movie.recommendations.results.length > 0}
	<Carousel title="You might also like..." movies={data.movie.recommendations.results} />
{/if}

<style>
	.grid {
		display: grid;
		max-width: var(--column);
		margin: 2em auto;
		gap: 2em;
	}

	iframe {
		aspect-ratio: 16 / 9;
		width: 100%;
	}

	.trailer {
		border-radius: 10px;
	}

	.data {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 1em;
	}

	dt,
	dd {
		line-height: 1;
	}

	dt {
		text-transform: uppercase;
		font-size: 0.8rem;
		top: 0.2rem;
		opacity: 0.8;
	}

	dd {
		margin: 0;
	}

	.watch-button {
		background-color: var(--accent);
		padding: 0.5em 1em;
		text-decoration: none;
		text-transform: uppercase;
	}

	.genres {
		grid-column: 2/5;
	}

	@media (min-width: 45em) {
		.data {
			display: grid;
			grid-template-columns: max-content 1fr max-content 1fr;
			gap: 1em;
		}
	}

	@media (min-width: 60em) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}

		.data {
			height: 0;
		}
	}
</style>
