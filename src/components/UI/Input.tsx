import React from 'react'
import styled from 'styled-components'

interface InputProps {
  label?: string
  icon?: string
  input: React.InputHTMLAttributes<HTMLInputElement>
  errMessage?: string
}

export function Input({ label, input, icon, errMessage }: InputProps) {
  return (
    <InputStyle>
      {label && <label htmlFor={input.id}>{label}</label>}
      <div className="input-container">
        <input {...input} />
        {icon && <img src={icon} alt="icon" />}
      </div>
      {errMessage && (
        <span tabIndex={0} className="err-container">
          {errMessage}
        </span>
      )}
    </InputStyle>
  )
}

const InputStyle = styled.div`
  width: 100%;
  height: 100%;

  & label {
    font-size: 1.4em;
    margin: 0;
    font-weight: bold;
  }

  & .input-container {
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;
    padding: 0.5rem;

    & input {
      width: 100%;
      font-size: 1em;
      border: none;
      outline: none;
    }
  }

  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & .err-container {
    color: red;
    font-weight: bold;
    font-size: 0.85em;
  }
`
