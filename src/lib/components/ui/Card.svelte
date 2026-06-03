<script>
	/**
	 * Surface card. Renders an `<a>` when `href` is set (so navigable cards are
	 * real links), otherwise a `<div>`. `hoverable` adds the lift-on-hover affordance.
	 * @type {{
	 *   href?: string,
	 *   hoverable?: boolean,
	 *   class?: string,
	 *   children?: import('svelte').Snippet
	 * }}
	 */
	let { href, hoverable = false, class: className = '', children } = $props();

	const base =
		'block rounded-lg border border-line bg-surface p-[26px] shadow-md no-underline ' +
		'transition-[transform,box-shadow] duration-[260ms] ease-[var(--ease-soft)]';
	const hover = 'cursor-pointer hover:-translate-y-[3px] hover:shadow-lg';
	const cls = $derived(`${base} ${hoverable ? hover : ''} ${className}`);
</script>

{#if href}
	<a {href} class={cls}>{@render children?.()}</a>
{:else}
	<div class={cls}>{@render children?.()}</div>
{/if}
