<script>
	/**
	 * Small pill tag.
	 * @type {{ tone?: 'coral' | 'teal' | 'honey' | 'green', class?: string, children?: import('svelte').Snippet }}
	 */
	let { tone = 'green', class: className = '', children } = $props();

	const tones = {
		coral: 'bg-coral-50 text-coral-700',
		teal: 'bg-teal-50 text-teal-600',
		honey: 'bg-honey-50 text-honey-700',
		green: 'bg-green-50 text-green-700'
	};
</script>

<span
	class="inline-block rounded-pill px-[13px] py-1.5 text-[0.8rem] font-bold {tones[tone]} {className}"
>
	{@render children?.()}
</span>
