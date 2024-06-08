import React from 'react'
import styled from 'styled-components'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  style?: ModalStyle
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
  z-index: 10;
`

const ModalContainer = styled.div<{ $style: ModalStyle }>`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  width: ${({ $style }) => $style?.width || 'auto'};
  height: ${({ $style }) => $style?.height || 'auto'};
  overflow: hidden;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6%;
  margin-top: 2%;
`

const ModalContent = styled.div<{ $isHaveTitle: boolean }>`
  height: ${({ $isHaveTitle }) => ($isHaveTitle ? '92%' : '100%')};
  width: 100%;
`

export const Modal = ({ isOpen, onClose, title, children, style }: ModalProps) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  if (!isOpen) return null

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer $style={style ?? {}}>
        {title && (
          <ModalHeader>
            <h2>{title}</h2>
          </ModalHeader>
        )}
        <ModalContent $isHaveTitle={title != undefined}>{children}</ModalContent>
      </ModalContainer>
    </ModalOverlay>
  )
}
