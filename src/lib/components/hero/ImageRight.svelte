<script>
  export let title
  export let body
  export let image
  export let ctaText
  export let ctaLink
</script>

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        src={image.formats.small.url}
        alt={image.alternativeText || 'Brian'}
        class="object-cover object-center rounded"
      />
    </div>
    <div
      class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
    >
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        {title}
      </h1>
      <p class="mb-8 leading-relaxed">
        {body}
      </p>
      <div class="flex justify-center">
        <button
          class="inline-flex text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-secondary-focus rounded text-lg"
          >More About Me</button
        >
      </div>
    </div>
  </div>
</section>
