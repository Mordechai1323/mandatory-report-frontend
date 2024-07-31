import React from 'react'
import { useAuth } from './useAuth'
import { Roles } from '../types/auth'
import moment from 'moment'
import { Report } from '../models/report'

export const useIsUserAllowedToEdit = (report: Report) => {
  const { auth } = useAuth()
  const [isUserAllowedToEdit, setIsUserAllowedToEdit] = React.useState(false)

  React.useEffect(() => {
    if (auth?.role === Roles.Admin) setIsUserAllowedToEdit(true)
    else {
      const isPassed15Minutes = moment().diff(moment(report.createdAt), 'minutes') > 15
      const isCurrentUser = report.createdBy === auth?.uniqueID
      if (!isPassed15Minutes && isCurrentUser) {
        setIsUserAllowedToEdit(true)
        const time = 15 - moment().diff(moment(report.createdAt), 'minutes')
        console.log('time passed:', time)

        const timeout = setTimeout(() => {
          setIsUserAllowedToEdit(false)
        }, 60 * 1000 * time)

        return () => clearTimeout(timeout)
      }
    }
  }, [auth, report])

  return isUserAllowedToEdit
}
