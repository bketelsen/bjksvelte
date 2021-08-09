<script>
  export let links
</script>

<nav class="hidden text-neutral-content uppercase text-bold sm:block">
  {#each links as link}
    <a href={link.target} class="px-2 hover:text-accent-focus hover:no-underline">{link.name}</a>
  {/each}
</nav>
