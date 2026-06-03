<script>
	/**
	 * Small uppercase kicker above a heading, with an optional lucide icon.
	 * @type {{
	 *   Icon?: import('svelte').Component,
	 *   onGreen?: boolean,
	 *   class?: string,
	 *   children?: import('svelte').Snippet
	 * }}
	 */
	let { Icon, onGreen = false, class: className = '', children } = $props();
</script>

<span
	class="font-display inline-flex items-center gap-2 text-[0.82rem] font-semibold uppercase tracking-[0.08em] {onGreen
		? 'text-honey-200'
		: 'text-green-600'} {className}"
>
	{#if Icon}<Icon size={16} strokeWidth={2} />{/if}
	{@render children?.()}
</span>
