import { NavLink } from 'react-router-dom'
import type { Flow } from '../types'

interface FlowSidebarProps {
  platformId: string
  versionId: string
  regionId: string
  flows: Flow[]
}

export function FlowSidebar({ platformId, versionId, regionId, flows }: FlowSidebarProps) {
  if (flows.length === 0) return null

  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <div className="sticky top-32 max-h-[calc(100vh-9rem)] overflow-y-auto pr-2">
        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-neutral-600">
          Flows
        </p>
        <nav className="flex flex-col gap-0.5">
          {flows.map((flow) => (
            <NavLink
              key={flow.id}
              to={`/${platformId}/${versionId}/${regionId}/${flow.id}`}
              className={({ isActive }) =>
                [
                  'truncate rounded-md px-3 py-1.5 text-sm transition-colors',
                  isActive
                    ? 'bg-neutral-100 font-medium text-neutral-900 dark:bg-neutral-900 dark:text-white'
                    : 'text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800 dark:text-neutral-500 dark:hover:bg-neutral-900/60 dark:hover:text-neutral-200',
                ].join(' ')
              }
            >
              {flow.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  )
}
