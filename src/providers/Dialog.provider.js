import React, { createContext } from 'react'
import { node, string, bool } from 'prop-types'
import { Dialog } from 'components'

export const DialogContext = createContext({})
export const DialogProvider = ({
  title,
  isOpen,
  children,
  closeOnOverlayClick
}) => (
  <DialogContext.Provider value={{
    title,
    isOpen,
    children,
    closeOnOverlayClick
  }}>
    <Dialog>
      { children }
    </Dialog>
  </DialogContext.Provider>
)

DialogProvider.propTypes = {
  title: string,
  children: node,
  isOpen: bool.isRequired,
  closeOnOverlayClick: bool.isRequired
}