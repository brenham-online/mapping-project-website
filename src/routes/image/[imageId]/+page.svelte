<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<img src="/image/{data.image?.id}/raw" alt={data.image?.id} />

<pre><code>{JSON.stringify(data, null, 4)}</code></pre>
