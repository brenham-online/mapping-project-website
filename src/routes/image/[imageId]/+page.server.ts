import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = async function load(event) {
	if (event.platform) {
		const object = await event.platform.env.IMAGES_BUCKET.head(event.params.imageId);
		if (object == null) {
			throw error(404);
		} else {
			return {
				image: {
					id: object.key,
					size: object.size,
					uploaded: object.uploaded.getTime()
				}
			};
		}
	} else {
		throw error(500, 'no access to r2');
	}
};
