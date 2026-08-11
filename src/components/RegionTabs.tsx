import { NavLink } from 'react-router-dom'
import type { RegionData } from '../types'

interface RegionTabsProps {
  platformId: string
  versionId: string
  regions: RegionData[]
}

export function RegionTabs({ platformId, versionId, regions }: RegionTabsProps) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 p-1 dark:border-neutral-800 dark:bg-neutral-900">
      {regions.map((region) => (
        <NavLink
          key={region.id}
          to={`/${platformId}/${versionId}/${region.id}`}
          className={({ isActive }) =>
            [
              'rounded-full px-3 py-1 text-xs font-medium transition-colors',
              isActive
                ? 'bg-white text-neutral-900 shadow-sm dark:bg-neutral-700 dark:text-white'
                : 'text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200',
            ].join(' ')
          }
          end
        >
          {region.label}
        </NavLink>
      ))}
    </div>
  )
}
