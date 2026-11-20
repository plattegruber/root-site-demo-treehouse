<script>
	/**
	 * Per-page SEO + Open Graph / Twitter tags.
	 * @type {{ title: string, description: string, path?: string }}
	 */
	let { title, description, path = '/' } = $props();

	const base = 'https://treehouse.demo.root.site';
	const demoTitle = $derived(`Fictional demo: ${title}`);
	const demoDescription = $derived(`Fictional demo. No patient care. ${description}`);
	const url = $derived(base + path);
	const image = `${base}/og-image.png`;
</script>

<svelte:head>
	<title>{demoTitle}</title>
	<meta name="description" content={demoDescription} />
	<link rel="canonical" href={url} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={demoTitle} />
	<meta property="og:description" content={demoDescription} />
	<meta property="og:image" content={image} />
	<meta property="og:image:alt" content="Treehouse Pediatric Dentistry fictional demo" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={demoTitle} />
	<meta name="twitter:description" content={demoDescription} />
	<meta name="twitter:image" content={image} />
</svelte:head>
