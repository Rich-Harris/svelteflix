<script>
	import { enhance } from '$app/forms';
	import { page, navigating } from '$app/stores';
	import NavigatingIndicator from '$lib/components/NavigatingIndicator.svelte';
	import logo from '$lib/images/logo.svg';
	import tmdb from '$lib/images/tmdb.svg';
	import '../styles.css';
</script>

<nav>
	<a class="logo" href="/"><img class="logo" alt="SvelteFlix" src={logo} /></a>

	<div class="links">
		<a href="/search">Search</a>
		<a href="/watchlist">Watchlist</a>
		<form method="POST" action="/logout" use:enhance>
			<button>Logout</button>
		</form>
	</div>
</nav>

<main class:infinite={$page.data.infinite}>
	<slot />
</main>

<footer>
	<p>
		Data provided by <a href="https://www.themoviedb.org/"><img alt="The Movie DB" src={tmdb} /></a>
	</p>
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

	nav {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		color: var(--accent);
		max-width: 80rem;
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
	}

	.links {
		display: flex;
		align-items: center;
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
		height: 100%;
	}
</style>
