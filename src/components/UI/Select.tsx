import React from 'react'
import { useTheme } from 'styled-components'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { styled as styledComponents } from 'styled-components'
import {
  Select as MuiSelect,
  SelectProps,
  MenuItem,
  styled,
  MenuItemProps,
  Tooltip,
} from '@mui/material'

import { MuiRTL } from './MuiRTL'
import errorIcon from '../../assets/icons/error.svg'

export type SelectProperties<T extends FieldValues> = {
  label?: string
  icon?: string
  name: Path<T>
  select?: SelectProps
  options: SelectOption[]
  style?: SelectStyle
  errMessage?: string
  control?: Control<T>
}

type SelectStyle = React.CSSProperties | undefined
type SelectOption = { label: string; value: number | string }

interface StyledMenuItemProps extends MenuItemProps {
  background: string
  color: string
}

export const Select = <T extends FieldValues>({
  options,
  select,
  errMessage,
  icon,
  label,
  name,
  style,
  control,
}: SelectProperties<T>) => {
  const theme = useTheme()

  return (
    <MuiRTL>
      <SelectStyle $style={style}>
        {label && <div className="label">{label}</div>}
        <div className="main-container">
          <div className="select-container" style={{ borderColor: errMessage ? 'red' : '' }}>
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <SelectStyled
                  fullWidth
                  disableUnderline
                  variant="standard"
                  id={name}
                  {...field}
                  {...select}
                  // MenuProps={{
                  //   PaperProps: {
                  //     style: {
                  //       maxHeight: 150, // Set the maximum height here
                  //     },
                  //   },
                  // }}
                >
                  {options.map((option) => (
                    <StyledMenuItem
                      color={theme.colors.primary}
                      background={theme.colors.secondary}
                      value={option.value}
                      key={option.value}
                    >
                      {option.label}
                    </StyledMenuItem>
                  ))}
                </SelectStyled>
              )}
            />
            {icon && <img src={icon} alt="icon" />}
          </div>
          {errMessage && (
            <div tabIndex={0} className="err-container">
              <Tooltip title={errMessage}>
                <img src={errorIcon} alt="error" />
              </Tooltip>
            </div>
          )}
        </div>
      </SelectStyle>
    </MuiRTL>
  )
}

const SelectStyle = styledComponents.div<{ $style: SelectStyle }>`
 margin-top: ${({ $style }) => $style?.marginTop || '0'};

& .label {
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
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;
    width: 95%;
    height: 2.5rem;
    padding: 0.5rem;
  }


  & .err-container {
    color: red;
    font-weight: bold;
    font-size: 0.85em;
  }
}
`

const StyledMenuItem = styled((props: StyledMenuItemProps) => <MenuItem {...props} />)`
  width: 100%;
  &:hover {
    background: ${({ background }) => background};
    color: ${({ color }) => color};
  }
`

const SelectStyled = styled(MuiSelect)({
  height: '100%',
  '& .MuiSelect-select:focus': {
    backgroundColor: 'transparent',
  },
  '& .MuiMenuItem-root.Mui-selected': {
    backgroundColor: 'transparent',
  },
  '& .MuiMenuItem-root.Mui-selected:hover': {
    backgroundColor: 'transparent',
  },
})
