import type { RegionData, VersionData } from '../types'

/** Versions without real regional variants get one implicit "all" region wrapping their flows. */
export function getRegions(version: VersionData): RegionData[] {
  if (version.regions && version.regions.length > 0) return version.regions
  return [{ id: 'all', label: version.label, flows: version.flows }]
}

export function getDefaultRegionId(version: VersionData): string {
  return getRegions(version)[0].id
}

export function hasRealRegions(version: VersionData): boolean {
  return !!version.regions && version.regions.length > 1
}
