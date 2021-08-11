<script context="module">
  export async function load({ page, session }) {
    return {
      props: {
        global: session.global,
        path: page.path
      }
    }
  }
</script>

<script>
  import '../app.css'
  import '../prism.css'
  import 'focus-visible'
  import Navbar from '$lib/components/Navbar.svelte'
  import Drawer from '$lib/components/Drawer.svelte'

  import SocialOnly from '$lib/components/footers/SocialOnly.svelte'

  import GlobalSEO from '$lib/components/GlobalSEO.svelte'
  import { getStores } from '$app/stores'

  let { navigating } = getStores()
  let checked = false

  $: {
    if ($navigating === null) {
      checked = false
    }
  }
  export let path
  export let global
</script>

<GlobalSEO {global} {path} />

<div class="bg-base-200 min-h-screen drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" bind:checked />
  <div class="flex flex-col drawer-content">
    <Navbar {global} />
    <div class="mx-auto flex flex-col flex-grow w-full max-w-4xl">
      <main class="flex flex-col w-full flex-grow py-4 px-4">
        <slot />
      </main>
    </div>
    <SocialOnly />
  </div>
  <Drawer {global} />
</div>
