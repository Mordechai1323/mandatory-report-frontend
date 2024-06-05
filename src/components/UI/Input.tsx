import React from 'react'
import styled from 'styled-components'

import errorIcon from '../../assets/icons/error.svg'

interface InputProps {
  label?: string
  icon?: string
  input: React.InputHTMLAttributes<HTMLInputElement>
  style?: InputStyle
  errMessage?: string
}

type InputStyle =
  | (React.CSSProperties & { marginTopInputContainer?: string; paddingLabel?: string, widthContainer?: string })
  | undefined

export function Input({ label, input, icon, style, errMessage }: InputProps) {
  return (
    <InputStyle $style={style}>
      {label && <label htmlFor={input.id}>{label}</label>}
      <div className="main-container">
        <div className="input-container" style={{ borderColor: errMessage ? 'red' : '' }}>
          <input {...input} />
          {icon && <img src={icon} alt="icon" />}
        </div>
        {errMessage && (
          <div tabIndex={0} className="err-container">
            <img src={errorIcon} alt="error" />
          </div>
        )}
      </div>
    </InputStyle>
  )
}

const InputStyle = styled.div<{ $style: InputStyle}>`
  margin-top: ${({ $style }) => $style?.marginTop || '0'};
  display: ${({ $style }) => $style?.display || 'block'};
  align-items: ${({ $style }) => $style?.alignItems || 'center'};
  justify-content: ${({ $style }) => $style?.justifyContent || 'center'};
  direction: ${({ $style }) => $style?.direction || 'rtl'};

  & label {
    font-size: 1em;
    height: 100%;
    padding: ${({ $style }) => $style?.paddingLabel || '0'};
  }

  & .main-container {
    margin-top: ${({ $style }) => $style?.marginTopInputContainer || '0.5rem'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .input-container {
      display: flex;
      align-items: center;
      border: 1px solid ${({ theme, $style }) => $style?.border || theme.colors.border};
      border-radius: 6px;
      padding: ${({ $style }) => $style?.padding || '0.5rem'};
      width: ${({ $style }) => $style?.widthContainer || '95%'};

      & input {
        width: ${({ $style }) => $style?.width || '100%'};
        font-size: 1em;
        border: none;
        outline: none;
      }

      input[type='checkbox'] {
        transform: scale(1.5);
        accent-color: black;
      }
    }

    & .err-container {
      color: red;
      font-weight: bold;
      font-size: 0.85em;
    }

    & input::-webkit-outer-spin-button,
    & input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`
