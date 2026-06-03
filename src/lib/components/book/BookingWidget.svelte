<script>
	import { Circle, CalendarHeart } from '@lucide/svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { practice } from '$lib/data/site.js';

	const days = [
		{ label: 'Tomorrow · Thu', quiet: true, times: ['8:00a', '9:30a', '11:00a', '2:00p'] },
		{ label: 'Fri', quiet: false, times: ['8:00a', '8:45a', '10:15a'] },
		{ label: 'Mon', quiet: true, times: ['8:00a', '9:00a', '1:30p', '3:00p', '4:15p'] }
	];

	/** @type {string | null} */
	let slot = $state(null);
	let done = $state(false);
	let form = $state({ parent: '', kid: '', phone: '', notes: '' });
	let touched = $state({ parent: false, kid: false, phone: false });

	const errs = $derived({
		parent: form.parent.trim().length < 2 ? 'Tell us who we’re booking for' : '',
		kid: form.kid.trim().length < 1 ? 'Your kid’s first name & age helps us prep' : '',
		phone: form.phone.replace(/\D/g, '').length < 10 ? 'A 10-digit number we can text' : ''
	});
	const valid = $derived(!errs.parent && !errs.kid && !errs.phone && slot);

	/** @param {'parent'|'kid'|'phone'} k */
	function fieldClass(k) {
		const state = touched[k] ? (errs[k] ? 'border-coral-400' : form[k] ? 'border-green-400' : '') : '';
		return `w-full rounded-md border-[1.5px] border-line-strong bg-surface px-3.5 py-3 font-body text-base text-ink-900
			transition-[border-color,box-shadow] focus:border-teal-400 focus:shadow-[0_0_0_3px_var(--color-teal-100)] focus:outline-none ${state}`;
	}

	function submit() {
		if (valid) {
			done = true;
		} else {
			touched = { parent: true, kid: true, phone: true };
		}
	}

	function reset() {
		done = false;
		slot = null;
	}
</script>

{#if done}
	<div class="pop-in rounded-lg border border-line bg-surface p-7 text-center shadow-md">
		<img src="/pip-peek.svg" alt="Pip the fox" class="mx-auto mb-3.5 h-24" />
		<h2 class="t-h2 mb-2">Got it — you’re on the calendar.</h2>
		<p class="t-body mx-auto mb-1.5 max-w-[30em]">
			We’ll text {form.parent.split(' ')[0] || 'you'} within one business day to confirm
			{form.kid || 'your kid'}’s spot{slot ? ` (${slot})` : ''}. Bring the comfort toy.
		</p>
		<p class="t-small mt-3.5">
			Need to change something? Call
			<a href={practice.phoneHref} class="font-extrabold text-green-700">{practice.phoneDisplay}</a>.
		</p>
		<div class="mt-[18px]"><Button variant="secondary" onclick={reset}>Book another visit</Button></div>
	</div>
{:else}
	<div class="grid grid-cols-1 items-start gap-[30px] lg:grid-cols-[1.1fr_0.9fr]">
		<!-- Slot picker -->
		<div class="rounded-lg border border-line bg-surface p-[26px] shadow-md">
			<span
				class="inline-flex items-center gap-2 rounded-pill border border-green-200 bg-green-50 px-[15px] py-2 text-[0.9rem] font-bold text-green-700"
			>
				<Circle size={9} class="fill-green-500 text-green-500" /> Live openings
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
			<p class="t-small mt-1">
				Don’t see a good time?
				<a href={practice.phoneHref} class="font-bold text-green-700">Call us</a> — we keep same-day
				emergency spots open.
			</p>
		</div>

		<!-- Details -->
		<form
			class="rounded-lg border border-line bg-surface p-[26px] shadow-md"
			onsubmit={(e) => {
				e.preventDefault();
				submit();
			}}
		>
			<h3 class="font-display mb-1 text-[1.22rem] font-semibold text-ink-900">A few details</h3>
			<p class="t-small mb-[18px]">That’s all we need. No accounts, no long forms.</p>

			<div class="mb-3.5">
				<label for="bk-parent" class="mb-1.5 block text-[0.9rem] font-bold text-ink-700">Parent name</label>
				<input
					id="bk-parent"
					class={fieldClass('parent')}
					bind:value={form.parent}
					onblur={() => (touched.parent = true)}
					placeholder="Your name"
				/>
				{#if touched.parent && errs.parent}
					<div class="mt-1.5 text-[0.82rem] font-semibold text-coral-600">{errs.parent}</div>
				{/if}
			</div>

			<div class="mb-3.5">
				<label for="bk-kid" class="mb-1.5 block text-[0.9rem] font-bold text-ink-700"
					>Kid’s first name &amp; age</label
				>
				<input
					id="bk-kid"
					class={fieldClass('kid')}
					bind:value={form.kid}
					onblur={() => (touched.kid = true)}
					placeholder="e.g. Theo, 6"
				/>
				{#if touched.kid && errs.kid}
					<div class="mt-1.5 text-[0.82rem] font-semibold text-coral-600">{errs.kid}</div>
				{/if}
			</div>

			<div class="mb-3.5">
				<label for="bk-phone" class="mb-1.5 block text-[0.9rem] font-bold text-ink-700">Phone</label>
				<input
					id="bk-phone"
					class={fieldClass('phone')}
					bind:value={form.phone}
					onblur={() => (touched.phone = true)}
					placeholder="(816) 555-0123"
					inputmode="tel"
				/>
				{#if touched.phone && errs.phone}
					<div class="mt-1.5 text-[0.82rem] font-semibold text-coral-600">{errs.phone}</div>
				{/if}
			</div>

			<div class="mb-3.5">
				<label for="bk-notes" class="mb-1.5 block text-[0.9rem] font-bold text-ink-700">
					Anything we should know about your kid’s nerves or needs?
					<span class="font-semibold text-ink-400">(optional)</span>
				</label>
				<textarea
					id="bk-notes"
					class="min-h-[76px] w-full resize-y rounded-md border-[1.5px] border-line-strong bg-surface px-3.5 py-3 font-body text-base text-ink-900 focus:border-teal-400 focus:shadow-[0_0_0_3px_var(--color-teal-100)] focus:outline-none"
					bind:value={form.notes}
					placeholder="Had a rough visit before, sensory stuff, what helps them feel safe…"
				></textarea>
			</div>

			<Button type="submit" block Icon={CalendarHeart}>
				{slot ? `Request ${slot}` : 'Pick a time above'}
			</Button>
			<p class="t-small mt-3 text-center">
				We’ll text to confirm within one business day. No spam, ever.
			</p>
		</form>
	</div>
{/if}
