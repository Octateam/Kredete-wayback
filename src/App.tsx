import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { PlatformLayout } from './pages/PlatformLayout'
import { VersionRedirect } from './pages/VersionRedirect'
import { PlatformVersionPage } from './pages/PlatformVersionPage'
import { FlowPage } from './pages/FlowPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:platformId" element={<PlatformLayout />}>
        <Route path=":versionId" element={<VersionRedirect />} />
        <Route path=":versionId/:regionId" element={<PlatformVersionPage />} />
        <Route path=":versionId/:regionId/:flowId" element={<FlowPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
