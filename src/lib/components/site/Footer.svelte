<script>
	import Button from '$lib/components/ui/Button.svelte';
	import { navLinks, practice } from '$lib/data/site.js';
</script>

<footer class="bg-ink-900 pb-[30px] pt-[60px] text-[#e9e2d2]">
	<div class="mx-auto max-w-[1180px] px-7">
		<div
			class="grid gap-9 border-b border-white/10 pb-9 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]"
		>
			<div>
				<img
					src="/logo-wordmark.svg"
					alt="Treehouse Pediatric Dentistry"
					class="h-[38px] opacity-90 brightness-0 invert"
				/>
				<p class="my-[18px] max-w-[26em] text-[0.95rem] leading-relaxed text-[#b8af9b]">
					A Brookside pediatric dentist built for brave first-timers and kids who've had a rough
					visit before. We move at your kid's pace.
				</p>
				<Button href="/book">Book your kid's first visit</Button>
			</div>

			<div>
				<h4 class="font-display mb-3.5 text-base font-semibold text-white">Explore</h4>
				<ul class="flex flex-col gap-2.5 text-[0.92rem]">
					{#each navLinks as { href, label } (href)}
						<li><a {href} class="text-[#c9c0ad] no-underline hover:text-white">{label}</a></li>
					{/each}
					<li>
						<a href="/parent-education" class="text-[#c9c0ad] no-underline hover:text-white"
							>Parent education</a
						>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="font-display mb-3.5 text-base font-semibold text-white">Visit us</h4>
				<ul class="flex flex-col gap-2.5 text-[0.92rem]">
					<li>{practice.street}</li>
					<li>{practice.city}</li>
					<li><a href="/book" class="text-[#c9c0ad] no-underline hover:text-white">Get directions →</a></li>
					<li class="mt-2">
						<a href={practice.phoneHref} class="font-extrabold text-white no-underline"
							>{practice.phoneDisplay}</a
						>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="font-display mb-3.5 text-base font-semibold text-white">Hours</h4>
				<ul class="flex flex-col gap-2.5 text-[0.92rem]">
					{#each practice.hours as [days, time] (days)}
						<li class="flex justify-between">
							<span>{days}</span><span class={time === 'Closed' ? 'text-[#8c836f]' : ''}>{time}</span>
						</li>
					{/each}
					<li class="mt-2.5">
						<span
							class="inline-block rounded-pill bg-teal-50 px-[13px] py-1.5 text-[0.8rem] font-bold text-teal-600"
							>Quiet sensory mornings — ask us</span
						>
					</li>
				</ul>
			</div>
		</div>

		<div
			class="flex flex-wrap items-center justify-between gap-2.5 pt-[22px] text-[0.82rem] text-[#8c836f]"
		>
			<span>© {new Date().getFullYear()} {practice.name} · {practice.dentist}</span>
			<span class="flex gap-[18px]">
				<a href="/" class="text-[#c9c0ad] no-underline hover:text-white">Privacy</a>
				<a href="/" class="text-[#c9c0ad] no-underline hover:text-white">Accessibility</a>
				<a href="/for-parents" class="text-[#c9c0ad] no-underline hover:text-white"
					>New-patient forms</a
				>
			</span>
		</div>
	</div>
</footer>
