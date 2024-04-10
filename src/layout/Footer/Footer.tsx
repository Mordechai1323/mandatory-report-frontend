import styled from 'styled-components'

export const Footer = () => {
  return (
    <FooterStyle>
      <div className="power-by">
        <span>פותח ע״י צוות Nexus בלמד״ן</span>
      </div>

      <div className="contact-info">
        <span>צור קשר: </span>
        <span>054-1234567</span>
      </div>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`
  width: 100%;
  height: 4vh;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
`
