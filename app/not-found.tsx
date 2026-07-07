import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <p className="font-serif text-7xl font-bold text-navy">404</p>
        <h1 className="mt-4 text-xl font-semibold text-navy">Page not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-sm bg-brand-red px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-hover"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
