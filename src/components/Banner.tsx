import { useState, type ReactNode } from 'react'
import { HEADLINE, type BannerConfig } from '../data/banners'

const DOT_PATTERN_STYLE = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)',
  backgroundSize: '18px 18px',
}

interface BannerProps {
  config: BannerConfig
  platformId: string
  imageUrls?: string[]
  dropdown?: ReactNode
}

interface PreviewCardProps {
  imageUrl?: string
  showPlaceholderContent?: boolean
  cardClassName?: string
  aspectClassName?: string
  placeholderCounterRotateClassName?: string
}

function PreviewCard({
  imageUrl,
  showPlaceholderContent,
  cardClassName = 'w-52',
  aspectClassName = 'aspect-[9/19]',
  placeholderCounterRotateClassName = '',
}: PreviewCardProps) {
  const [failed, setFailed] = useState(false)
  const showImage = imageUrl && !failed

  return (
    <div className={`overflow-hidden rounded-[32px] border-4 border-white shadow-2xl ${cardClassName}`}>
      <div className={`relative ${aspectClassName} w-full bg-neutral-800`}>
        {showImage ? (
          <img
            src={imageUrl}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top"
            onError={() => setFailed(true)}
          />
        ) : (
          showPlaceholderContent && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className={`flex flex-col items-center gap-2 px-4 text-center ${placeholderCounterRotateClassName}`}>
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-white/50">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v4c0 .199.079.39.22.53l2.5 2.5a.75.75 0 1 0 1.06-1.06l-2.28-2.28V6.75Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs font-medium whitespace-nowrap text-white/50">Screens coming soon</span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export function Banner({ config, platformId, imageUrls = [], dropdown }: BannerProps) {
  const isMobile = platformId === 'mobile'

  return (
    <div
      style={{ backgroundColor: config.bgColor }}
      className="relative mb-8 h-[380px] overflow-hidden rounded-3xl sm:h-[400px]"
    >
      {/* simple, non-distracting dot-grid texture */}
      <div className="pointer-events-none absolute inset-0" style={DOT_PATTERN_STYLE} />

      <div className="relative flex h-full items-center gap-8 px-6 sm:px-10">
        <div className="min-w-0 max-w-xl">
          {dropdown && <div className="mb-6">{dropdown}</div>}
          <h2 className="text-2xl leading-tight font-bold text-white sm:text-3xl lg:text-4xl">{HEADLINE}</h2>
          <p className={`text-2xl leading-tight font-bold sm:text-3xl lg:text-4xl ${config.accentText}`}>
            - {config.accent}
          </p>
          <p className="mt-4 max-w-md text-sm text-white/60 sm:text-base">{config.subheadline}</p>
        </div>
      </div>

      {/* images scaled up, allowed to bleed past the bottom edge (clipped by overflow-hidden) */}
      {isMobile ? (
        <div className="absolute top-6 right-10 hidden items-start gap-4 md:flex">
          <PreviewCard imageUrl={imageUrls[0]} cardClassName="w-56" />
          <PreviewCard imageUrl={imageUrls[1]} showPlaceholderContent cardClassName="w-56" />
          <PreviewCard imageUrl={imageUrls[2]} cardClassName="w-56" />
        </div>
      ) : (
        <div className="absolute right-10 -bottom-24 hidden md:block">
          <PreviewCard
            imageUrl={imageUrls[0]}
            showPlaceholderContent
            cardClassName="w-96 rotate-45"
            aspectClassName="aspect-[16/10]"
            placeholderCounterRotateClassName="-rotate-45"
          />
        </div>
      )}
    </div>
  )
}
