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
import { FiltersProvider } from './context/FiltersProvider.tsx'
import { AuthProvider } from './context/AuthProvider.tsx'
import { NotificationsProvider } from './context/NotificationsProvider.tsx'
import { AlertProvider } from './context/AlertProvider.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <EventProvider>
          <AllEventsProvider>
            <DepartmentsProvider>
              <AreasProvider>
                <ReportsTypesProvider>
                  <AddReportProvider>
                    <FiltersProvider>
                      <NotificationsProvider>
                        <AlertProvider>
                          <App />
                        </AlertProvider>
                      </NotificationsProvider>
                    </FiltersProvider>
                  </AddReportProvider>
                </ReportsTypesProvider>
              </AreasProvider>
            </DepartmentsProvider>
          </AllEventsProvider>
        </EventProvider>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
)
