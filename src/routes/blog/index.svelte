<script context="module">
  export async function load({ page: { query }, fetch }) {
    const ares = await fetch('/articles.json')
    var articles = await ares.json()
    return {
      props: {
        articles: articles
      }
    }
  }
</script>

<script>
  import ArticleListGroup from '$lib/components/lists/ArticleListGroup.svelte'
  import { name } from '$lib/info.js'
  export let articles
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>

<div class="pt-8 pb-8 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
  <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
    <ArticleListGroup {articles} title="All Articles" subtitle="Raw and unfiltered. Like me." />
  </div>
</div>
