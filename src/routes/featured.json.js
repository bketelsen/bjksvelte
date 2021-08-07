/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const endpoint = import.meta.env.VITE_API_ENDPOINT
	const q = endpoint + '/articles?featured=true'
	const res = await fetch(q);
	var articles = await res.json();
	articles = articles.sort((a, b) => (a.published_at < b.published_at ? 1 : -1))
	return {
		body: articles
	}

}
