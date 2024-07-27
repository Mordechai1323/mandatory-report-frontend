import React from 'react'
import styled from 'styled-components'

interface CardProps {
  label: string
  value: string | number
  style?: string
  isAddItem: boolean
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  updateItemHandler: () => void
  createItemHandler: () => void
}

export const Card = ({
  label,
  value,
  style,
  onChangeHandler,
  createItemHandler,
  isAddItem,
  updateItemHandler,
}: CardProps) => {
  return (
    <CardStyle>
      <input
        type="text"
        name={label}
        onChange={onChangeHandler}
        placeholder={label}
        value={value}
        onBlur={isAddItem ? createItemHandler : updateItemHandler}
        onKeyDown={(e) =>
          e.key === 'Enter' && (isAddItem ? createItemHandler() : updateItemHandler())
        }
      />
      {style && (
        <input
          type="color"
          onChange={onChangeHandler}
          name="style"
          value={style}
          onBlur={isAddItem ? createItemHandler : updateItemHandler}
          onKeyDown={(e) =>
            e.key === 'Enter' && (isAddItem ? createItemHandler() : updateItemHandler())
          }
        />
      )}
    </CardStyle>
  )
}

const CardStyle = styled.div`
  width: 20vw;
  height: 6.5vh;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #0000001a;
  margin: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border-radius: 6px;

  &:nth-child(1) {
    margin-right: 0;
  }

  input[type='text'] {
    width: 80%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1.2rem;
  }

  input[type='color'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 7%;
    height: 2.7vh;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  input[type='color']::-webkit-color-swatch {
    border-radius: 50%;
    border: none;
  }
  input[type='color']::-moz-color-swatch {
    border-radius: 50%;
    border: none;
  }
`
