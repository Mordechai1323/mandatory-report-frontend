import styled from 'styled-components'

interface CardProps {
  label: string
  value: number
}

export const Card = ({ label, value }: CardProps) => {
  return (
    <CardStyle>
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </CardStyle>
  )
}

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 20%;

  .label {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray};
  }

  & .value {
    margin-top: 0.5rem;
    font-size: 2rem;
  }
`
