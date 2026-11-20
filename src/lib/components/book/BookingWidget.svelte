<script>
	import { Circle, CalendarHeart } from '@lucide/svelte';
	import Button from '$lib/components/ui/Button.svelte';

	const days = [
		{ label: 'Thu', quiet: true, times: ['8:00a', '9:30a', '11:00a', '2:00p'] },
		{ label: 'Fri', quiet: false, times: ['8:00a', '8:45a', '10:15a'] },
		{ label: 'Mon', quiet: true, times: ['8:00a', '9:00a', '1:30p', '3:00p', '4:15p'] }
	];

	/** @type {string | null} */
	let slot = $state(null);
	let done = $state(false);
	function reset() {
		done = false;
		slot = null;
	}
</script>

{#if done}
	<div class="pop-in rounded-lg border border-line bg-surface p-7 text-center shadow-md">
		<img src="/pip-peek.svg" alt="Pip the fox" class="mx-auto mb-3.5 h-24" />
		<h2 class="t-h2 mb-2">Demo booking complete.</h2>
		<p class="t-body mx-auto mb-1.5 max-w-[30em]">
			The sample visit was {slot}. No appointment was made and no text was sent.
		</p>
		<div class="mt-[18px]"><Button variant="secondary" onclick={reset}>Try another time</Button></div>
	</div>
{:else}
	<div class="grid grid-cols-1 items-start gap-[30px] lg:grid-cols-[1.1fr_0.9fr]">
		<!-- Slot picker -->
		<div class="rounded-lg border border-line bg-surface p-[26px] shadow-md">
			<span
				class="inline-flex items-center gap-2 rounded-pill border border-green-200 bg-green-50 px-[15px] py-2 text-[0.9rem] font-bold text-green-700"
			>
				<Circle size={9} class="fill-green-500 text-green-500" /> Sample time slots
			</span>
			<h3 class="font-display mb-[18px] mt-3 text-[1.22rem] font-semibold text-ink-900">
				Pick a time that works
			</h3>
			{#each days as day (day.label)}
				<div class="mb-[18px]">
					<p class="font-display mb-2.5 flex items-center gap-2 text-[1.02rem] font-semibold text-ink-900">
						{day.label}
						{#if day.quiet}
							<span class="rounded-pill bg-teal-50 px-2.5 py-[3px] text-[0.78rem] font-bold text-teal-600"
								>Quiet sensory AM</span
							>
						{/if}
					</p>
					<div class="flex flex-wrap gap-2.5">
						{#each day.times as time (time)}
							{@const id = `${day.label} ${time}`}
							{@const off = day.label === 'Fri' && time === '8:00a'}
							<button
								class="font-body rounded-md border-[1.5px] px-4 py-2.5 text-[0.92rem] font-bold transition-all
									disabled:cursor-not-allowed disabled:line-through disabled:opacity-40
									{slot === id
									? 'border-green-600 bg-green-600 text-white'
									: 'border-line-strong bg-surface text-ink-800 hover:border-green-400 hover:text-green-700'}"
								disabled={off}
								aria-pressed={slot === id}
								onclick={() => (slot = id)}
							>
								{time}
							</button>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="rounded-lg border border-line bg-surface p-[26px] shadow-md">
			<h3 class="font-display mb-1 text-[1.22rem] font-semibold text-ink-900">Example visit details</h3>
			<p class="t-small mb-[18px]">Try the flow with sample information. No personal details are needed.</p>
			<dl class="mb-5 space-y-2 text-ink-900">
				<div><dt class="font-bold">Parent</dt><dd>Alex Example</dd></div>
				<div><dt class="font-bold">Child</dt><dd>Sam Example, age 6</dd></div>
				<div><dt class="font-bold">Phone</dt><dd>(816) 555-0123</dd></div>
			</dl>
			<Button type="button" disabled={!slot} block Icon={CalendarHeart} onclick={() => (done = true)}>
				{slot ? `Simulate booking ${slot}` : 'Pick a sample time above'}
			</Button>
		</div>
	</div>
{/if}
