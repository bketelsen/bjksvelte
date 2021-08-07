<script>
  import '../app.css'
  import '../prism.css'
  import 'focus-visible'
  import Navbar from '$lib/components/Navbar.svelte'
</script>

<div class="flex flex-col min-h-screen">
  <div class="mx-auto flex flex-col flex-grow w-full max-w-4xl">
    <Navbar />
    <main class="flex flex-col w-full flex-grow py-4 px-4">
      <slot />
    </main>
  </div>
</div>
