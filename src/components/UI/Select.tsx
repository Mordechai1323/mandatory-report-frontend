import React from 'react'
import styled from 'styled-components'

import errorIcon from '../../assets/icons/error.svg'

interface SelectProps {
  props: SelectProperties
  children: React.ReactNode
}

export type SelectProperties = {
  label?: string
  icon?: string
  select: React.SelectHTMLAttributes<HTMLSelectElement> & { placeholder?: string }
  style?: SelectStyle
  errMessage?: string
}
type SelectStyle = React.CSSProperties | undefined

export function Select({ props, children }: SelectProps) {
  return (
    <SelectStyle $style={props.style}>
      {props.label && <label htmlFor={props.select.id}>{props.label}</label>}
      <div className="main-container">
        <div className="select-container" style={{ borderColor: props.errMessage ? 'red' : '' }}>
          <select {...props.select}>
            {props.select.placeholder && (
              <option value="" disabled selected hidden>
                {props.select.placeholder}
              </option>
            )}
            {children}
          </select>
          {props.icon && <img src={props.icon} alt="icon" />}
        </div>
        {props.errMessage && (
          <div tabIndex={0} className="err-container">
            <img src={errorIcon} alt="error" />
          </div>
        )}
      </div>
    </SelectStyle>
  )
}

const SelectStyle = styled.div<{ $style: SelectStyle }>`
  margin-top: ${({ $style }) => $style?.marginTop || '0'};

  & label {
    font-size: 1em;
    margin-bottom: 0.5rem;
    height: 100%;
  }
  & .main-container {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .select-container {
      display: flex;
      align-items: center;
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 6px;
      padding: 0.5rem;
      width: 95%;

      & select {
        width: ${({ $style }) => $style?.width || '100%'};
        font-size: 1em;
        border: none;
        outline: none;
      }
    }

    & Select::-webkit-outer-spin-button,
    & Select::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    & .err-container {
      color: red;
      font-weight: bold;
      font-size: 0.85em;
    }
  }
`
