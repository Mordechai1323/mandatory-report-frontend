import { Select, SelectProperties } from '../../components/UI/Select'

interface AddReportSelectProps {
  props: SelectProperties
  options: { name: string; id: number }[]
}

export const AddReportSelect = ({ props, options }: AddReportSelectProps) => {
  return (
    <Select props={{ ...props }}>
      {options.map((option) => (
        <option key={option?.name} value={option?.id}>
          {option.name}
        </option>
      ))}
    </Select>
  )
}
