import type { PostsRecord } from '@/lib/xata.codegen';
import { UpboatButton } from './UpboatButton';

// wow
export const Post = ({ post }: { post: PostsRecord }) => {
	return (
		<article>
			<h2>{post.title}</h2>
			<p>{post.text}</p>
			<UpboatButton count={post.upboats} postId={post.id} />
		</article>
	);
};
