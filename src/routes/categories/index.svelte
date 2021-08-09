<script context="module">
  export async function load({ page: { query }, fetch }) {
    const cres = await fetch('/categories.json')
    var categories = await cres.json()
    return {
      props: {
        categories: categories
      }
    }
  }
</script>

<script>
  export let categories
</script>

<svelte:head>
  <title>Categories</title>
</svelte:head>

<div class="pt-8 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
    <div>
      <h2 class="text-3xl tracking-tight font-extrabold text-base-content sm:text-4xl">
        Categories
      </h2>
      <p class="mt-3 text-xl text-base-content sm:mt-4">
        Find the articles you're looking for in the categories below.
      </p>
    </div>
    <div class="mt-12 grid gap-1 pt-4 lg:grid-cols-3 lg:gap-x-2 lg:gap-y-2">
      {#each categories as cat}
        <a href={'/categories/' + cat.slug}>
          <div class="card shadow-2xl">
            <div class="card-body">
              <h2 class="card-title uppercase">
                {cat.name}
              </h2>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <span>{cat.articles.length} articles</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
