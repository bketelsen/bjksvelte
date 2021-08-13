<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch, session, context }) {
    const url = `/categories/${page.params.slug}.json`
    const res = await fetch(url)

    if (res.ok) {
      return {
        props: {
          category: await res.json()
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
  import ButtonLink from '$lib/components/ButtonLink.svelte'
  import { name, website } from '$lib/info'
  import readingTime from 'reading-time'

  export let category

  // generated open-graph image for sharing on social media. Visit https://og-image.vercel.app/ to see more options.
  const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
    category.name
  )}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`

  const url = `${website}/categories/${category.slug}`
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="pt-8 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
    <div>
      <h2 class="text-3xl tracking-tight font-extrabold text-base-content uppercase sm:text-4xl">
        {category.name}
      </h2>
      <p class="mt-3 text-xl text-base-content sm:mt-4">
        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
        Sapien tortor lacus arcu.
      </p>
    </div>
    <div class="mt-12 grid gap-1 pt-4 lg:grid-cols-3 lg:gap-x-2 lg:gap-y-2">
      {#each category.articles as post}
        <a href={'/blog/' + post.slug}>
          <div class="card shadow-2xl">
            <div class="card-body">
              <div class="badge mb-2 badge-secondary">{category.name}</div>
              <h2 class="card-title">
                {post.title}
              </h2>
              <p>{post.description}</p>
              <div class="mt-6 flex items-center">
                <div class="ml-3 flex-1">
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
        </a>
      {/each}
    </div>
  </div>
</div>
