'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({
	error,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const router = useRouter();
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div>
			<h2>Something went wrong!</h2>
			<button onClick={() => router.replace('/')}>Try again</button>
		</div>
	);
}
