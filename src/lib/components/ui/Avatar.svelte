<script>
	/**
	 * Initial-in-a-circle avatar, tinted by tone.
	 * @type {{ initial: string, tone?: 'honey' | 'green' | 'teal' | 'coral' }}
	 */
	let { initial, tone = 'honey' } = $props();

	const tones = {
		honey: 'bg-honey-200 text-honey-700',
		green: 'bg-green-100 text-green-700',
		teal: 'bg-teal-100 text-teal-600',
		coral: 'bg-coral-100 text-coral-700'
	};
</script>

<div
	class="font-display flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full text-[1.05rem] font-bold {tones[
		tone
	]}"
	aria-hidden="true"
>
	{initial}
</div>
