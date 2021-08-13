<script>
  export let title
  export let body
  export let image
  export let ctaText
  export let ctaLink
</script>

<div class="hero bg-base-200">
  <div class="flex-col hero-content lg:flex-row-reverse">
    <img
      src={image.formats.small.url}
      alt={image.alternativeText || 'Brian'}
      height="300"
      width="300"
    />
    <div>
      <h1 class="mb-5 text-5xl font-bold">{title}</h1>
      <p class="mb-5">{body}</p>
      <a href={ctaLink}><button class="btn btn-primary text-primary-content">{ctaText}</button></a>
    </div>
  </div>
</div>
