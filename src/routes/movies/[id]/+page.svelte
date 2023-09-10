<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Hero from './Hero.svelte';
	import Stars from '$lib/components/Stars.svelte';

	export let data;
</script>

<Hero movie={data.movie} in_watchlist={data.in_watchlist} />

<div class="grid" class:has-trailer={!!data.trailer}>
	{#if data.trailer}
		<div class="">
			<iframe
				class=""
				src="https://www.youtube.com/embed/{data.trailer.key}"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>
	{/if}

	<div class="flex flex-col gap-2 w-full p-4 bg-[--accent] text-lg">
		<div class="max-w-sm">
			<div class="flex gap-2">
				<div class="font-bold text-xl w-full">Released:</div>
				<div class="w-full">{data.movie.release_date}</div>
			</div>

			<div class="flex gap-2">
				<div class="font-bold w-full">Budget:</div>
				<div class="w-full">${Math.round(data.movie.budget / 1e6)}M</div>
			</div>

			<div class="flex gap-2">
				<div class="font-bold w-full">Runtime:</div>
				<div class="w-full">{data.movie.runtime} minutes</div>
			</div>

			<div class="flex gap-2">
				<div class="font-bold w-full">Revenue:</div>
				<div class="w-full">${Math.round(data.movie.revenue / 1e6)}M</div>
			</div>
		</div>
	</div>
</div>

{#if data.movie.recommendations.results.length > 0}
	<Carousel title="You might also like..." movies={data.movie.recommendations.results} />
{/if}

<style>
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
