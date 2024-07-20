import styled from 'styled-components'
import { Range, DateRange as ReactDateRang } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

interface DateRangeProps {
  range: Range
  onChangeHandler: (ranges: Range) => void
}

export const DateRange = ({ onChangeHandler, range }: DateRangeProps) => {
  return (
    <DateRangeStyle>
      <ReactDateRang
        ranges={[range]}
        onChange={onChangeHandler}
        showMonthAndYearPickers={false}
        showDateDisplay={false}
        // scroll={{ enabled: true }}
      />
    </DateRangeStyle>
  )
}

const DateRangeStyle = styled.div`
  direction: ltr;
  width: 50vw;
  height: 50vh;
  display: flex;
  align-items: end;

  & .rdrCalendarWrapper {
    border-radius: 8px;
  }

  & .rdrStartEdge {
    border-radius: 8px 0px 0px 8px;
    background: ${(props) => props.theme.colors.primary};
  }

  & .rdrEndEdge {
    border-radius: 0px 8px 8px 0px;
    background: ${(props) => props.theme.colors.primary};
  }

  & .rdrInRange {
    background: ${(props) => props.theme.colors.secondary};
  }
  .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span {
    color: ${(props) => props.theme.colors.primary};
  }

  & .rdrDayInPreview {
    border: none;
  }

  & .rdrDayStartPreview,
  .rdrDayEndPreview {
    border: unset;
  }

  & .rdrNextPrevButton {
    background: none;
  }
`
