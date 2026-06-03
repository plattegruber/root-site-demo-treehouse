<script>
	/** @type {{ n?: number, class?: string }} */
	let { n = 5, class: className = '' } = $props();
</script>

<span
	class="whitespace-nowrap tracking-[2px] text-honey-500 {className}"
	aria-label="{n} out of 5 stars"
>
	{'★'.repeat(n)}
</span>
