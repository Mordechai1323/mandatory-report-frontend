import React from 'react';
import styled from 'styled-components'

interface TabProps {
  value: string
  isCurrentTab: boolean
}

export const Tabs = () => {
  return (
    <TabsStyle>
      <Tab  value="כל הדיווחים" isCurrentTab={true} />
      <Tab value="דיווחים חשובים" isCurrentTab={false} />
    </TabsStyle>
  )
}

const TabsStyle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  position: relative;
`

const Tab = ({ value, isCurrentTab }: TabProps) => {
  return <TabStyle $isCurrentTab={isCurrentTab}>{value}</TabStyle>
}

const TabStyle = styled.div<{ $isCurrentTab: boolean }>`
  height: 100%;
  width: 26.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem;
  cursor: pointer;
  --p: 18px; 
  clip-path: polygon(var(--p) 0,calc(100% - var(--p)) 0,100% 100%,0 100%);
  background-color: ${({ theme, $isCurrentTab }) => `${theme.colors.white}${$isCurrentTab ? '66' : '33'}`};
  color: ${({ theme, $isCurrentTab }) => ($isCurrentTab ? theme.colors.primary : theme.colors.gray)};
  margin-right: -31px;
`
