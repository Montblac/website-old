import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-nord-0">
      <h1 className="text-[clamp(100px,25vw,200px)] font-bold text-nord-7 leading-none m-0">
        404
      </h1>
      <h2 className="text-[clamp(30px,5vw,50px)] font-normal text-nord-5 mb-8">
        Page Not Found
      </h2>
      <p className="text-nord-5 mb-10 max-w-sm">
        Looks like this page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="font-mono text-sm text-nord-10 border border-nord-10 rounded px-7 py-4 hover:bg-nord-10/10 transition-colors duration-200"
      >
        Go Home
      </Link>
    </main>
  );
}
