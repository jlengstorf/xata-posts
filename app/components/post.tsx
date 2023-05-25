import type { PostsRecord } from '@/lib/xata.codegen';

export const Post = ({ post }: { post: PostsRecord }) => {
	return (
		<article>
			<h2>{post.title}</h2>
			<p>{post.text}</p>
		</article>
	);
};
