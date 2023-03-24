import React, { useState, useCallback, useEffect, useContext } from 'react'
import { DialogContext } from 'providers'

import { Wrapper, Overlay, Card, WrapperTitle, Title, CloseButton, Content } from './Dialog.styled'

export const Dialog = () => {
  const {
    title,
    isOpen,
    children,
    closeOnOverlayClick
  } = useContext(DialogContext)

  const [dialogOpen, setDialogOpen] = useState(isOpen)

  const onClose = useCallback(() => {
    setDialogOpen(false)
  }, [setDialogOpen])

  useEffect(() => {
    const handleEscEvent = event => {
      if (event.keyCode === 27 && closeOnOverlayClick) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscEvent)

    return () => {
      window.removeEventListener('keydown', handleEscEvent)
    }
  }, [onClose, closeOnOverlayClick])

  return (
    <>
      { dialogOpen && (
        <Wrapper>
          <Overlay onClick={() => closeOnOverlayClick ? onClose() : null} />
          <Card>
            <WrapperTitle>
              { title && <Title>{ title }</Title>}
              <CloseButton onClick={onClose} /> 
            </WrapperTitle>
            <Content>
              { children }
            </Content>
          </Card>
        </Wrapper>
      )}
    </>
  )
}