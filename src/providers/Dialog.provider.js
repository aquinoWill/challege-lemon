import React, { createContext, useContext } from 'react'
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

  return (
    <DialogContext.Provider value={{
      title,
      children,
      isOpen,
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