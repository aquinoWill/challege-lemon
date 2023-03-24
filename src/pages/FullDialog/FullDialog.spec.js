import React from 'react'
import { render } from '@testing-library/react'
import { FullDialog } from './index'

describe('FullDialog Page', () => {
  it('Should render FullDialog Page', () => {
    const { container } = render(<FullDialog />)
    expect(container.querySelector('section')).toBeTruthy()
  })
})
