import React from 'react'

export const useClickOutSide = <T extends HTMLElement>(closePopup: () => void) => {
  const ref = React.useRef<T>(null)

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        closePopup()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [closePopup])

  return { ref }
}
