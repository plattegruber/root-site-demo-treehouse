<script>
	/**
	 * Rounded-square icon chip. `tone` sets the soft background + icon color.
	 * @type {{
	 *   Icon: import('svelte').Component,
	 *   tone?: 'green' | 'honey' | 'teal' | 'coral',
	 *   size?: 'md' | 'sm',
	 *   class?: string
	 * }}
	 */
	let { Icon, tone = 'green', size = 'md', class: className = '' } = $props();

	const tones = {
		green: 'bg-green-50 text-green-600',
		honey: 'bg-honey-50 text-honey-700',
		teal: 'bg-teal-50 text-teal-600',
		coral: 'bg-coral-50 text-coral-600'
	};

	const box = $derived(size === 'sm' ? 'w-11 h-11 rounded-[14px]' : 'w-[52px] h-[52px] rounded-2xl');
	const px = $derived(size === 'sm' ? 22 : 26);
</script>

<span class="flex shrink-0 items-center justify-center {box} {tones[tone]} {className}">
	<Icon size={px} strokeWidth={2} />
</span>
