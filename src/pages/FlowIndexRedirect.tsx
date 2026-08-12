import { Navigate, useOutletContext } from 'react-router-dom'
import type { VersionOutletContext } from './VersionShell'

/** Default state for a version/region: the first flow, already selected. */
export function FlowIndexRedirect() {
  const { platform, version, region } = useOutletContext<VersionOutletContext>()
  const firstFlow = region.flows[0]

  return <Navigate to={`/${platform.id}/${version.id}/${region.id}/${firstFlow.id}`} replace />
}
