<script>
  import Logo from './Logo.svelte'
  import Hamburger from './Hamburger.svelte'
  import Menu from './Menu.svelte'
  import { navigating } from '$app/stores'

  export let sidebar = false
  export let title
  export let links

  $: if ($navigating == null) {
    sidebar = false
  }
</script>

<header
  class="navbar flex justify-between items-center mb-2 shadow-lg bg-neutral text-neutral-content"
>
  <nav class="flex">
    <Hamburger bind:open={sidebar} />
    <a href="/"><Logo {title} /></a>
  </nav>

  <Menu {links} />
</header>
