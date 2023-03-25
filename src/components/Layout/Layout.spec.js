import React from 'react'
import { render, screen } from '@testing-library/react'
import { Layout } from './index'

jest.mock('react-router-dom')

describe('Layout Component', () => {
  it('Should render children component', () => {
    const props = { children: <div> My component </div> }
    render(<Layout {...props} />)
    expect(screen.getByText(/My component/i)).toBeInTheDocument()
  })
})
