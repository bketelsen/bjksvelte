<script>
  export let open = false
</script>

<aside
  class="absolute w-auto h-full bg-neutral text-neutral-content border-r-2 shadow-lg"
  class:open
>
  <nav class="p-12 text-xl">
    <a class="block" href="/">Home</a>
    <a class="block" href="/articles">Articles</a>
    <a class="block" href="#contact">Contact</a>
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
