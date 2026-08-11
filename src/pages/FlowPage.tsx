import { Link, Navigate, useOutletContext, useParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { ScreenCard } from '../components/ScreenCard'
import { getRegions, hasRealRegions } from '../lib/regions'
import type { PlatformData } from '../types'

export function FlowPage() {
  const { platform } = useOutletContext<{ platform: PlatformData }>()
  const { versionId, regionId, flowId } = useParams()

  const version = platform.versions.find((v) => v.id === versionId)
  const region = version ? getRegions(version).find((r) => r.id === regionId) : undefined
  const flow = region?.flows.find((f) => f.id === flowId)

  if (!version || !region || !flow) return <Navigate to={`/${platform.id}/${platform.versions[0].id}`} replace />

  return (
    <main className="mx-auto max-w-[1440px] px-6 py-8">
      <nav className="mb-4 flex items-center gap-1.5 text-sm text-neutral-400 dark:text-neutral-600">
        <Link
          to={`/${platform.id}/${version.id}/${region.id}`}
          className="hover:text-neutral-700 dark:hover:text-neutral-300"
        >
          {platform.label} &middot; {version.label}
          {hasRealRegions(version) && ` · ${region.label}`}
        </Link>
        <span>/</span>
        <span className="text-neutral-700 dark:text-neutral-300">{flow.name}</span>
      </nav>

      <h1 className="mb-1 text-xl font-semibold text-neutral-900 dark:text-white">{flow.name}</h1>
      <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        {flow.screens.length} screen{flow.screens.length === 1 ? '' : 's'}
      </p>

      {flow.screens.length === 0 ? (
        <EmptyState
          title="No screens added yet"
          description="Screens for this flow will be pulled in from Figma next."
        />
      ) : (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {flow.screens.map((screen) => (
            <ScreenCard key={screen.id} screen={screen} />
          ))}
        </div>
      )}
    </main>
  )
}
