<script>
  import { format } from 'date-fns'
  export let post
  export let hrefBase = '/articles/'
  export let actionText = 'Read More'
  export let featuredText = 'featured'
</script>

<div class="m-6 indicator">
  {#if post.featured}<div class="indicator-item badge badge-secondary">{featuredText}</div>{/if}
  <div class="card shadow-2xl lg:card-side">
    <div class="card-body justify-end">
      <div class="badge badge-accent-focus  mb-2">
        <time>{format(new Date(post.published_at), 'MMMM d, yyyy')}</time>
      </div>
      <h2 class="card-title"><a href={`${hrefBase}${post.slug}`}>{post.title}</a></h2>

      <p>{post.description}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">{actionText}</button>
      </div>
    </div>
  </div>
</div>
