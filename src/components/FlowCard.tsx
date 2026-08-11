import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Flow } from '../types'

interface FlowCardProps {
  platformId: string
  versionId: string
  regionId: string
  flow: Flow
}

export function FlowCard({ platformId, versionId, regionId, flow }: FlowCardProps) {
  const screenCount = flow.screens.length
  const coverUrl = flow.screens.find((s) => s.imageUrl)?.imageUrl
  const [failed, setFailed] = useState(false)

  return (
    <Link
      to={`/${platformId}/${versionId}/${regionId}/${flow.id}`}
      className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700"
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
        {coverUrl && !failed ? (
          <img
            src={coverUrl}
            alt={flow.name}
            className="h-full w-full object-cover object-top"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="text-xs font-medium text-neutral-400 dark:text-neutral-600">
            {screenCount > 0 ? `${screenCount} screens` : 'Screens pending'}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between gap-2 px-4 py-3">
        <span className="truncate text-sm font-medium text-neutral-800 dark:text-neutral-200">{flow.name}</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 shrink-0 text-neutral-300 transition-transform group-hover:translate-x-0.5 dark:text-neutral-700"
        >
          <path
            fillRule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </Link>
  )
}
