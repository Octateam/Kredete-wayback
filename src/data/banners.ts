export interface BannerConfig {
  accent: string
  subheadline: string
  /** Solid, calm background color (hex). */
  bgColor: string
  accentText: string
  /** Flow to pull a hero screen from, if that flow has real screens yet. */
  previewFlowId?: string
}

const HEADLINE = 'Design Documentation'

const BANNERS: Record<string, BannerConfig> = {
  'mobile/v1/nigeria': {
    accent: 'Mobile App · V1 · Nigerian Experience',
    subheadline:
      "A detailed look at the flows and screens built for Kredete's Nigerian mobile experience in V1 — NGN wallets, cards, BVN verification, credit and loans.",
    bgColor: '#1E332C',
    accentText: 'text-emerald-400',
    previewFlowId: 'onboarding-screen',
  },
  'mobile/v1/non-nigeria': {
    accent: 'Mobile App · V1 · Non-Nigerian Experience',
    subheadline:
      "A detailed look at the flows and screens built for Kredete's Non-Nigerian mobile experience in V1 — USD wallets, cards, transfers and settings.",
    bgColor: '#20293A',
    accentText: 'text-sky-400',
    previewFlowId: 'onboarding-screen',
  },
  'mobile/v2': {
    accent: 'Mobile App · V2',
    subheadline: 'An overview of the flows and screens shipped in V2 of the Kredete Mobile App.',
    bgColor: '#2C2636',
    accentText: 'text-violet-400',
  },
  'mobile/v3': {
    accent: 'Mobile App · V3',
    subheadline: 'An overview of the flows and screens shipped in V3 of the Kredete Mobile App.',
    bgColor: '#332527',
    accentText: 'text-rose-400',
  },
  'mobile/v4': {
    accent: 'Mobile App · V4',
    subheadline: 'An overview of the flows and screens shipped in V4 of the Kredete Mobile App.',
    bgColor: '#332A1F',
    accentText: 'text-amber-400',
  },
  'mobile/v4-pro': {
    accent: 'Mobile App · V4 Pro',
    subheadline:
      "The current, most complete set of flows and screens across the Kredete Mobile App — onboarding through credit, cards and creators.",
    bgColor: '#211E26',
    accentText: 'text-fuchsia-400',
  },
  'web/v1': {
    accent: 'Business SaaS · V1',
    subheadline: 'An overview of the flows and screens shipped in V1 of the Kredete Business SaaS portal.',
    bgColor: '#1B2E30',
    accentText: 'text-teal-400',
  },
  'web/v2': {
    accent: 'Business SaaS · V2',
    subheadline: 'An overview of the flows and screens shipped in V2 of the Kredete Business SaaS portal.',
    bgColor: '#1E2734',
    accentText: 'text-blue-400',
  },
  'web/v3': {
    accent: 'Business SaaS · V3',
    subheadline: 'An overview of the flows and screens shipped in V3 of the Kredete Business SaaS portal.',
    bgColor: '#302620',
    accentText: 'text-orange-400',
  },
  'web/v4': {
    accent: 'Business SaaS · V4',
    subheadline: 'An overview of the flows and screens shipped in V4 of the Kredete Business SaaS portal.',
    bgColor: '#302C1E',
    accentText: 'text-yellow-400',
  },
}

const FALLBACK_BANNER: BannerConfig = {
  accent: 'Design Documentation',
  subheadline: 'An overview of the flows and screens for this version.',
  bgColor: '#232323',
  accentText: 'text-neutral-400',
}

export function getBanner(platformId: string, versionId: string, regionId?: string): BannerConfig {
  const key = regionId ? `${platformId}/${versionId}/${regionId}` : `${platformId}/${versionId}`
  return BANNERS[key] ?? BANNERS[`${platformId}/${versionId}`] ?? FALLBACK_BANNER
}

export { HEADLINE }
