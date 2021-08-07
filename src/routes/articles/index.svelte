<script context="module">
  export async function load({ page: { query }, fetch }) {
    const fres = await fetch('/featured.json')
    var featured = await fres.json()

    const ares = await fetch('/articles.json')
    var articles = await ares.json()
    return {
      props: {
        featured: featured,
        articles: articles
      }
    }
  }
</script>

<script>
  import ButtonLink from '$lib/components/ButtonLink.svelte'
  import CardHorizontal from '$lib/components/CardHorizontal.svelte'
  import { format } from 'date-fns'
  import { name } from '$lib/info.js'
  import readingTime from 'reading-time'

  export let articles
  export let featured
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>

{#each featured as post}
  <CardHorizontal {post} hrefBase="/articles/" actionText="Read It!" />
{/each}
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="pt-8 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
    <div>
      <h2 class="text-3xl tracking-tight font-extrabold text-base-content sm:text-4xl">
        Recent Articles
      </h2>
      <p class="mt-3 text-xl text-base-content sm:mt-4">
        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
        Sapien tortor lacus arcu.
      </p>
    </div>
    <div class="mt-12 grid gap-1 pt-4 lg:grid-cols-3 lg:gap-x-2 lg:gap-y-2">
      {#each articles as post}
        <div class="card shadow-2xl">
          <div class="card-body">
            <div class="badge mb-2 badge-secondary">{post.category.name}</div>
            <h2 class="card-title">
              {post.title}
            </h2>
            <p>{post.description}</p>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a href="/">
                  <span class="sr-only">{post.author.name}</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    src={post.author.picture.formats.thumbnail.url}
                    alt=""
                  />
                </a>
              </div>
              <div class="ml-3 flex-1">
                <p class="flex text-sm font-medium text-primary justify-end">
                  <a href="#"> {post.author.name} </a>
                </p>
                <div class="text-sm">
                  <p class="flex justify-end">
                    <time>{format(new Date(post.published_at), 'MMMM d, yyyy')}</time>
                  </p>
                  <p class="flex justify-end"><span>{readingTime(post.content).text}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
