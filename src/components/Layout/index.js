import React from 'react'
import { Outlet } from 'react-router-dom'
import { node } from 'prop-types'
import { Wrapper } from './Layout.styled'

export const Layout = ({ children }) => (
  <Wrapper>
    { children }
    <Outlet />
  </Wrapper>
)

Layout.defaultProps = {
  children: <></>
}

Layout.propTypes = {
  children: node
}
