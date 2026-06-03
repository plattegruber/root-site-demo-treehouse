<script>
	/**
	 * Standard page section: vertical rhythm + optional band background + a
	 * centered max-w container. `tight` halves the vertical padding.
	 * @type {{
	 *   band?: 'none' | 'cream' | 'green',
	 *   tight?: boolean,
	 *   class?: string,
	 *   innerClass?: string,
	 *   id?: string,
	 *   children?: import('svelte').Snippet
	 * }}
	 */
	let {
		band = 'none',
		tight = false,
		class: className = '',
		innerClass = '',
		id,
		children
	} = $props();

	const bands = {
		none: '',
		cream: 'bg-cream-deep',
		green: 'bg-green-600 text-white'
	};
</script>

<section {id} class="{tight ? 'py-14' : 'py-[88px]'} {bands[band]} {className}">
	<div class="mx-auto max-w-[1180px] px-7 {innerClass}">
		{@render children?.()}
	</div>
</section>
