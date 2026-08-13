import type { Flow } from '../types'
import { slugify } from '../lib/slug'

export interface RawFlow {
  flow: string
  screens: { id: string; name: string }[]
}

/**
 * Converts a raw Figma flow/screen export into Flow[]. Images are expected at
 * public/screens/<screenFolder>/<screenId>.png; ScreenCard falls back to a
 * placeholder if a given file hasn't been exported yet.
 */
export function flowsFromRaw(raw: RawFlow[], screenFolder: string): Flow[] {
  return raw.map((f) => ({
    id: slugify(f.flow),
    name: f.flow,
    screens: f.screens.map((s) => {
      const id = s.id.replace(':', '-')
      return {
        id,
        name: s.name,
        figmaNodeId: s.id,
        imageUrl: `/screens/${screenFolder}/${id}.png`,
      }
    }),
  }))
}
