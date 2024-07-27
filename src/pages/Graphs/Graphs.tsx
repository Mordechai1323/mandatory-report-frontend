import styled from 'styled-components'

import { Card } from './Card'
import { CenterContainer } from '../../components/UI/CenterContainer'
import { ReportsTypes } from './ReportsTypes'
import { ReportingDepartments } from './ReportingDepartments'

export const Graphs = () => {
  return (
    <GraphsStyle>
      <CenterContainer
        style={{
          width: '75%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <CardsContainer>
          <Card label="דיווחים היום" value={16} />
          <Card label="דיווחים השבוע" value={201} />
          <Card label="דיווחים במכלול שלך" value={45} />
        </CardsContainer>
        <GraphsContainer>
          <ReportsTypes />
          <ReportingDepartments />
        </GraphsContainer>
      </CenterContainer>
    </GraphsStyle>
  )
}

const GraphsStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: space-evenly;
`

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 14vh;
`

const GraphsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60vh;
  width: 100%;
`
