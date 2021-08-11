<script>
  import TitleAndSub from '$lib/components/headers/TitleAndSub.svelte'
  import { format } from 'date-fns'
  import readingTime from 'reading-time'

  export let title
  export let subtitle
  export let articles
  console.log(articles[0].author.picture)
</script>

<TitleAndSub {title} {subtitle} />

<div class="mt-4 grid gap-1 pt-4 lg:grid-cols-3 lg:gap-x-2 lg:gap-y-2">
  {#each articles as post}
    <a href={'/articles/' + post.slug}>
      <div class="card shadow-2xl">
        <div class="card-body">
          <div class="badge mb-2 badge-neutral">{post.category.name}</div>
          <h2 class="card-title">
            {post.title}
          </h2>
          <p>{post.description}</p>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a href="/about">
                <span class="sr-only">{post.author.name}</span>
                <img
                  class="h-10 w-10 rounded-full"
                  src={post.author.picture.url}
                  alt={post.author.picture.alternativeText}
                  width="10"
                  height="10"
                />
              </a>
            </div>
            <div class="ml-3 flex-1">
              <p class="flex text-sm font-medium  justify-end">
                <a href="/about"> {post.author.name} </a>
              </p>
              <div class="text-sm">
                <p class="flex justify-end">
                  <time>{format(new Date(post.published_at), 'MMMM d, yyyy')}</time>
                </p>
                <p class="flex justify-end"><span>{readingTime(post.content).text}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  {/each}
</div>
