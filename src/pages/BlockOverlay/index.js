import React from 'react'
import { Wrapper } from 'pages/Default.styled'
import { DialogProvider } from 'providers'

export const BlockOverlay = () => {
  return (
    <Wrapper>
      <div>Contéudo BlockOverlay page</div>
      <DialogProvider
        isOpen
        title='BlockOverlay'
        closeOnOverlayClick={false}
      >
        <div>
          <p>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            `}
          </p>
        </div>
      </DialogProvider>
    </Wrapper>
  )
}
