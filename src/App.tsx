import { ErrorBoundary } from '@components/common'
import { useRoutes } from 'react-router-dom'
import configAppRoutes from 'routes'
import { ThemeProvider } from './theme'

function App() {
  const routes = useRoutes(configAppRoutes)

  return (
    <ErrorBoundary>
      <ThemeProvider>{routes}</ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
