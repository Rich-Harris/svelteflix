<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Hero from './Hero.svelte';

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

	<dl class="mini-grid">
		<dt>Released</dt>
		<dd>{data.movie.release_date}</dd>

		<dt>Runtime</dt>
		<dd>{data.movie.runtime} minutes</dd>

		<dt>Budget</dt>
		<dd>{data.movie.budget}</dd>

		<dt>Box office</dt>
		<dd>{data.movie.revenue}</dd>

		<dt>Genre</dt>
		<dd>{data.movie.genres?.map((g) => g.name).join(', ')}</dd>
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
		grid-template-columns: 1fr 1fr;
		gap: 2em;
	}

	iframe {
		aspect-ratio: 16 / 9;
		width: 100%;
	}

	.mini-grid {
		display: grid;
		height: 0;
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
	}

	dd {
		margin: 0;
	}
</style>
