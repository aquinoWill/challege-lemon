import React from 'react'
import { Wrapper } from 'pages/Default.styled'
import { DialogProvider } from 'providers'

export const SimpleDialog = () => {
  return (
    <Wrapper>
      <div>Contéudo page</div>
      <DialogProvider
        isOpen
        title='Dialog simple'
        closeOnOverlayClick
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
