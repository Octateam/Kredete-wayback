import { useMemo, useState } from 'react'
import { Navigate, useOutletContext, useParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { FlowCard } from '../components/FlowCard'
import { FlowSidebar } from '../components/FlowSidebar'
import { RegionTabs } from '../components/RegionTabs'
import { getDefaultRegionId, getRegions, hasRealRegions } from '../lib/regions'
import type { PlatformData } from '../types'

export function PlatformVersionPage() {
  const { platform } = useOutletContext<{ platform: PlatformData }>()
  const { versionId, regionId } = useParams()
  const [query, setQuery] = useState('')

  const version = platform.versions.find((v) => v.id === versionId)
  const region = version ? getRegions(version).find((r) => r.id === regionId) : undefined

  const filteredFlows = useMemo(() => {
    if (!region) return []
    if (!query.trim()) return region.flows
    return region.flows.filter((flow) => flow.name.toLowerCase().includes(query.trim().toLowerCase()))
  }, [region, query])

  if (!version) return <Navigate to={`/${platform.id}/${platform.versions[0].id}`} replace />
  if (!region) return <Navigate to={`/${platform.id}/${version.id}/${getDefaultRegionId(version)}`} replace />

  return (
    <main className="mx-auto max-w-[1440px] px-6 py-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-neutral-900 dark:text-white">
            {platform.label} &middot; {version.label}
            {hasRealRegions(version) && (
              <span className="text-neutral-400 dark:text-neutral-500"> &middot; {region.label}</span>
            )}
          </h1>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {region.flows.length} flow{region.flows.length === 1 ? '' : 's'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {hasRealRegions(version) && (
            <RegionTabs platformId={platform.id} versionId={version.id} regions={getRegions(version)} />
          )}
          {region.flows.length > 0 && (
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search flows..."
              className="w-full max-w-xs rounded-lg border border-neutral-200 bg-white px-3.5 py-2 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:placeholder:text-neutral-600"
            />
          )}
        </div>
      </div>

      <div className="flex gap-8">
        <FlowSidebar platformId={platform.id} versionId={version.id} regionId={region.id} flows={region.flows} />

        <div className="min-w-0 flex-1">
          {region.flows.length === 0 ? (
            <EmptyState
              title={`No flows added for ${version.label}${hasRealRegions(version) ? ` (${region.label})` : ''} yet`}
              description={`Point me at the ${version.label} section in Figma and I'll pull in its flow list next.`}
            />
          ) : filteredFlows.length === 0 ? (
            <EmptyState title="No matching flows" description="Try a different search term." />
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredFlows.map((flow) => (
                <FlowCard
                  key={flow.id}
                  platformId={platform.id}
                  versionId={version.id}
                  regionId={region.id}
                  flow={flow}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
