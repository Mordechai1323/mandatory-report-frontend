import styled from 'styled-components'

import lamdanLogo from '../assets/lamdanLogo.svg'
import { CenterContainer } from '../components/UI/CenterContainer'

export const PageNotFound = () => {
  return (
    <PageNotFoundStyle>
      <CenterContainer style={{height: '70%'}}>
        <Error404>
          <span>4</span>
          <img src={lamdanLogo} alt="" />
          <span>4</span>
        </Error404>
        <TextContainer>
          <h2>Page Not Found</h2>
          <span>לתמיכה פנו למדור יישומים</span>
        </TextContainer>
      </CenterContainer>
    </PageNotFoundStyle>
  )
}

const PageNotFoundStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Error404 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    font-size: 17rem;
    color: #111b4e;
  }

  & img {
    width: 17rem;
    height: 17rem;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  & h2 {
    font-size: 3rem;
    color: #111b4e;
    font-weight: 100;
  }

  & span {
    font-size: 1.5rem;
    color: #111b4e;
    font-weight: 100;
    margin-top: 2rem;
  }
`
