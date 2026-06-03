<script>
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	/**
	 * @type {{
	 *   eyebrow: string,
	 *   EyebrowIcon?: import('svelte').Component,
	 *   heading: string,
	 *   sub?: string,
	 *   center?: boolean,
	 *   class?: string
	 * }}
	 */
	let { eyebrow, EyebrowIcon, heading, sub, center = false, class: className = '' } = $props();
</script>

<div use:reveal class="max-w-[40em] {center ? 'mx-auto text-center' : ''} {className}">
	<Eyebrow Icon={EyebrowIcon}>{eyebrow}</Eyebrow>
	<h2 class="t-h2 mt-2.5">{heading}</h2>
	{#if sub}
		<p class="t-body mt-3">{sub}</p>
	{/if}
</div>
