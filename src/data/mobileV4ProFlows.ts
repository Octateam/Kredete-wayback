import { flowsFromRaw, type RawFlow } from './flowsFromRaw'
import raw from './mobile-v4-pro-raw.json'

/**
 * Real flow/screen data pulled from the "V4 (pro)" Figma file
 * (KfRSvvQgzh7X3Tg47aftiV) — one flow per top-level Figma section, sourced
 * from the "Handoff Engineering 1" canvas (node 804:23364) plus updated
 * standalone sections for Prediction market, Stocks, ETFs, Spending
 * Insights, Crypto, eSIM, Creator's experience, and Request funds (which
 * replace the older equivalents that lived in the base canvas). Marketing/
 * ops one-offs (World cup, Lifestyle, Card Refund Case Handling, In-App
 * Walkthroughs) were deliberately excluded.
 */
export const MOBILE_V4_PRO_FLOWS = flowsFromRaw(raw as RawFlow[], 'v4-pro')
