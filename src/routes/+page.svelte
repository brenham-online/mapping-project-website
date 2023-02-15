<script lang="ts">
	import '@fontsource/montserrat';
	import MapBackground from '$lib/MapBackground.svelte';
</script>

<svelte:head>
	<title>Brenham Mapping Project</title>
</svelte:head>

<MapBackground />

<main>
	<div>
		<h1>Brenham Mapping Project</h1>
		<p>hosted by <a href="https://brenham.online">brenham.online</a></p>
		<p>
			The Brenham Mapping Project is a collaborative project to improve the quality of map data in
			the Brenham area. This consists of raw data gathering through boots-on-the-ground,
			street-level, and aerial surveys, and using that raw data to contribute to the <a
				href="https://www.openstreetmap.org/#map=14/30.1635/-96.3964">OpenStreetMap</a
			> project.
		</p>
		<p>
			Displayed here is a map of Brenham rendered by OpenStreetMap, with all of our contributions.
		</p>
	</div>
</main>

<style>
	:global(body) {
		margin: 10px;
	}

	main {
		font-family: Montserrat, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		color: white;
		text-align: right;
		display: flex;
		flex-direction: row;
		justify-content: end;
	}

	main > div {
		background-color: rgba(0, 0, 0, 60%);
		backdrop-filter: blur(10px);
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 15px;
		width: 100%;
		max-width: 600px;
		max-height: 30vh;
		overflow-y: auto;
		width: 100%;
		border-radius: 5px;
	}

	@media (max-width: 650px) {
		main {
			text-align: left;
		}
	}

	a {
		color: inherit;
		font-weight: bold;
	}

	main p,
	main h1 {
		margin: 0;
	}
</style>
