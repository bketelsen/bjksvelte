<script>
  export let open = false
  export let links
</script>

<aside
  class="absolute w-auto h-full bg-neutral text-neutral-content border-r-2 shadow-lg"
  class:open
>
  <nav class="p-12 text-xl">
    {#each links as link}
      <a class="block" href={link.target}>{link.name}</a>
    {/each}
  </nav>
</aside>

<style>
  aside {
    left: -100%;
    transition: left 0.3s ease-in-out;
  }

  .open {
    left: 0;
  }
</style>
