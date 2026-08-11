import { Navigate, useOutletContext, useParams } from 'react-router-dom'
import { getDefaultRegionId } from '../lib/regions'
import type { PlatformData } from '../types'

export function VersionRedirect() {
  const { platform } = useOutletContext<{ platform: PlatformData }>()
  const { versionId } = useParams()
  const version = platform.versions.find((v) => v.id === versionId)

  if (!version) return <Navigate to={`/${platform.id}/${platform.versions[0].id}`} replace />

  return <Navigate to={`/${platform.id}/${version.id}/${getDefaultRegionId(version)}`} replace />
}
