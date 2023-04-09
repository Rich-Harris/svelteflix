<script>
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

<main>
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
		align-items: center;
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
