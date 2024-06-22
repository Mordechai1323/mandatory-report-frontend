const getItems = (key: string) => {
  const items = localStorage.getItem(key)
  return items ? JSON.parse(items) : null
}

const setItems = (key: string, items: unknown) => {
  localStorage.setItem(key, JSON.stringify(items))
}

export { getItems, setItems }
