<script>
	import { Camera } from '@lucide/svelte';

	/**
	 * Labeled photo placeholder. `intent` describes the real shot to commission;
	 * the dashed, cross-hatched frame reads clearly as "art goes here".
	 * @type {{
	 *   intent: string,
	 *   tone?: '' | 'teal' | 'green',
	 *   aspect?: string,
	 *   Icon?: import('svelte').Component,
	 *   class?: string
	 * }}
	 */
	let { intent, tone = '', aspect = '16 / 10', Icon = Camera, class: className = '' } = $props();
</script>

<div class="photo {tone} {className}" style="aspect-ratio: {aspect};">
	<Icon size={26} strokeWidth={2} />
	<span class="cap">{intent}</span>
</div>

<style>
	.photo {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 9px;
		padding: 20px;
		overflow: hidden;
		text-align: center;
		border: 1.5px dashed var(--color-honey-300);
		border-radius: var(--radius-lg);
		color: var(--color-honey-700);
		background:
			repeating-linear-gradient(
				45deg,
				rgba(242, 172, 52, 0.06) 0 14px,
				rgba(242, 172, 52, 0) 14px 28px
			),
			var(--color-honey-50);
	}
	.photo :global(svg) {
		opacity: 0.7;
	}
	.cap {
		max-width: 260px;
		font-size: 0.82rem;
		font-style: italic;
		font-weight: 600;
		line-height: 1.4;
		color: var(--color-ink-500);
	}
	.photo.teal {
		border-color: var(--color-teal-300);
		color: var(--color-teal-600);
		background:
			repeating-linear-gradient(
				45deg,
				rgba(62, 144, 151, 0.06) 0 14px,
				rgba(62, 144, 151, 0) 14px 28px
			),
			var(--color-teal-50);
	}
	.photo.green {
		border-color: var(--color-green-300);
		color: var(--color-green-600);
		background:
			repeating-linear-gradient(
				45deg,
				rgba(62, 139, 87, 0.06) 0 14px,
				rgba(62, 139, 87, 0) 14px 28px
			),
			var(--color-green-50);
	}
</style>
