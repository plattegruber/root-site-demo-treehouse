<script>
	import { ChevronDown } from '@lucide/svelte';

	/** @type {{ q: string, a: string }} */
	let { q, a } = $props();

	let open = $state(false);
	const id = $derived(`faq-${q.replace(/\W+/g, '-').toLowerCase().slice(0, 40)}`);
</script>

<div class="border-b border-line">
	<button
		class="font-display flex w-full items-center gap-4 py-5 text-left text-[1.18rem] font-semibold text-ink-900"
		aria-expanded={open}
		aria-controls={id}
		onclick={() => (open = !open)}
	>
		{q}
		<ChevronDown
			size={22}
			strokeWidth={2}
			class="ml-auto shrink-0 text-green-600 transition-transform duration-[260ms] ease-[var(--ease-soft)] {open
				? 'rotate-180'
				: ''}"
		/>
	</button>
	<div
		{id}
		class="grid transition-[grid-template-rows] duration-[420ms] ease-[var(--ease-soft)]"
		style="grid-template-rows: {open ? '1fr' : '0fr'};"
	>
		<div class="overflow-hidden">
			<div class="max-w-[60ch] pb-[22px] pl-10 text-[1.02rem] leading-relaxed text-ink-600">{a}</div>
		</div>
	</div>
</div>
