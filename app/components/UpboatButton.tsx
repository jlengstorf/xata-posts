'use client';

import { incrementUpboat } from '@/actions';
import { useState } from 'react';

export const UpboatButton = ({
	count,
	postId,
}: {
	count: number;
	postId: string;
}) => {
	const [upboats, setUpboats] = useState<number>(count);

	async function handleUpboat() {
		await incrementUpboat(postId);
		setUpboats((prev) => prev + 1);
	}

	return <button onClick={() => handleUpboat()}>ADD UPBOAT ({upboats})</button>;
};
