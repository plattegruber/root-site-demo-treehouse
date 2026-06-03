<script>
	import { ArrowRight } from '@lucide/svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	const steps = [
		['Say hi to Pip', 'Your kid meets Pip the fox and gets the tour — chair, lights, the buttons that make it go up and down.'],
		['Count the teeth', 'We count teeth together and let your kid hold the little mirror. They’re in charge of the pace.'],
		['Tickle & polish', 'A gentle clean we call “tooth tickling.” They pick the flavor. We narrate the whole time.'],
		['Pick a prize', 'Brave work earns a trip to the treasure chest, and you leave with a plan we both agree on.']
	];
</script>

<Section band="cream">
	<div use:reveal class="flex items-center gap-3.5">
		<img src="/pip-mark.svg" alt="Pip the fox" class="w-[52px]" />
		<div>
			<Eyebrow>Pip walks you through it</Eyebrow>
			<h2 class="t-h2 mt-1">What the first visit looks like</h2>
		</div>
	</div>

	<div class="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
		{#each steps as [title, body], i (title)}
			<div
				use:reveal={{ delay: i * 60 }}
				class="rounded-lg border border-line bg-surface p-[22px] shadow-sm"
			>
				<div
					class="font-display mb-3 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-honey-400 text-base font-bold text-[#4a3410]"
				>
					{i + 1}
				</div>
				<h3 class="font-display mb-1.5 text-[1.08rem] font-semibold text-ink-900">{title}</h3>
				<p class="m-0 text-[0.92rem] leading-relaxed text-ink-600">{body}</p>
			</div>
		{/each}
	</div>

	<div class="mt-7">
		<Button href="/for-parents" variant="ghost" IconRight={ArrowRight}
			>See the full first-visit guide, step by step</Button
		>
	</div>
</Section>
