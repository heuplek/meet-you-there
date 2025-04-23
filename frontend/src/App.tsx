import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import LandingPage from './pages/LandingPage'
import { FlightContextProvider } from './components/context/flightSearchContext'

function App() {
  const queryClient = new QueryClient()

  return (
    <div className=''>
      <QueryClientProvider client={queryClient}>
        <FlightContextProvider>
          <LandingPage />
        </FlightContextProvider>
      </QueryClientProvider>
    </div>

  )
}

export default App
