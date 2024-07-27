import styled from 'styled-components'

export const UsersTableHeader = () => {
  return (
    <UsersTableHeaderStyle>
      <div className="name">שם מלא</div>
      <div className="user-name">username</div>
      <div className="classification">סיווג</div>
      <div className="email">אימייל</div>
      <div className="display-name">היררכיה</div>
      <div className="role">הרשאות ניהול</div>
    </UsersTableHeaderStyle>
  )
}

const UsersTableHeaderStyle = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;

  & .name {
    width: 15%;
  }
  & .user-name {
    width: 10%;
  }
  & .classification {
    width: 10%;
  }
  & .email {
    width: 15%;
  }
  & .display-name {
    width: 40%;
  }
  & .role {
    width: 10%;
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.halfScreen}) {
    font-size: 0.8rem;
    & .name {
      width: 20%;
    }
    & .user-name {
      width: 5%;
    }
    & .classification {
      width: 10%;
    }
    & .email {
      width: 15%;
    }
    & .display-name {
      width: 40%;
    }
    & .role {
      width: 10%;
    }
  }
`
