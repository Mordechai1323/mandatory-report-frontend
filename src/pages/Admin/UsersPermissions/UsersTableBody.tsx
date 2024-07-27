import styled from 'styled-components'

import { UserItem } from './UserItem'
import { Roles } from '../../../types/auth'
// import { fetchData } from '../../../api/api'
// import { useQueryCustom } from '../../../hooks/useQueryCustom'

export type User = {
  id: number
  name: string
  userName: string
  email: string
  displayName: string
  role: Roles
  classification: number
}

export const UsersTableBody = () => {
  // const { data: users } = useQueryCustom(['users'], () => fetchData<User>('users'))

  const users = [
    {
      id: 1,
      name: 'John Doe',
      userName: 'john.doe',
      email: 'john.doe@example.com',
      displayName: 'JohnD',
      role: 0,
      classification: 1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      userName: 'jane.smith',
      email: 'jane.smith@example.com',
      displayName: 'JaneS',
      role: 1,
      classification: 2,
    },
    {
      id: 3,
      name: 'Robert Brown',
      userName: 'robert.brown',
      email: 'robert.brown@example.com',
      displayName: 'RobB',
      role: 0,
      classification: 3,
    },
    {
      id: 4,
      name: 'Emily Davis',
      userName: 'emily.davis',
      email: 'emily.davis@example.com',
      displayName: 'EmilyD',
      role: 1,
      classification: 1,
    },
    {
      id: 5,
      name: 'Michael Wilson',
      userName: 'michael.wilson',
      email: 'michael.wilson@example.com',
      displayName: 'MikeW',
      role: 1,
      classification: 2,
    },
    {
      id: 6,
      name: 'Jessica Taylor',
      userName: 'jessica.taylor',
      email: 'jessica.taylor@example.com',
      displayName: 'JessT',
      role: 0,
      classification: 3,
    },
    {
      id: 7,
      name: 'David Anderson',
      userName: 'david.anderson',
      email: 'david.anderson@example.com',
      displayName: 'DaveA',
      role: 1,
      classification: 1,
    },
    {
      id: 8,
      name: 'Sarah Martinez',
      userName: 'sarah.martinez',
      email: 'sarah.martinez@example.com',
      displayName: 'SarahM',
      role: 1,
      classification: 2,
    },
    {
      id: 9,
      name: 'Daniel Thomas',
      userName: 'daniel.thomas',
      email: 'daniel.thomas@example.com',
      displayName: 'DanT',
      role: 0,
      classification: 3,
    },
    {
      id: 10,
      name: 'Laura Jackson',
      userName: 'laura.jackson',
      email: 'laura.jackson@example.com',
      displayName: 'LauraJ',
      role: 1,
      classification: 1,
    },
    {
      id: 11,
      name: 'James White',
      userName: 'james.white',
      email: 'james.white@example.com',
      displayName: 'JimW',
      role: 1,
      classification: 2,
    },
    {
      id: 12,
      name: 'Mary Harris',
      userName: 'mary.harris',
      email: 'mary.harris@example.com',
      displayName: 'MaryH',
      role: 0,
      classification: 3,
    },
    {
      id: 13,
      name: 'Christopher Clark',
      userName: 'christopher.clark',
      email: 'christopher.clark@example.com',
      displayName: 'ChrisC',
      role: 1,
      classification: 1,
    },
    {
      id: 14,
      name: 'Patricia Lewis',
      userName: 'patricia.lewis',
      email: 'patricia.lewis@example.com',
      displayName: 'PatL',
      role: 1,
      classification: 2,
    },
    {
      id: 15,
      name: 'Joseph Robinson',
      userName: 'joseph.robinson',
      email: 'joseph.robinson@example.com',
      displayName: 'JoeR',
      role: 0,
      classification: 3,
    },
    {
      id: 16,
      name: 'Susan Walker',
      userName: 'susan.walker',
      email: 'susan.walker@example.com',
      displayName: 'SueW',
      role: 1,
      classification: 1,
    },
    {
      id: 17,
      name: 'Charles Hall',
      userName: 'charles.hall',
      email: 'charles.hall@example.com',
      displayName: 'CharlieH',
      role: 1,
      classification: 2,
    },
    {
      id: 18,
      name: 'Barbara Allen',
      userName: 'barbara.allen',
      email: 'barbara.allen@example.com',
      displayName: 'BarbA',
      role: 0,
      classification: 3,
    },
    {
      id: 19,
      name: 'Thomas Young',
      userName: 'thomas.young',
      email: 'thomas.young@example.com',
      displayName: 'TomY',
      role: 1,
      classification: 1,
    },
    {
      id: 20,
      name: 'Linda King',
      userName: 'linda.king',
      email: 'linda.king@example.com',
      displayName: 'LindaK',
      role: 1,
      classification: 2,
    },
    {
      id: 21,
      name: 'Paul Wright',
      userName: 'paul.wright',
      email: 'paul.wright@example.com',
      displayName: 'PaulW',
      role: 0,
      classification: 3,
    },
    {
      id: 22,
      name: 'Nancy Scott',
      userName: 'nancy.scott',
      email: 'nancy.scott@example.com',
      displayName: 'NancyS',
      role: 1,
      classification: 1,
    },
    {
      id: 23,
      name: 'Steven Green',
      userName: 'steven.green',
      email: 'steven.green@example.com',
      displayName: 'SteveG',
      role: 1,
      classification: 2,
    },
    {
      id: 24,
      name: 'Karen Adams',
      userName: 'karen.adams',
      email: 'karen.adams@example.com',
      displayName: 'KarenA',
      role: 0,
      classification: 3,
    },
    {
      id: 25,
      name: 'Daniel Baker',
      userName: 'daniel.baker',
      email: 'daniel.baker@example.com',
      displayName: 'DanB',
      role: 1,
      classification: 1,
    },
    {
      id: 26,
      name: 'Dorothy Gonzalez',
      userName: 'dorothy.gonzalez',
      email: 'dorothy.gonzalez@example.com',
      displayName: 'DoroG',
      role: 1,
      classification: 2,
    },
    {
      id: 27,
      name: 'Brian Nelson',
      userName: 'brian.nelson',
      email: 'brian.nelson@example.com',
      displayName: 'BrianN',
      role: 0,
      classification: 3,
    },
    {
      id: 28,
      name: 'Lisa Carter',
      userName: 'lisa.carter',
      email: 'lisa.carter@example.com',
      displayName: 'LisaC',
      role: 1,
      classification: 1,
    },
    {
      id: 29,
      name: 'Edward Mitchell',
      userName: 'edward.mitchell',
      email: 'edward.mitchell@example.com',
      displayName: 'EdM',
      role: 1,
      classification: 2,
    },
    {
      id: 30,
      name: 'Sandra Perez',
      userName: 'sandra.perez',
      email: 'sandra.perez@example.com',
      displayName: 'SandyP',
      role: 0,
      classification: 3,
    },
    {
      id: 31,
      name: 'George Roberts',
      userName: 'george.roberts',
      email: 'george.roberts@example.com',
      displayName: 'GeorgeR',
      role: 1,
      classification: 1,
    },
  ]

  return (
    <UsersTableBodyStyle>
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </UsersTableBodyStyle>
  )
}

const UsersTableBodyStyle = styled.div`
  margin-top: 0.5rem;
`
