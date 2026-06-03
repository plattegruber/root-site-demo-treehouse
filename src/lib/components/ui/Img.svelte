<script>
	/**
	 * Real, cropped image in a fixed aspect-ratio box. Mirrors the `Photo`
	 * placeholder API (aspect + class) so the two are drop-in interchangeable.
	 * @type {{
	 *   src: string,
	 *   alt: string,
	 *   aspect?: string,
	 *   position?: string,
	 *   eager?: boolean,
	 *   class?: string
	 * }}
	 */
	let { src, alt, aspect = '16 / 10', position = 'center', eager = false, class: className = '' } = $props();
</script>

<img
	{src}
	{alt}
	loading={eager ? 'eager' : 'lazy'}
	decoding="async"
	class="block w-full rounded-lg object-cover {className}"
	style="aspect-ratio: {aspect}; object-position: {position};"
/>
