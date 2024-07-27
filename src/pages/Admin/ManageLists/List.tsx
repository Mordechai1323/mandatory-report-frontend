import React from 'react'
import styled from 'styled-components'

import { ListItem } from './ListItem'
import { dataSchema } from '../../../constants/dataSchema'

interface ListProps<T> {
  listName: keyof typeof dataSchema
  listLabel: string
  listItems: T[] | undefined
}

export type ExistItem = object & { id: number }
export type NewItem = object

export const List = <T extends ExistItem>({ listItems, listName, listLabel }: ListProps<T>) => {
  const [isAddItemOpen, setIsAddItemOpen] = React.useState(false)

  return (
    <ListStyle>
      <HeaderStyle>
        <h4>{listLabel}</h4>
        <button onClick={() => setIsAddItemOpen(true)}>{`+ הוספת ${listLabel}`}</button>
      </HeaderStyle>
      <ListItemsStyle>
        {isAddItemOpen && (
          <ListItem item={dataSchema[listName]} isAddItem={true} listName={listName} />
        )}
        {listItems?.map((item) => (
          <ListItem key={item.id} item={item} listName={listName} />
        ))}
      </ListItemsStyle>
    </ListStyle>
  )
}

const ListStyle = styled.div`
  width: 100%;
  margin: 3vh 0;
`
const HeaderStyle = styled.div`
  display: flex;

  & h4 {
    font-weight: 600;
    font-size: 20px;
  }

  & button {
    margin-right: 2%;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
  }
`
const ListItemsStyle = styled.ul`
  margin-top: 1vh;
  display: flex;
  flex-wrap: wrap;
`
