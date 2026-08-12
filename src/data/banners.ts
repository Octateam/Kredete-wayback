export interface BannerConfig {
  accent: string
  subheadline: string
  gradient: string
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
    gradient: 'from-emerald-950 via-emerald-900 to-neutral-950',
    accentText: 'text-emerald-400',
    previewFlowId: 'onboarding-screen',
  },
  'mobile/v1/non-nigeria': {
    accent: 'Mobile App · V1 · Non-Nigerian Experience',
    subheadline:
      "A detailed look at the flows and screens built for Kredete's Non-Nigerian mobile experience in V1 — USD wallets, cards, transfers and settings.",
    gradient: 'from-indigo-950 via-blue-950 to-neutral-950',
    accentText: 'text-sky-400',
    previewFlowId: 'onboarding-screen',
  },
  'mobile/v2': {
    accent: 'Mobile App · V2',
    subheadline: 'An overview of the flows and screens shipped in V2 of the Kredete Mobile App.',
    gradient: 'from-violet-950 via-purple-950 to-neutral-950',
    accentText: 'text-violet-400',
  },
  'mobile/v3': {
    accent: 'Mobile App · V3',
    subheadline: 'An overview of the flows and screens shipped in V3 of the Kredete Mobile App.',
    gradient: 'from-rose-950 via-red-950 to-neutral-950',
    accentText: 'text-rose-400',
  },
  'mobile/v4': {
    accent: 'Mobile App · V4',
    subheadline: 'An overview of the flows and screens shipped in V4 of the Kredete Mobile App.',
    gradient: 'from-amber-950 via-orange-950 to-neutral-950',
    accentText: 'text-amber-400',
  },
  'mobile/v4-pro': {
    accent: 'Mobile App · V4 Pro',
    subheadline:
      "The current, most complete set of flows and screens across the Kredete Mobile App — onboarding through credit, cards and creators.",
    gradient: 'from-fuchsia-950 via-neutral-950 to-black',
    accentText: 'text-fuchsia-400',
  },
  'web/v1': {
    accent: 'Business SaaS · V1',
    subheadline: 'An overview of the flows and screens shipped in V1 of the Kredete Business SaaS portal.',
    gradient: 'from-teal-950 via-cyan-950 to-neutral-950',
    accentText: 'text-teal-400',
  },
  'web/v2': {
    accent: 'Business SaaS · V2',
    subheadline: 'An overview of the flows and screens shipped in V2 of the Kredete Business SaaS portal.',
    gradient: 'from-blue-950 via-indigo-950 to-neutral-950',
    accentText: 'text-blue-400',
  },
  'web/v3': {
    accent: 'Business SaaS · V3',
    subheadline: 'An overview of the flows and screens shipped in V3 of the Kredete Business SaaS portal.',
    gradient: 'from-orange-950 via-stone-950 to-neutral-950',
    accentText: 'text-orange-400',
  },
  'web/v4': {
    accent: 'Business SaaS · V4',
    subheadline: 'An overview of the flows and screens shipped in V4 of the Kredete Business SaaS portal.',
    gradient: 'from-yellow-950 via-neutral-950 to-black',
    accentText: 'text-yellow-400',
  },
}

const FALLBACK_BANNER: BannerConfig = {
  accent: 'Design Documentation',
  subheadline: 'An overview of the flows and screens for this version.',
  gradient: 'from-neutral-900 via-neutral-950 to-black',
  accentText: 'text-neutral-400',
}

export function getBanner(platformId: string, versionId: string, regionId?: string): BannerConfig {
  const key = regionId ? `${platformId}/${versionId}/${regionId}` : `${platformId}/${versionId}`
  return BANNERS[key] ?? BANNERS[`${platformId}/${versionId}`] ?? FALLBACK_BANNER
}

export { HEADLINE }
