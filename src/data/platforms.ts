import type { Flow, PlatformData } from '../types'
import { slugify } from '../lib/slug'
import { MOBILE_V4_PRO_FLOW_NAMES } from './mobileV4ProFlows'
import { MOBILE_V1_NIGERIA_FLOWS, MOBILE_V1_NON_NIGERIA_FLOWS } from './mobileV1Flows'
import { getRegions } from '../lib/regions'

function flowsFromNames(names: string[]): Flow[] {
  return names.map((name) => ({ id: slugify(name), name, screens: [] }))
}

export const PLATFORMS: PlatformData[] = [
  {
    id: 'mobile',
    label: 'Mobile App',
    description: 'The Kredete consumer mobile app, from V1 through the current V4 Pro.',
    versions: [
      {
        id: 'v1',
        label: 'V1',
        flows: [],
        regions: [
          {
            id: 'nigeria',
            label: 'Nigerian Experience',
            figmaFileKey: 'CD4aDiaI1KPZf1W97Rmg8u',
            figmaSectionNodeId: '0:1',
            flows: MOBILE_V1_NIGERIA_FLOWS,
          },
          {
            id: 'non-nigeria',
            label: 'Non-Nigerian Experience',
            figmaFileKey: 'CD4aDiaI1KPZf1W97Rmg8u',
            figmaSectionNodeId: '29294:51646',
            flows: MOBILE_V1_NON_NIGERIA_FLOWS,
          },
        ],
      },
      { id: 'v2', label: 'V2', flows: [] },
      { id: 'v3', label: 'V3', flows: [] },
      { id: 'v4', label: 'V4', flows: [] },
      {
        id: 'v4-pro',
        label: 'V4 Pro',
        figmaSectionNodeId: '943:101414',
        flows: flowsFromNames(MOBILE_V4_PRO_FLOW_NAMES),
      },
    ],
  },
  {
    id: 'web',
    label: 'Business SaaS',
    description: 'The Kredete business / SaaS portal, from V1 through the current V4.',
    versions: [
      { id: 'v1', label: 'V1', flows: [] },
      { id: 'v2', label: 'V2', flows: [] },
      { id: 'v3', label: 'V3', flows: [] },
      { id: 'v4', label: 'V4', flows: [] },
    ],
  },
]

export function getPlatform(platformId: string | undefined) {
  return PLATFORMS.find((p) => p.id === platformId)
}

export function getVersion(platformId: string | undefined, versionId: string | undefined) {
  const platform = getPlatform(platformId)
  const version = platform?.versions.find((v) => v.id === versionId)
  return { platform, version }
}

export function getRegion(
  platformId: string | undefined,
  versionId: string | undefined,
  regionId: string | undefined,
) {
  const { platform, version } = getVersion(platformId, versionId)
  const region = version ? getRegions(version).find((r) => r.id === regionId) : undefined
  return { platform, version, region }
}

export function getFlow(
  platformId: string | undefined,
  versionId: string | undefined,
  regionId: string | undefined,
  flowId: string | undefined,
) {
  const { platform, version, region } = getRegion(platformId, versionId, regionId)
  const flow = region?.flows.find((f) => f.id === flowId)
  return { platform, version, region, flow }
}

export function getLatestVersionId(platform: PlatformData): string {
  return platform.versions[platform.versions.length - 1].id
}
