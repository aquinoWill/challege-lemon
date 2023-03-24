import React from 'react'
import { render } from '@testing-library/react'
import { SimpleDialog } from './index'

describe('SimpleDialog Page', () => {
  it('Should render SimpleDialog Page', () => {
    const { container } = render(<SimpleDialog />)
    expect(container.querySelector('section')).toBeTruthy()
  })
})
