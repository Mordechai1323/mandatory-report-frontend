import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App.tsx'
import { EventProvider } from './context/EventProvider.tsx'
import { AreasProvider } from './context/AreasProvider.tsx'
import { AllEventsProvider } from './context/AllEventsProvider.tsx'
import { AddReportProvider } from './context/AddReportProvider.tsx'
import { DepartmentsProvider } from './context/DepartmentsProvider.tsx'
import { ReportsTypesProvider } from './context/ReportsTypesProvider.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <EventProvider>
        <AllEventsProvider>
          <DepartmentsProvider>
            <AreasProvider>
              <ReportsTypesProvider>
                <AddReportProvider>
                  <App />
                </AddReportProvider>
              </ReportsTypesProvider>
            </AreasProvider>
          </DepartmentsProvider>
        </AllEventsProvider>
      </EventProvider>
    </QueryClientProvider>
  </BrowserRouter>
)
