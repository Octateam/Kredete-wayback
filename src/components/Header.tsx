import { NavLink, useParams } from 'react-router-dom'
import { PLATFORMS, getLatestVersionId } from '../data/platforms'
import { ThemeToggle } from './ThemeToggle'
import logoLight from '../assets/kredete-logo-light.png'
import logoDark from '../assets/kredete-logo-dark.png'

export function Header() {
  const { platformId } = useParams()

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-8 px-6">
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <img src={logoLight} alt="Kredete Design" className="h-10 w-auto dark:hidden" />
          <img src={logoDark} alt="Kredete Design" className="hidden h-10 w-auto dark:block" />
        </NavLink>

        <nav className="flex items-center gap-1">
          {PLATFORMS.map((platform) => (
            <NavLink
              key={platform.id}
              to={`/${platform.id}/${getLatestVersionId(platform)}`}
              className={[
                'rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                platform.id === platformId
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                  : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-900',
              ].join(' ')}
            >
              {platform.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
