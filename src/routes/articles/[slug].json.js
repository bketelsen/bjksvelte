/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const endpoint = import.meta.env.VITE_API_ENDPOINT
	const { slug } = params;

	const q = endpoint + `/articles?slug=${slug}`
	const res = await fetch(q);
	var article = await res.json();
	return {
		body: article[0]
	}

}
