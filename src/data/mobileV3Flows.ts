import type { Flow } from '../types'
import { flowsFromRaw, type RawFlow } from './flowsFromRaw'
import globalRaw from './mobile-v3-global.json'
import africaRaw from './mobile-v3-africa.json'

/**
 * V3 flow + screen inventory — two separate Figma files, one per region:
 * Global ("Kredete Mobile — Global", 96uOrWCQaSFmLULzkZzgi7) and Africa
 * ("Kredete Mobile — Africa", vndwgpIDjFFFQGWx3oMjYu), each rooted at
 * canvas node 1:4.
 */
export const MOBILE_V3_GLOBAL_FLOWS: Flow[] = flowsFromRaw(globalRaw as RawFlow[], 'v3-global')
export const MOBILE_V3_AFRICA_FLOWS: Flow[] = flowsFromRaw(africaRaw as RawFlow[], 'v3-africa')
