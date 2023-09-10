<script>
	import { enhance } from '$app/forms';
	import { page, navigating } from '$app/stores';
	import NavigatingIndicator from '$lib/components/NavigatingIndicator.svelte';
	import * as api from '$lib/api';
	import logo from '$lib/images/logo.svg';
	import tmdb from '$lib/images/tmdb.svg';
	import '../styles.css';

	export let data;
	import '../styles.css';
</script>

<svelte:head>
	<link rel="preconnect" href={api.base} />
	<title>{$page.data.title ?? 'SvelteFlix'}</title>
	<meta name="description" content="Discover today's top movies" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="frontend-masters-svelteflix.vercel.app" />
	<meta property="twitter:url" content="https://frontend-masters-svelteflix.vercel.app/" />
	<meta name="twitter:title" content="SvelteFlix" />
	<meta name="twitter:description" content="Discover today's top movies" />
	<meta name="twitter:image" content="https://frontend-masters-svelteflix.vercel.app/og.png" />
</svelte:head>

<div class="flex justify-between p-2 px-4 bg-black sticky top-0 z-50 w-full">
	<a class="w-full" href="/"><img class="w-24" alt="SvelteFlix" src={logo} /></a>

	<div class="flex flex-row gap-5 w-full justify-end text-xs sm:text-base text-[--accent]">
		<div class="flex justify-between gap-5">
			<a href="/search">Search</a>

			{#if data.user}
				<a href="/watchlist">Watchlist</a>

				<form method="POST" action="/logout" use:enhance>
					<button>Log out</button>
				</form>
			{:else}
				<a href="/login">Log in | Register</a>
			{/if}
		</div>
	</div>
</div>

<main class:infinite={$page.data.infinite}>
	<slot />
</main>

<footer>
	<div>
		<a href="https://github.com/engage-intellect">@engageintellect</a>
	</div>
</footer>

{#if $navigating}
	<NavigatingIndicator />
{/if}

<style>
	nav,
	footer {
		padding: 1rem var(--side);
		margin: 0 auto;
	}

	footer {
		display: flex;
		height: 5rem;
		align-items: center;
	}

	a {
		text-decoration: none;
	}

	button {
		background: none;
		border: none;
		font-family: inherit;
		font-size: inherit;
		color: inherit;
		cursor: pointer;
	}

	.links {
		display: flex;
		align-items: center;
		font-size: 0.9rem;
	}

	main.infinite {
		height: 0;
		flex: 1;
		overflow: hidden;
	}

	.links {
		display: flex;
		gap: 1em;
	}

	.logo {
		height: 110%;
	}
</style>
