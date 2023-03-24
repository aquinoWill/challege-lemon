import React, { useState, useCallback, useEffect } from 'react'
import { useDialogContext  } from 'providers'

import { Wrapper, Overlay, Card, WrapperTitle, Title, CloseButton, Content } from './Dialog.styled'

export const Dialog = () => {
  const {
    title,
    isOpen,
    children,
    closeOnOverlayClick
  } = useDialogContext()

  const [hasOpen, setHasOpen] = useState(isOpen)

  const onClose = useCallback(() => {
    setHasOpen(false)
  }, [setHasOpen])

  useEffect(() => {
    const handleEscCloseDialog = event => {
      if (event.keyCode === 27 && closeOnOverlayClick) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscCloseDialog)

    return () => {
      window.removeEventListener('keydown', handleEscCloseDialog)
    }
  }, [onClose, closeOnOverlayClick])

  return (
    <>
      { hasOpen && (
        <Wrapper role='dialog'>
          <Overlay
            data-testid='overlay' 
            onClick={() => closeOnOverlayClick ? onClose() : null}
          />
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
