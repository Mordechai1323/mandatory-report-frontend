import styled from 'styled-components'

import { CenterContainer } from '../../components/UI/CenterContainer'

export const Footer = () => {
  return (
    <FooterStyle>
      <CenterContainer style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="power-by">
          <span>האתר פותח ע”י מדור יישומים בלמד”ן</span>
        </div>

        <div className="contact-info">
          <span>ליציאת קשר - 123-5678 | 123-4567</span>
        </div>
      </CenterContainer>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.white + '66'};
`
