import { useState } from 'react'
import type { Screen } from '../types'

export function ScreenCard({ screen }: { screen: Screen }) {
  const [failed, setFailed] = useState(false)
  const showImage = screen.imageUrl && !failed

  return (
    <div>
      <div className="flex aspect-[9/19] items-center justify-center overflow-hidden rounded-[50px] border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
        {showImage ? (
          <img
            src={screen.imageUrl}
            alt={screen.name}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="text-xs text-neutral-400 dark:text-neutral-600">No image yet</span>
        )}
      </div>
      <p className="mt-2 truncate px-1 text-xs font-medium text-neutral-500">{screen.name}</p>
    </div>
  )
}
