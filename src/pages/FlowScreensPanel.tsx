import { Navigate, useOutletContext, useParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { ScreenCard } from '../components/ScreenCard'
import type { VersionOutletContext } from './VersionShell'

export function FlowScreensPanel() {
  const { platform, version, region } = useOutletContext<VersionOutletContext>()
  const { flowId } = useParams()

  const flow = region.flows.find((f) => f.id === flowId)

  if (!flow) return <Navigate to={`/${platform.id}/${version.id}/${region.id}`} replace />

  return (
    <div>
      <h2 className="mb-1 text-lg font-semibold text-neutral-900 dark:text-white">{flow.name}</h2>
      <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        {flow.screens.length} screen{flow.screens.length === 1 ? '' : 's'}
      </p>

      {flow.screens.length === 0 ? (
        <EmptyState
          title="No screens added yet"
          description="Screens for this flow will be pulled in from Figma next."
        />
      ) : (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-4">
          {flow.screens.map((screen) => (
            <ScreenCard key={screen.id} screen={screen} />
          ))}
        </div>
      )}
    </div>
  )
}
