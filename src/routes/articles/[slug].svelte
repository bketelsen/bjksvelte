<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch, session, context }) {
    const url = `/articles/${page.params.slug}.json`
    const res = await fetch(url)

    if (res.ok) {
      return {
        props: {
          article: await res.json()
        }
      }
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    }
  }
</script>

<script>
  import { format } from 'date-fns'
  import ButtonLink from '$lib/components/ButtonLink.svelte'
  import { name, website } from '$lib/info'
  import readingTime from 'reading-time'

  export let article

  // generated open-graph image for sharing on social media. Visit https://og-image.vercel.app/ to see more options.
  const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
    article.title
  )}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`

  const url = `${website}/articles/${article.slug}`
</script>

<svelte:head>
  <title>{article.title}</title>
  <meta name="description" content={article.description} />
  <meta name="author" content={name} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={article.title} />
  <meta property="og:description" content={article.description} />
  <meta property="og:image" content={ogImage} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={website} />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={article.title} />
  <meta name="twitter:description" content={article.description} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="relative py-16 bg-base-100 overflow-hidden">
  <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
    <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
      <svg
        class="absolute top-12 left-full transform translate-x-32"
        width="404"
        height="384"
        fill="none"
        viewBox="0 0 404 384"
      >
        <defs>
          <pattern
            id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
      </svg>
      <svg
        class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
        width="404"
        height="384"
        fill="none"
        viewBox="0 0 404 384"
      >
        <defs>
          <pattern
            id="f210dbf6-a58d-4871-961e-36d5016a0f49"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
      </svg>
      <svg
        class="absolute bottom-12 left-full transform translate-x-32"
        width="404"
        height="384"
        fill="none"
        viewBox="0 0 404 384"
      >
        <defs>
          <pattern
            id="d3eb07ae-5182-43e6-857d-35c643af9034"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
      </svg>
    </div>
  </div>
  <div class="relative px-4 sm:px-6 lg:px-8">
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
    <div class="mt-6 prose prose-base prose-lg text-base-content mx-auto">
      <p>
        Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed
        <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed turpis id. Id
        dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
        <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
      </p>
      <ul>
        <li>Quis elit egestas venenatis mattis dignissim.</li>
        <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
        <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
      </ul>
      <p>
        Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit
        viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut
        nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed elit
        interdum dignissim.
      </p>
      <h2>From beginner to expert in 30 days</h2>
      <p>
        Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum
        urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas
        pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
        Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
      </p>
      <blockquote>
        <p>
          Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur
          neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
        </p>
      </blockquote>
      <p>
        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
        semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
        viverra tellus varius sit neque erat velit.
      </p>
      <figure>
        <img
          class="w-full rounded-lg"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
          alt=""
          width="1310"
          height="873"
        />
        <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
      </figure>
      <h2>Everything you need to get up and running</h2>
      <p>
        Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius
        orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed
        tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor
        dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis
        quam.
      </p>
      <p>
        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
        semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
        viverra tellus varius sit neque erat velit.
      </p>
    </div>
  </div>
</div>
