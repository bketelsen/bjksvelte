/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */

import { compile } from 'mdsvex'

const mdsvexOptions = {
	extension: ".md",
	rehypePlugins: [],
	remarkPlugins: []

}
export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const endpoint = import.meta.env.VITE_API_ENDPOINT
	const { slug } = params;

	const q = endpoint + `/articles?slug=${slug}`
	const res = await fetch(q);
	var article = await res.json();
	const compiled = await compile(article[0].content, mdsvexOptions);
	article[0].compiled_content = compiled.code;
	return {
		body: article[0]
	}

}
