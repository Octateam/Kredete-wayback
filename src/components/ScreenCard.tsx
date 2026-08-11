import { useState } from 'react'
import type { Screen } from '../types'

export function ScreenCard({ screen }: { screen: Screen }) {
  const [failed, setFailed] = useState(false)
  const showImage = screen.imageUrl && !failed

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex aspect-[9/19] items-center justify-center bg-neutral-100 dark:bg-neutral-900">
        {showImage ? (
          <img
            src={screen.imageUrl}
            alt={screen.name}
            className="h-full w-full object-contain"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="text-xs text-neutral-400 dark:text-neutral-600">No image yet</span>
        )}
      </div>
      <p className="truncate px-3 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">{screen.name}</p>
    </div>
  )
}
