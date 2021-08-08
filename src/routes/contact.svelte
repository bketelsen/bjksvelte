<script context="module">
  export async function load({ page: { query }, fetch }) {
    const fres = await fetch('/featured.json')
    var featured = await fres.json()

    const hres = await fetch('/homepage.json')
    var homepage = await hres.json()
    return {
      props: {
        featured: featured,
        homepage: homepage
      }
    }
  }
</script>

<script>
  import CardHorizontal from '$lib/components/CardHorizontal.svelte'

  import Hero from '$lib/components/hero/ImageRight.svelte'
  import { name } from '$lib/info.js'

  export let featured
  export let homepage
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
{#each featured as post}
  <CardHorizontal {post} hrefBase="/articles/" actionText="Read It!" />
{/each}
