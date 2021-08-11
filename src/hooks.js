
// global state in node? Is that OK?
var global = null;
var files = null;

// return already fetched global state, or kick off a fetch and wait for it
async function getGlobal() {
	if (global === null) {
		await fetchGlobal();
	}
	return global;
}

async function fetchGlobal() {

	const endpoint = import.meta.env.VITE_API_ENDPOINT
	const q = endpoint + '/global'
	const res = await fetch(q);
	global = await res.json();
}

async function getUploads() {
	if (files === null) {
		await fetchUploads();
	}
	return files;
}

async function fetchUploads() {

	const endpoint = import.meta.env.VITE_API_ENDPOINT
	const q = endpoint + '/upload/files'
	const res = await fetch(q);
	files = await res.json();
}

export async function handle({ request, resolve }) {

	request.locals.global = await getGlobal();
	request.locals.uploads = await getUploads();
	const response = await resolve(request);

	return {
		...response
	};
}
export function getSession(request) {
	return request.locals.global ? {
		global: { ...request.locals.global }
	} : {};
}

import cron from 'node-cron';
cron.schedule('*/1 * * * *', () => {
	console.log('refreshing data');
	fetchGlobal();
	fetchUploads();
})