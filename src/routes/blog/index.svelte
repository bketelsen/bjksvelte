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
  import { format } from 'date-fns'
  import { name } from '$lib/info.js'

  export let articles
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>
<section class="text-gray-600 body-font">
  <div class="container flex flex-wrap px-5 py-5 mx-auto items-center">
    <div class="md:pr-12 md:py-4 md:border-r md:border-b-0 mb-0 pb-5 border-b border-gray-200">
      <h1 class="text-3xl tracking-tight font-extrabold text-base-content sm:text-4xl">
        All Articles
      </h1>
    </div>
  </div>
</section>
<div class="pt-7 pb-8 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
  <div class="relative max-w-lg mx-auto divide-y-2 divide-accent-200 lg:max-w-7xl">
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-5 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          {#each articles as post}
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-primary uppercase"
                  >{post.category.name}</span
                >
                <span class="mt-1 text-gray-500 text-sm">
                  <time>{format(new Date(post.publish_date), 'MMM d, yyyy')}</time>
                </span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  {post.title}
                </h2>
                <p class="leading-relaxed">
                  {post.description}
                </p>
                <a class="text-accent-focus inline-flex items-center mt-4"
                  >Read More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
  </div>
</div>
