import React from 'react'
import { render } from '@testing-library/react'
import { BlockOverlay } from './index'

describe('BlockOverlay Page', () => {
  it('Should render BlockOverlay Page', () => {
    const { container } = render(<BlockOverlay />)
    expect(container.querySelector('section')).toBeTruthy()
  })
})
