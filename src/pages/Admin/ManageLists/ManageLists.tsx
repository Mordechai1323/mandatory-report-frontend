import styled from 'styled-components'

import { List } from './List'
import { Area } from '../../../models/area'
import { useAreas } from '../../../hooks/useAreas'
import { Department } from '../../../models/department'
import { ReportType } from '../../../models/reportType'
import { useDepartments } from '../../../hooks/useDepartments'
import { useReportsTypes } from '../../../hooks/useReportsTypes'
import { CenterContainer } from '../../../components/UI/CenterContainer'


export const ManageLists = () => {
  const { departments } = useDepartments()
  const { areas } = useAreas()
  const { reportsTypes } = useReportsTypes()

  return (
    <ManageListsStyle>
      <CenterContainer>
        <List<Department> listName="departments" listLabel="מכלולים" listItems={departments} />
        <List<Area> listName="areas" listLabel="זירות" listItems={areas} />
        <List<ReportType> listName="reportsTypes" listLabel="סוג דיווח" listItems={reportsTypes} />
      </CenterContainer>
    </ManageListsStyle>
  )
}

const ManageListsStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
`
