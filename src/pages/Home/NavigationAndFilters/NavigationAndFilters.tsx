import styled from 'styled-components'

import { Filters } from './Filters/Filters'
import { Navigation } from './Navigation/Navigation'
import { CenterContainer } from '../../../components/UI/CenterContainer'

export const NavigationAndFilters = () => {
  return (
    <NavigationAndFiltersStyle>
      <CenterContainer
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Navigation />
        <Filters />
      </CenterContainer>
    </NavigationAndFiltersStyle>
  )
}

const NavigationAndFiltersStyle = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  justify-content: center;
  margin-top: 1%;
`
