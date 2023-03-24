import styled from 'styled-components'

export const Wrapper = styled.section`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: fixed;
  align-items: flex-end;
  justify-content: center;
`

export const Overlay = styled.div`
    inset: 0px;
    z-index: -1;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
`

export const Card = styled.div`
  width: 100%;
  row-gap: 42px;
  min-height: 30vh;
  max-height: 90vh;
  padding: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
`

export const WrapperTitle = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h6`
  color: #000000;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
`

export const CloseButton = styled.button`
  right: 0;
  border: 0;
  margin: 0;
  padding: 0;
  width: 1.3em;
  height: 1.3em;
  cursor: pointer;
  background: none;
  position: absolute;

  &:before,
  &:after {
    content: '';
    left: 0;
    right: 0;
    height: 0.1em;
    position: absolute;
    background: #000000;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  overflow-y: overlay;
`
