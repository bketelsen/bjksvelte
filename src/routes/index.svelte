<script context="module">
  export async function load({ page: { query }, fetch }) {
    const hres = await fetch('/homepage.json')
    var homepage = await hres.json()
    const cres = await fetch('/categories.json')
    var categories = await cres.json()

    const fres = await fetch('/featured.json')
    var featured = await fres.json()
    return {
      props: {
        homepage: homepage,
        featured: featured
      }
    }
  }
</script>

<script>
  import Hero from '$lib/components/hero/ImageRight.svelte'
  import { name } from '$lib/info.js'
  import { format } from 'date-fns'

  export let homepage
  export let featured
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>
<Hero
  title={homepage.hero.title}
  body={homepage.hero.body}
  image={homepage.hero.picture}
  ctaText={homepage.hero.ctaText}
  ctaLink={homepage.hero.ctaLink}
/>
<section class="text-gray-600 body-font">
  <div class="container flex flex-wrap px-5 py-5 mx-auto items-center">
    <div class="md:pr-12 md:py-4 md:border-r md:border-b-0 mb-0 pb-5 ">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
        Recent and Featured Posts
      </h1>
    </div>
  </div>
</section>
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-5 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      {#each featured as post}
        <div class="py-8 flex flex-wrap md:flex-nowrap">
          <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span class="font-semibold title-font text-primary uppercase">{post.category.name}</span
            >
            <span class="mt-1 text-gray-500 text-sm">
              <time>{format(new Date(post.publish_date), 'MMM d, yyyy')}</time>
            </span>
          </div>
          <div class="md:flex-grow md:border-l md:border-primary md:pl-4">
            <h2 class="text-2xl font-medium title-font mb-2">
              {post.title}
            </h2>
            <p class="leading-relaxed">
              {post.description}
            </p>
            <a class="text-indigo-500 inline-flex items-center mt-4"
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
