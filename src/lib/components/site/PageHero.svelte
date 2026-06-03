<script>
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';

	/**
	 * Interior-page hero: eyebrow + heading + lede, on the warm hero wash.
	 * @type {{
	 *   eyebrow: string,
	 *   EyebrowIcon?: import('svelte').Component,
	 *   heading: string,
	 *   lede?: string,
	 *   children?: import('svelte').Snippet
	 * }}
	 */
	let { eyebrow, EyebrowIcon, heading, lede, children } = $props();
</script>

<section
	class="relative overflow-hidden pb-10 pt-14"
	style="background: radial-gradient(120% 80% at 85% -5%, var(--color-honey-50) 0%, rgba(254,246,226,0) 55%), var(--color-cream);"
>
	<div class="mx-auto max-w-[1180px] px-7">
		<Eyebrow Icon={EyebrowIcon}>{eyebrow}</Eyebrow>
		<h1 class="t-h1 mt-2.5">{heading}</h1>
		{#if lede}
			<p class="t-lead mt-4 max-w-[34em]">{lede}</p>
		{/if}
		{#if children}
			<div class="mt-[18px]">{@render children()}</div>
		{/if}
	</div>
</section>
