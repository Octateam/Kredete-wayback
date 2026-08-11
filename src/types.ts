export type PlatformId = 'mobile' | 'web'

export interface Screen {
  id: string
  name: string
  /** Node id of the source frame in Figma, for batch image export later. */
  figmaNodeId?: string
  /** Set once the real screen export from Figma is added. */
  imageUrl?: string
}

export interface Flow {
  id: string
  name: string
  screens: Screen[]
}

export interface RegionData {
  id: string
  label: string
  figmaFileKey?: string
  figmaSectionNodeId?: string
  flows: Flow[]
}

export interface VersionData {
  id: string
  label: string
  /** Figma section/node this version's flows should be pulled from. Filled in as we go. */
  figmaSectionNodeId?: string
  flows: Flow[]
  /** Set when a version has region-specific experiences (e.g. Nigeria vs Non-Nigeria) instead of one flat flow list. */
  regions?: RegionData[]
}

export interface PlatformData {
  id: PlatformId
  label: string
  description: string
  versions: VersionData[]
}
