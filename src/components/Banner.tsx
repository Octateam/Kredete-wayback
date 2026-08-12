import { useState, type ReactNode } from 'react'
import { HEADLINE, type BannerConfig } from '../data/banners'

interface BannerProps {
  config: BannerConfig
  imageUrl?: string
  dropdown?: ReactNode
}

export function Banner({ config, imageUrl, dropdown }: BannerProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = imageUrl && !imageFailed
  return (
    <div
      className={`relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br ${config.gradient} px-6 py-10 sm:px-10 sm:py-12`}
    >
      {/* decorative abstract rings */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-30%] right-[-10%] h-[420px] w-[420px] rotate-12 rounded-full border-[28px] border-white/[0.06]" />
        <div className="absolute bottom-[-35%] left-[10%] h-[320px] w-[320px] -rotate-12 rounded-full border-[20px] border-white/[0.05]" />
      </div>

      <div className="relative flex items-center justify-between gap-8">
        <div className="min-w-0 max-w-xl">
          {dropdown && <div className="mb-6">{dropdown}</div>}
          <h2 className="text-2xl leading-tight font-bold text-white sm:text-3xl lg:text-4xl">{HEADLINE}</h2>
          <p className={`text-2xl leading-tight font-bold sm:text-3xl lg:text-4xl ${config.accentText}`}>
            - {config.accent}
          </p>
          <p className="mt-4 max-w-md text-sm text-white/60 sm:text-base">{config.subheadline}</p>
        </div>

        <div className="relative hidden h-56 w-56 shrink-0 md:block">
          {showImage ? (
            <div className="absolute right-0 bottom-[-2.5rem] w-48 rotate-[8deg] overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <img src={imageUrl} alt="" className="block w-full" onError={() => setImageFailed(true)} />
            </div>
          ) : (
            <div className="absolute right-0 bottom-[-2.5rem] flex w-48 rotate-[8deg] flex-col items-center justify-center gap-2 rounded-2xl border-4 border-white/20 bg-white/10 px-4 py-16 text-center backdrop-blur-sm">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-white/50">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v4c0 .199.079.39.22.53l2.5 2.5a.75.75 0 1 0 1.06-1.06l-2.28-2.28V6.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-medium text-white/50">Screens coming soon</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
