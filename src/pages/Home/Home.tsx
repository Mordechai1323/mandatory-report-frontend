import styled from 'styled-components'

import { AddReport } from './AddReport'
import { Event } from '../../components/Events/Event'
import { ReportsTable } from '../../components/Reports/ReportsTable'

export const Home = () => {
  return (
    <HomeStyle>
      <Event />
      <ReportsTable />
      <AddReport />
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  margin-top: 3rem;
  .reports-table {
    width: 90%;
    height: 90%;
    overflow: auto;
  }
`
