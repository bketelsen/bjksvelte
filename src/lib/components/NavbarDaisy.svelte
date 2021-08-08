<script>
  // from https://svelte.dev/repl/267acb68b79647849f0532774d62c594?version=3.38.2
  import 'focus-visible'
  let open
</script>

<div class="navbar  mb-2 shadow-lg bg-neutral text-neutral-content rounded-box shadow-2xl">
  <div class="px-2 mx-2 navbar-end">
    <a href="/"><span class="text-lg font-bold"> Brian Ketelsen </span></a>
  </div>
  <div class="hidden px-2 mx-2 navbar-center md:flex">
    <div class="flex items-stretch">
      <a class="btn btn-ghost btn-sm rounded-btn" href="/articles"> Blog </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/speaking"> Speaking </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/projects"> Projects </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/elsewhere"> Elsewhere </a>
    </div>
  </div>
  <div class="navbar-end" />
</div>
