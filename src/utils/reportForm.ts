import { Report } from '../models/report'
import { getItems, setItems } from './localStorage'

/*
 * Save the user's choice in localStorage
 * so that the next time, default values can be set to improve the user experience. 
 */
const setUserChoices = (report: Report) => {
  const reportFormUserChoicesFormat = {
    reportTypeId: report.reportType.id,
    departmentId: report.department.id,
    areaId: report.area.id,
  }
  setItems('reportFormUserChoices', reportFormUserChoicesFormat)
}

/*
 * Get the default values of the user choose in the add report form
 */
const getUserChoices = () => {
  const reportFormUserChoices = getItems('reportFormUserChoices')
  return reportFormUserChoices ? reportFormUserChoices : {}
}


export { setUserChoices , getUserChoices }
