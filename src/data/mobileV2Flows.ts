import type { Flow } from '../types'
import { flowsFromRaw, type RawFlow } from './flowsFromRaw'
import nonNigeriaRaw from './mobile-v2-non-nigeria.json'
import nigeriaRaw from './mobile-v2-nigeria.json'

/**
 * V2 flow + screen inventory pulled from the "Mobile Design" Figma file
 * (CD4aDiaI1KPZf1W97Rmg8u) — Nigerian experience at node 21035:255852,
 * Non-Nigerian experience at node 33992:35365.
 */
export const MOBILE_V2_NON_NIGERIA_FLOWS: Flow[] = flowsFromRaw(nonNigeriaRaw as RawFlow[], 'v2-non-nigeria')
export const MOBILE_V2_NIGERIA_FLOWS: Flow[] = flowsFromRaw(nigeriaRaw as RawFlow[], 'v2-nigeria')
