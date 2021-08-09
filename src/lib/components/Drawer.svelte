<script>
  export let global
</script>

<div class="drawer-side">
  <label for="my-drawer-3" class="drawer-overlay" />
  <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
    {#each global.navigation as nav}
      <li>
        <a href={nav.target} class="uppercase rounded-btn">{nav.name}</a>
      </li>
    {/each}
  </ul>
</div>
