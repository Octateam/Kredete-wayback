import { useMemo, useState } from 'react'
import { Navigate, Outlet, useOutletContext, useParams } from 'react-router-dom'
import { Banner } from '../components/Banner'
import { EmptyState } from '../components/EmptyState'
import { FlowSidebar } from '../components/FlowSidebar'
import { RegionDropdown } from '../components/RegionDropdown'
import { getBanner } from '../data/banners'
import { getDefaultRegionId, getRegions, hasRealRegions } from '../lib/regions'
import type { PlatformData, RegionData, VersionData } from '../types'

export interface VersionOutletContext {
  platform: PlatformData
  version: VersionData
  region: RegionData
}

export function VersionShell() {
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

  const isRegional = hasRealRegions(version)
  const banner = getBanner(platform.id, version.id, isRegional ? region.id : undefined)
  const previewImageUrls = (banner.previewFlowIds ?? [])
    .map((flowId) => region.flows.find((f) => f.id === flowId)?.screens[0]?.imageUrl)
    .filter((url): url is string => !!url)

  return (
    <main className="mx-auto max-w-[1440px] px-6 py-8">
      <Banner
        config={banner}
        platformId={platform.id}
        imageUrls={previewImageUrls}
        dropdown={
          isRegional ? (
            <RegionDropdown
              platformId={platform.id}
              versionId={version.id}
              regions={getRegions(version)}
              activeRegionId={region.id}
            />
          ) : undefined
        }
      />

      <div className="mb-6 flex items-end justify-between gap-4">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {region.flows.length} flow{region.flows.length === 1 ? '' : 's'}
        </p>
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

      {region.flows.length === 0 ? (
        <EmptyState
          title={`No flows added for ${version.label}${isRegional ? ` (${region.label})` : ''} yet`}
          description={`Point me at the ${version.label} section in Figma and I'll pull in its flow list next.`}
        />
      ) : (
        <div className="flex gap-8">
          <FlowSidebar platformId={platform.id} versionId={version.id} regionId={region.id} flows={filteredFlows} />
          <div className="min-w-0 flex-1">
            {filteredFlows.length === 0 ? (
              <EmptyState title="No matching flows" description="Try a different search term." />
            ) : (
              <Outlet context={{ platform, version, region }} />
            )}
          </div>
        </div>
      )}
    </main>
  )
}
