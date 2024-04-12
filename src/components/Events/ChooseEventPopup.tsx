import styled from 'styled-components'

import { Input } from '../UI/Input'
import { Button } from '../UI/Button'
import searchIcon from '../../assets/icons/search.svg'
import { AllEvents } from './AllEvents'

interface ChooseEventPopupProps {
  closeChooseEventPopup: () => void
}

export const ChooseEventPopup = ({ closeChooseEventPopup }: ChooseEventPopupProps) => {
  return (
    <ChooseEventPopupStyle>
      <div className="center">
        <div className="top">
          <div className="right-container">
            <Input input={{ placeholder: 'חיפוש' }} icon={searchIcon} />
          </div>
          <div className="left-container">
            <Button>+ הוספת אירוע</Button>
          </div>
        </div>

        <AllEvents closeChooseEventPopup={closeChooseEventPopup} />
      </div>
    </ChooseEventPopupStyle>
  )
}

const ChooseEventPopupStyle = styled.div`
  width: 41rem;
  height: 34rem;
  background: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .center {
    width: 80%;
    height: 90%;

    & .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 2.5rem;

      & .right-container {
        width: 70%;
      }

      & .left-container {
        width: 20%;
        background: ${({ theme }) => theme.colors.secondary};
        border-radius: 6px;
      }
    }
  }
`
