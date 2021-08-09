<script>
  export let article
</script>

<svelte:head>
  <title>{article.title}</title>
  <meta name="description" content={article.description} />
  <meta name="author" content={name} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={article.title} />
  <meta property="og:description" content={article.description} />
  <meta property="og:image" content={ogImage} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={website} />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={article.title} />
  <meta name="twitter:description" content={article.description} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>
