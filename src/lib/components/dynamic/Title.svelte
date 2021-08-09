<script>
  export let article

  import { format } from 'date-fns'
  import readingTime from 'reading-time'
</script>

<div class="text-lg max-w-prose mx-auto">
  <h1>
    <span
      class="block text-base text-center text-accent-focus font-semibold tracking-wide uppercase"
      >{article.category?.name}</span
    >
    <span
      class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-base-content sm:text-4xl"
      >{article.title}</span
    >
    <span class="block text-base text-center text-primary pt-2">
      <time datetime={new Date(article.published_at).toISOString()}
        >{format(new Date(article.published_at), 'MMMM d, yyyy')}</time
      >
      • {readingTime(article.content).text}
    </span>
  </h1>
  <p class="mt-8 text-xl text-primary leading-8">{article.description}</p>
</div>
