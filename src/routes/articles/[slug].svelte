<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch, session, context }) {
    const url = `/articles/${page.params.slug}.json`
    const res = await fetch(url)
    const data = await res.json()
    if (res.ok) {
      return {
        props: {
          article: data
        }
      }
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    }
  }
</script>

<script>
  import { format } from 'date-fns'
  import { name, website } from '$lib/info'
  import readingTime from 'reading-time'

  export let article

  // generated open-graph image for sharing on social media. Visit https://og-image.vercel.app/ to see more options.
  const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
    article.title
  )}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`

  const url = `${website}/articles/${article.slug}`
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

<div class="relative py-16 bg-base-100 overflow-hidden">
  <div class="relative px-4 sm:px-6 lg:px-8">
    <div class="text-lg max-w-prose mx-auto">
      <h1>
        <span
          class="block text-base text-center text-accent-focus font-semibold tracking-wide uppercase"
          >{article.category?.name}</span
        >
        <span
          class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-base-content sm:text-4xl"
          >{article.title}</span
        >
        <span class="block text-base text-center text-primary pt-2">
          <time datetime={new Date(article.published_at).toISOString()}
            >{format(new Date(article.published_at), 'MMMM d, yyyy')}</time
          >
          • {readingTime(article.content).text}
        </span>
      </h1>
      <p class="mt-8 text-xl text-primary leading-8">{article.description}</p>
    </div>
    <div class="mt-6 prose prose-base prose-lg text-base-content mx-auto">
      {@html article.compiled_content}
    </div>
  </div>
</div>
