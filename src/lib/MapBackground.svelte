<script lang="ts">
	import 'leaflet/dist/leaflet.css';
	import L from 'leaflet';

	function createMap(container: HTMLDivElement) {
		let m = new L.Map(container, { preferCanvas: true })
			.setView([30.1658, -96.3983], 14)
			.setMaxBounds([
				[29.9865, -96.7188],
				[30.4528, -96.0212]
			])
			.setMaxZoom(19)
			.setMinZoom(13);
		new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, with special thanks to <a href="https://maps.brenham.online/">Brenham Mapping Project</a> contributors!`,
			maxZoom: 19
		}).addTo(m);
		return m;
	}

	let map: L.Map | null = null;

	function mapAction(container: HTMLDivElement) {
		map = createMap(container);

		return {
			destroy: () => {
				map?.remove();
				map = null;
			}
		};
	}

	function resizeMap() {
		map?.invalidateSize();
	}
</script>

<svelte:window on:resize={resizeMap} />
<div class="map-background" use:mapAction />

<style>
	.map-background {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -1;
	}
</style>
