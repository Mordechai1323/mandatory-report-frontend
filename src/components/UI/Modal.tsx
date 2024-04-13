import React from 'react'
import styled from 'styled-components'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  style: ModalStyle
}

type ModalStyle = {
  width?: string
  height?: string
}

const ModalOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`

const ModalContainer = styled.div<{ $style: ModalStyle }>`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  border-radius: 8px;
  width: ${({ $style }) => $style?.width || 'auto'};
  height: ${({ $style }) => $style?.height || 'auto'};
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`


const ModalContent = styled.div`
  padding: 20px 0;
`

export const Modal = ({ isOpen, onClose, title, children, style }: ModalProps) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  if (!isOpen) return null

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer $style={style}>
        <ModalHeader>
          <h2>{title}</h2>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalOverlay>
  )
}
