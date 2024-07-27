import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AuthProvider } from './context/AuthProvider.tsx'
import { EventProvider } from './context/EventProvider.tsx'
import { AlertProvider } from './context/AlertProvider.tsx'
import { AreasProvider } from './context/AreasProvider.tsx'
import { FiltersProvider } from './context/FiltersProvider.tsx'
import { AllEventsProvider } from './context/AllEventsProvider.tsx'
import { AddReportProvider } from './context/AddReportProvider.tsx'
import { DepartmentsProvider } from './context/DepartmentsProvider.tsx'
import { ReportsTypesProvider } from './context/ReportsTypesProvider.tsx'
import { NotificationsProvider } from './context/NotificationsProvider.tsx'

const queryClient = new QueryClient()

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
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
                        <AlertProvider>{children}</AlertProvider>
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
  )
}
