import type { Flow } from '../types'
import { slugify } from '../lib/slug'
import nonNigeriaRaw from './mobile-v1-non-nigeria.json'
import nigeriaRaw from './mobile-v1-nigeria.json'

interface RawFlow {
  flow: string
  screens: { id: string; name: string }[]
}

/**
 * V1 flow + screen inventory pulled from the "Mobile Design" Figma file
 * (CD4aDiaI1KPZf1W97Rmg8u) — Non-Nigerian experience at node 29294:51646,
 * Nigerian experience at node 0:1. Images are exported to
 * public/screens/<region>/<screenId>.png; ScreenCard falls back to a
 * placeholder if a given file hasn't been exported yet.
 */
function flowsFromRaw(raw: RawFlow[], region: string): Flow[] {
  return raw.map((f) => ({
    id: slugify(f.flow),
    name: f.flow,
    screens: f.screens.map((s) => {
      const id = s.id.replace(':', '-')
      return {
        id,
        name: s.name,
        figmaNodeId: s.id,
        imageUrl: `/screens/${region}/${id}.png`,
      }
    }),
  }))
}

export const MOBILE_V1_NON_NIGERIA_FLOWS: Flow[] = flowsFromRaw(nonNigeriaRaw as RawFlow[], 'non-nigeria')
export const MOBILE_V1_NIGERIA_FLOWS: Flow[] = flowsFromRaw(nigeriaRaw as RawFlow[], 'nigeria')
