'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <>
      {' '}
      <h1>{error.message}</h1>
      <button onClick={reset}>Try again</button>
    </>
  );
}
