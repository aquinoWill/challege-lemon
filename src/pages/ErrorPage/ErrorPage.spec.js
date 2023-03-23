import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { useRouteError } from 'react-router-dom'

import { ErrorPage } from './index'

jest.mock('react-router-dom', () => ({
  useRouteError: jest.fn(() => ({})),
}))

describe('ErrorPage Page', () => {
  it('Should render ErrorPage component with statusText', () => {
    useRouteError.mockImplementation(() => ({
      "status": 404,
      "statusText": "Not Found"
    }))
    render(<ErrorPage />)
    expect(screen.getByText('Oops!')).toBeInTheDocument()
    expect(screen.getByText(
      'Sorry, an unexpected error has occurred.'
    )).toBeInTheDocument()
    expect(screen.getByText('Not Found')).toBeInTheDocument()
  })

  it('Should render ErrorPage component with message', () => {
    useRouteError.mockImplementation(() => ({
      "status": 404,
      "message": "Error message"
    }))
    render(<ErrorPage />)
    expect(screen.getByText('Oops!')).toBeInTheDocument()
    expect(screen.getByText(
      'Sorry, an unexpected error has occurred.'
    )).toBeInTheDocument()
    expect(screen.getByText('Error message')).toBeInTheDocument()
  })
})
