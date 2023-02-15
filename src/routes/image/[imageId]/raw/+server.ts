import type { RequestHandler } from './$types';

export const GET: RequestHandler = async function GET(event) {
	if (event.platform) {
		const object = await event.platform.env.IMAGES_BUCKET.get(event.params.imageId);
		if (object == null) {
			return new Response('', {
				status: 404
			});
		} else {
			const headers = new Headers();
			object.writeHttpMetadata(headers);
			headers.set('etag', object.httpEtag);
			return new Response(object.body, {
				headers
			});
		}
	} else {
		return new Response('no access to r2', {
			status: 500
		});
	}
};

export const POST: RequestHandler = async function POST(event) {
	if (event.platform) {
		await event.platform.env.IMAGES_BUCKET.put(event.params.imageId, event.request.body, {
			httpMetadata: {
				contentType: event.request.headers.get('content-type') ?? undefined,
				cacheControl: 'public, max-age=604800, immutable'
			}
		});
		return new Response('', {
			status: 302,
			headers: {
				location: `/image/${event.params.imageId}`
			}
		});
	} else {
		return new Response('no access to r2', {
			status: 500
		});
	}
};
