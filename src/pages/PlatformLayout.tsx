import { Navigate, Outlet, useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { VersionTabs } from '../components/VersionTabs'
import { getPlatform } from '../data/platforms'

export function PlatformLayout() {
  const { platformId } = useParams()
  const platform = getPlatform(platformId)

  if (!platform) return <Navigate to="/" replace />

  return (
    <div className="min-h-screen">
      <Header />
      <VersionTabs platform={platform} />
      <Outlet context={{ platform }} />
    </div>
  )
}
