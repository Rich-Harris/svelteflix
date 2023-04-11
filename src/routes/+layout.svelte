<script>
	import { page } from '$app/stores';
	import '../styles.css';
</script>

<nav>
	<div class="links">
		<a href="/">Home</a>
		<a href="/movies">Movies</a>
		<a href="/tv">TV</a>
	</div>

	<div class="search">
		<a href="/search">Search</a>
	</div>

	<div class="user">
		<a href="/watchlist">Watchlist</a>
	</div>
</nav>

<main class:infinite={$page.data.infinite}>
	<slot />
</main>

<footer>
	<p>Data provided by <a href="https://www.themoviedb.org/">TMDb</a></p>
</footer>

<style>
	nav,
	footer {
		padding: 1rem var(--side);
		margin: 0 auto;
	}

	nav {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		width: 100%;
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

	.search {
		text-align: center;
	}

	.user {
		text-align: right;
	}
</style>
