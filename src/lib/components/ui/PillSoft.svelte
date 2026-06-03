<script>
	/**
	 * Soft outlined pill with optional leading lucide icon. Defaults to the green
	 * family; pass `class` to retint (e.g. the hero's coral comfort sticker).
	 * @type {{
	 *   Icon?: import('svelte').Component,
	 *   class?: string,
	 *   children?: import('svelte').Snippet
	 * }}
	 */
	let { Icon, class: className = '', children } = $props();
</script>

<span
	class="inline-flex items-center gap-2 whitespace-nowrap rounded-pill border border-green-200 bg-green-50 px-[15px] py-2 text-[0.9rem] font-bold text-green-700 {className}"
>
	{#if Icon}<Icon size={15} strokeWidth={2} />{/if}
	{@render children?.()}
</span>
