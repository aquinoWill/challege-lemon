import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { node } from 'prop-types'
import { Wrapper } from './Layout.styled'

export const Layout = ({ children }) => (
  <Wrapper>
    <Link to={'/'}>Home</Link> |
    <Link to={'/simple'}>Simple Dialog</Link> |
    <Link to={'/full'}>Full Size Dialog</Link> |
    <Link to={'/block-overlay'}>Block Overlay Dialog</Link> |
    <Link to={'/close'}>Close Dialog</Link>
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
