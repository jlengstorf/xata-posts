import { getXataClient } from '@/lib/xata.codegen';
import styles from './page.module.css';
import { Post } from './components/post';

export default async function Home() {
	const xata = getXataClient();

	const posts = await xata.db.posts.getAll();

	return (
		<main>
			<div>
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</main>
	);
}

export const dynamic = 'force-dynamic';
