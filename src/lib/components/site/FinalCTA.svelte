<script>
	import { CalendarHeart, Phone } from '@lucide/svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { reveal } from '$lib/actions/reveal.js';
	import { practice } from '$lib/data/site.js';
</script>

<Section>
	<div
		use:reveal
		class="relative overflow-hidden rounded-xl bg-honey-400 px-6 py-14 text-center sm:p-14"
	>
		<img
			src="/doodle-star.svg"
			alt=""
			class="pointer-events-none absolute left-10 top-[30px] w-[38px] opacity-85"
		/>
		<img
			src="/doodle-leaf.svg"
			alt=""
			class="pointer-events-none absolute bottom-7 right-11 w-[50px] rotate-[20deg] opacity-85"
		/>
		<h2 class="t-h1 m-0 mb-3 text-[#4a3410]">Let's make the dentist the easy part.</h2>
		<p class="mx-auto mb-6 max-w-[32em] text-[1.12rem] text-[#6b4e18]">
			Book online in under a minute, or call and talk to a real person. Either way, we'll plan the
			visit around your kid.
		</p>
		<div class="flex flex-wrap justify-center gap-3.5">
			<Button href="/book" size="lg" Icon={CalendarHeart}>Book your kid's first visit</Button>
			<Button href={practice.phoneHref} size="lg" variant="secondary" Icon={Phone}
				>{practice.phoneDisplay}</Button
			>
		</div>
		<p class="mt-4 text-[0.92rem] font-semibold text-[#6b4e18]">
			If your kid needs a break, they get a break. We'll never hold them down or rush them through it.
		</p>
	</div>
</Section>
