import { NavLink } from 'react-router-dom'
import { getDefaultRegionId } from '../lib/regions'
import type { PlatformData } from '../types'

interface VersionTabsProps {
  platform: PlatformData
}

export function VersionTabs({ platform }: VersionTabsProps) {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-1 overflow-x-auto px-6">
        {platform.versions.map((version) => (
          <NavLink
            key={version.id}
            to={`/${platform.id}/${version.id}/${getDefaultRegionId(version)}`}
            className={({ isActive }) =>
              [
                'relative shrink-0 px-4 py-3 text-sm font-medium transition-colors',
                isActive
                  ? 'text-neutral-900 dark:text-white'
                  : 'text-neutral-500 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-200',
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                {version.label}
                {isActive && (
                  <span className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-neutral-900 dark:bg-white" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
