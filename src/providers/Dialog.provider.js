import React, { useState, useCallback, createContext, useContext } from 'react'
import { node, string, bool } from 'prop-types'
import { Dialog } from 'components'

export const DialogContext = createContext({})
export const useDialogContext = () => useContext(DialogContext)
export const DialogProvider = ({
  title,
  isOpen,
  children,
  closeOnOverlayClick
}) => {
  const [hasOpen, setHasOpen] = useState(isOpen)

  const onClose = useCallback(() => {
    setHasOpen(false)
  }, [setHasOpen])

  return (
    <DialogContext.Provider value={{
      title,
      onClose,
      children,
      isOpen: hasOpen,
      closeOnOverlayClick
    }}>
      <Dialog>
        { children }
      </Dialog>
    </DialogContext.Provider>
  )
}

DialogProvider.propTypes = {
  title: string,
  children: node,
  isOpen: bool.isRequired,
  closeOnOverlayClick: bool.isRequired
}