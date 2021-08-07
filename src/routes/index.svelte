<script context="module">
  export async function load({ page: { query }, fetch }) {
    const fres = await fetch('/featured.json')
    var featured = await fres.json()

    return {
      props: {
        featured: featured
      }
    }
  }
</script>

<script>
  import CardHorizontal from '$lib/components/CardHorizontal.svelte'
  import { name } from '$lib/info.js'

  export let featured
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>

{#each featured as post}
  <CardHorizontal {post} hrefBase="/articles/" actionText="Read It!" />
{/each}
