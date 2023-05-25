'use server';

import { getXataClient } from '@/lib/xata.codegen';

export async function incrementUpboat(postId: string) {
	const xata = getXataClient();

	return await xata.db.posts.update(postId, { upboats: { $increment: 1 } });
}
