'use client';

import { useState } from 'react';

export const UpboatButton = ({ count }: { count: number }) => {
	const [upboats, setUpboats] = useState<number>(count);

	return <button>ADD UPBOAT ({upboats})</button>;
};
