import styled from 'styled-components'
import { Range, RangeKeyDict, DateRange as ReactDateRang } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { he } from 'date-fns/locale'

interface DateRangeProps {
  range: Range
  onChangeHandler: (ranges: RangeKeyDict) => void
}

export const DateRange = ({ onChangeHandler, range }: DateRangeProps) => {
  return (
    <DateRangeStyle>
      <ReactDateRang
        ranges={[range]}
        onChange={onChangeHandler}
        showMonthAndYearPickers={false}
        showDateDisplay={false}
        locale={he}
        // scroll={{ enabled: true }}
      />
    </DateRangeStyle>
  )
}

const DateRangeStyle = styled.div`
  /* direction: ltr; */
  width: 50vw;
  height: 50vh;
  display: flex;
  align-items: end;

  & .rdrCalendarWrapper {
    border-radius: 8px;
  }

  & .rdrStartEdge {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0px 8px 8px 0px;
  }

  & .rdrEndEdge {
    border-radius: 8px 0px 0px 8px;
    background: ${(props) => props.theme.colors.primary};
  }

  & .rdrInRange {
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 0;
    right: 0;
    left: 0;
  }

  & .rdrDayEndOfWeek > .rdrInRange {
    border-radius: 8px 0px 0px 8px;
  }

  & .rdrDayStartOfWeek > .rdrInRange {
    border-radius: 0px 8px 8px 0px;
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

  & .rdrMonthAndYearWrapper {
    direction: ltr;
  }

  & .rdrDayToday .rdrDayNumber span:after {
    background: black;
  }
`
