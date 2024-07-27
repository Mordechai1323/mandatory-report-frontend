import React from 'react'
import styled from 'styled-components'

import { Card } from './Card'
import deleteIcon from '../../../assets/icons/delete.svg'
import { useMutationCustom } from '../../../hooks/useMutationCustom'
import { createItem, deleteItem, updateItem } from '../../../api/api'
import { ExistItem, NewItem } from './List'

interface ListItemProps {
  item: ExistItem | NewItem
  listName: string
  isAddItem?: boolean
}

function isExistItem(item: ExistItem | NewItem): item is ExistItem {
  return 'id' in item
}

export const ListItem = ({ item, listName, isAddItem = false }: ListItemProps) => {
  const [itemState, setItemState] = React.useState(item)
  const entries = Object.entries(itemState).filter(
    ([key]) => key !== 'id' && key !== 'createdAt' && key !== 'updatedAt' && key !== 'style'
  )

  const { mutate: deleteMutate } = useMutationCustom({
    queryKey: [listName],
    mutationFn: (id: number) => deleteItem<ExistItem>(listName, id),
    // updateQueryData(updateData, queryData) {
    //   return queryData ? [...queryData, updateData] : [updateData]
    // },
  })

  const { mutate: updateMutate } = useMutationCustom({
    queryKey: [listName],
    mutationFn: () => updateItem<ExistItem>(listName, itemState as ExistItem),
  })

  const { mutate: createMutate } = useMutationCustom({
    queryKey: [listName],
    mutationFn: (itemState: NewItem) => createItem<NewItem>(listName, itemState),
  })

  const createItemHandler = () => {
    if (Object.values(itemState).every((value) => (value as string).trim() !== '')) {
      createMutate(itemState)
      setItemState(item)
    }
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setItemState((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <ListItemStyle>
      {entries.map(
        ([key, value]) =>
          key !== 'style' && (
            <Card
              key={key}
              label={key}
              value={value}
              style={
                key === 'name' && 'style' in itemState ? (itemState.style as string) : undefined
              }
              isAddItem={isAddItem}
              onChangeHandler={onChangeHandler}
              updateItemHandler={() => updateMutate()}
              createItemHandler={() => createItemHandler()}
            />
          )
      )}
      <img
        src={deleteIcon}
        style={{ visibility: isAddItem ? 'hidden' : 'visible' }}
        onClick={() => isExistItem(item) && deleteMutate(item.id)}
        alt="delete"
      />
    </ListItemStyle>
  )
}

const ListItemStyle = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    cursor: pointer;
    margin-left: 34px;
  }
`
