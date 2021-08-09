<script context="module">
  export async function load({ page: { query }, fetch }) {
    const hres = await fetch('/homepage.json')
    var homepage = await hres.json()
    return {
      props: {
        homepage: homepage
      }
    }
  }
</script>

<script>
  import Hero from '$lib/components/hero/ImageRight.svelte'
  import { name } from '$lib/info.js'

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
