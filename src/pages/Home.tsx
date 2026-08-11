import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { PLATFORMS, getLatestVersionId } from '../data/platforms'

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-neutral-600">
            Design Archive
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
            The Wayback Machine for Kredete's product design
          </h1>
          <p className="mt-4 text-base text-neutral-500 dark:text-neutral-400">
            Browse every flow and screen across every shipped version of the Kredete Mobile App and Business
            SaaS platform &mdash; from V1 to today.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PLATFORMS.map((platform) => (
            <Link
              key={platform.id}
              to={`/${platform.id}/${getLatestVersionId(platform)}`}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-neutral-600">
                {platform.versions.length} versions &middot; V1&ndash;{platform.versions[platform.versions.length - 1].label}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-neutral-900 dark:text-white">{platform.label}</h2>
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{platform.description}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-neutral-700 group-hover:gap-2 dark:text-neutral-300">
                Browse flows
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-all">
                  <path
                    fillRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
