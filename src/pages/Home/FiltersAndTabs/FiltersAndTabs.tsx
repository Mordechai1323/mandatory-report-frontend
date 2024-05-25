import styled from 'styled-components'

import { Tabs } from './Tabs/Tabs'
import { Filters } from './Filters/Filters'
import { CenterContainer } from '../../../components/UI/CenterContainer'

export const FiltersAndTabs = () => {
  return (
    <FiltersAndTabsStyle>
      <CenterContainer
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Tabs />
        <Filters />
      </CenterContainer>
    </FiltersAndTabsStyle>
  )
}

const FiltersAndTabsStyle = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  justify-content: center;
  margin-top: 1%;
`
