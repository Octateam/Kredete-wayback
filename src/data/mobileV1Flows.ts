import type { Flow } from '../types'
import { flowsFromRaw, type RawFlow } from './flowsFromRaw'
import nonNigeriaRaw from './mobile-v1-non-nigeria.json'
import nigeriaRaw from './mobile-v1-nigeria.json'

/**
 * V1 flow + screen inventory pulled from the "Mobile Design" Figma file
 * (CD4aDiaI1KPZf1W97Rmg8u) — Non-Nigerian experience at node 29294:51646,
 * Nigerian experience at node 0:1.
 */
export const MOBILE_V1_NON_NIGERIA_FLOWS: Flow[] = flowsFromRaw(nonNigeriaRaw as RawFlow[], 'non-nigeria')
export const MOBILE_V1_NIGERIA_FLOWS: Flow[] = flowsFromRaw(nigeriaRaw as RawFlow[], 'nigeria')
