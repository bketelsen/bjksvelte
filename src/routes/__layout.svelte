<script context="module">
  export async function load({ page: { query }, fetch }) {
    const gres = await fetch('/global.json')
    var global = await gres.json()

    return {
      props: {
        global: global
      }
    }
  }
</script>

<script>
  import '../app.css'
  import '../prism.css'
  import 'focus-visible'
  import Navbar from '$lib/components/Navbar.svelte'
  import Sidebar from '$lib/components/Sidebar.svelte'
  import SocialOnly from '$lib/components/footers/SocialOnly.svelte'
  export let global
  let open = false
</script>

<div class="bg-base-200 flex flex-col min-h-screen">
  <Navbar bind:sidebar={open} title={global.headerTitle} />
  <Sidebar bind:open />

  <div class="mx-auto flex flex-col flex-grow w-full max-w-4xl">
    <main class="flex flex-col w-full flex-grow py-4 px-4">
      <slot />
    </main>
  </div>
  <SocialOnly />
</div>
