import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Dialog } from './index'
import { useDialogContext } from 'providers'

jest.mock('providers', () => ({
  useDialogContext: jest.fn()
}))

const initialState = {
  isOpen: false,
  onClose: jest.fn(),
  closeOnOverlayClick: false,
  title: 'Title',
  children: <>Content</>
}

describe('COMPONENT: Dialog', () => {
  beforeEach(() => {
    useDialogContext.mockReturnValue(initialState)
  })
  
  it('Should render Dialog when isOpen is true', () => {
    const props = {
      isOpen: true,
      onClose: jest.fn(),
      closeOnOverlayClick: true,
      title: 'Title Dialog',
      children: <>Content Dialog Mock</>
    }

    useDialogContext.mockImplementation(() => (props))
    render(<Dialog />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText(/Title Dialog/i)).toBeInTheDocument()
    expect(screen.getByText(/Content Dialog Mock/i)).toBeInTheDocument()
  })

  it('Should render without title', () => {
    const props = {
      isOpen: true,
      onClose: jest.fn(),
      closeOnOverlayClick: true,
      children: <>Content Dialog Mock</>
    }

    useDialogContext.mockImplementation(() => (props))
    const { container } = render(<Dialog />)
    expect(container.querySelector('h6')).toBeNull()
  })

  it('Should close Dialog when click in Button', async () => {
    const props = {
      isOpen: true,
      onClose: jest.fn(),
      closeOnOverlayClick: true,
      children: <>Content Dialog Mock</>
    }

    useDialogContext.mockImplementation(() => (props))
    const { container } = render(<Dialog />)
    await userEvent.click(screen.getByRole('button'))
    expect(container.querySelector('section')).toBeNull()
  })

  it('Should close Dialog when click in Overlay', async () => {
    const props = {
      isOpen: true,
      onClose: jest.fn(),
      title: 'Title Dialog',
      closeOnOverlayClick: true,
      children: <>Content Dialog Mock</>
    }

    useDialogContext.mockImplementation(() => (props))
    const { container } = render(<Dialog />)
    await userEvent.click(screen.getByTestId('overlay'))
    expect(container.querySelector('section')).toBeNull()
  })

  it('Should click in Overlay and not close Dialog', async () => {
    const props = {
      isOpen: true,
      onClose: jest.fn(),
      title: 'Title Dialog',
      closeOnOverlayClick: false,
      children: <>Content Dialog Mock</>
    }

    useDialogContext.mockImplementation(() => (props))
    render(<Dialog />)
    await userEvent.click(screen.getByTestId('overlay'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('Should close Dialog when user press Esc', async () => {
    const props = {
      isOpen: true,
      onClose: jest.fn(),
      title: 'Title Dialog',
      closeOnOverlayClick: true,
      children: <>Content Dialog Mock</>
    }

    useDialogContext.mockImplementation(() => (props))
    const { container } = render(<Dialog />)
    await userEvent.keyboard('{Escape}')
    expect(container.querySelector('section')).toBeNull()
  })
})