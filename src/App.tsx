import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { PlatformLayout } from './pages/PlatformLayout'
import { VersionRedirect } from './pages/VersionRedirect'
import { VersionShell } from './pages/VersionShell'
import { FlowIndexRedirect } from './pages/FlowIndexRedirect'
import { FlowScreensPanel } from './pages/FlowScreensPanel'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:platformId" element={<PlatformLayout />}>
        <Route path=":versionId" element={<VersionRedirect />} />
        <Route path=":versionId/:regionId" element={<VersionShell />}>
          <Route index element={<FlowIndexRedirect />} />
          <Route path=":flowId" element={<FlowScreensPanel />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
