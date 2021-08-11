<script>
  export let global
  export let path
</script>

<svelte:head>
  <title>{global.title}</title>
  <meta name="description" content={global.metaDescription} />
  <meta name="author" content={global.writer.name} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={global.siteURL + path} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={global.title} />
  <meta property="og:description" content={global.metaDescription} />
  <meta property="og:image" content={global.defaultSeo.shareImage.formats['1200'][1].url} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={global.siteURL} />
  <meta property="twitter:url" content={global.siteURL + path} />
  <meta name="twitter:title" content={global.title} />
  <meta name="twitter:description" content={global.metaDescription} />
  <meta name="twitter:image" content={global.defaultSeo.shareImage.formats['1200'][1].url} />
</svelte:head>
