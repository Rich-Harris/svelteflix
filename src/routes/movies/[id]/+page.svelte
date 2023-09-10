<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Hero from './Hero.svelte';

	import { fade, slide } from 'svelte/transition';

	export let data;
</script>

<Hero movie={data.movie} in_watchlist={data.in_watchlist} />

<div class="grid" class:has-trailer={!!data.trailer}>
	{#if data.trailer}
		<div in:fade class="">
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

	<div in:slide class="flex flex-col gap-2 w-full p-4 bg-[--accent] text-sm md:text-lg">
		<div class="max-w-md">
			<div class="flex gap-2">
				<div class="font-bold w-full uppercase">Runtime:</div>
				<div class="w-full">{data.movie.runtime} minutes</div>
			</div>

			<div class="flex gap-2">
				<div class="font-bold w-full uppercase">Released:</div>
				<div class="w-full">{data.movie.release_date}</div>
			</div>

			<div class="flex gap-2">
				<div class="font-bold w-full uppercase">Budget:</div>
				<div class="w-full">${Math.round(data.movie.budget / 1e6)}M</div>
			</div>

			<div class="flex gap-2">
				<div class="font-bold w-full uppercase">Revenue:</div>
				<div class="w-full">${Math.round(data.movie.revenue / 1e6)}M</div>
			</div>

			<div class="flex gap-2">
				<div class="font-bold w-full uppercase">IMDB:</div>
				<a
					class=" w-full"
					target="_blank"
					href={`https://www.imdb.com/title/${data.movie.imdb_id}/?ref_=fn_al_tt_1a`}
				>
					<div class="underline">Read More</div>
				</a>
			</div>
		</div>
	</div>
</div>

{#if data.movie.recommendations.results.length > 0}
	<div class="p-4">
		<Carousel title="You might also like..." movies={data.movie.recommendations.results} />
	</div>
{/if}

<style>
	iframe {
		aspect-ratio: 16 / 9;
		width: 100%;
	}

	@media (min-width: 60em) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
