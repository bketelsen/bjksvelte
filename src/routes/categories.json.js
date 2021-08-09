/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const endpoint = import.meta.env.VITE_API_ENDPOINT
	const q = endpoint + '/categories'
	const res = await fetch(q);
	var categories = await res.json();
	return {
		body: categories
	}

}
