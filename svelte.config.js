import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    mdsvex(mdsvexConfig),
    [
      preprocess({
        postcss: true
      })
    ]
  ],

  kit: {
    target: '#svelte',
    adapter: adapter()
  }
}

export default config
// Workaround until SvelteKit uses Vite 2.3.8 (and it's confirmed to fix the Tailwind JIT problem)
const mode = process.env.NODE_ENV
const dev = mode === 'development'
process.env.TAILWIND_MODE = dev ? 'watch' : 'build'
