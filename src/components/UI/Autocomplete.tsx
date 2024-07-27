import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Autocomplete as MuiAutocomplete, Tooltip } from '@mui/material'

import errorIcon from '../../assets/icons/error.svg'

interface AutocompleteProps<T extends FieldValues> {
  options: string[]
  name: Path<T>
  control: Control<T>
  label?: string
  icon?: string
  placeholder?: string
  style?: AutocompleteStyle
  errMessage?: string
}

export const Autocomplete = <T extends FieldValues>({
  options,
  control,
  name,
  errMessage,
  label,
  style,
  placeholder,
  icon,
}: AutocompleteProps<T>) => {
  return (
    <AutocompleteStyle $style={style}>
      {label && <div>{label}</div>}
      <div className="main-container">
        <div className="autocomplete-container" style={{ borderColor: errMessage ? 'red' : '' }}>
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value, ref } }) => (
              <MuiAutocomplete
                value={value}
                fullWidth
                onChange={(_e, newValue) => onChange(newValue)}
                onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
                inputValue={value}
                options={options}
                id={name}
                ref={ref}
                freeSolo
                disableClearable
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{ ...params.InputProps, disableUnderline: true }}
                    variant="standard"
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    autoFocus
                    multiline
                  />
                )}
              />
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
    </AutocompleteStyle>
  )
}

type AutocompleteStyle =
  | (React.CSSProperties & {
      marginTopInputContainer?: string
      paddingLabel?: string
      widthContainer?: string
    })
  | undefined

const AutocompleteStyle = styled.div<{ $style: AutocompleteStyle }>`
  margin-top: ${({ $style }) => $style?.marginTop || '0'};
  display: ${({ $style }) => $style?.display || 'block'};
  align-items: ${({ $style }) => $style?.alignItems || 'center'};
  justify-content: ${({ $style }) => $style?.justifyContent || 'center'};
  direction: ${({ $style }) => $style?.direction || 'rtl'};

  & .label {
    font-size: 1em;
    height: 100%;
    padding: ${({ $style }) => $style?.paddingLabel || '0'};
  }

  & .main-container {
    margin-top: ${({ $style }) => $style?.marginTopInputContainer || '0.5rem'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .autocomplete-container {
      display: flex;
      align-items: center;
      border: 1px solid ${({ theme, $style }) => $style?.border || theme.colors.border};
      border-radius: 6px;
      padding-right: ${({ $style }) => $style?.padding || '0.5rem'};
      width: ${({ $style }) => $style?.widthContainer || '95%'};
      min-height: 2.5rem;
      max-height: 6.6rem;
      overflow: auto;
    }

    & .err-container {
      color: red;
      font-weight: bold;
      font-size: 0.85em;
    }
  }
`
