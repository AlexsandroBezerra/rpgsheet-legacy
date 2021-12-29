import styled, { keyframes } from 'styled-components'
import { theme } from 'styled-tools'

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  font-size: 1em;
  top: 50%;
  left: 50%;
  margin: 0;
  transform: translateX(-50%) translateY(-50%);

  &::before {
    border: 0.2em solid rgba(0, 0, 0, 0.1);
    border-radius: 500rem;
    border-color: rgba(255, 255, 255, 0.15);
    position: absolute;
    content: '';
    top: 0%;
    left: 50%;
    width: 2rem;
    height: 2rem;
    margin: 0 0 0 -1rem;
  }

  &::after {
    content: '';
    border-color: ${theme('global.body.color')} transparent transparent;
    border-radius: 500rem;
    border-style: solid;
    border-width: 0.2em;
    box-shadow: 0 0 0 1px transparent;
    position: absolute;
    top: 0%;
    left: 50%;
    width: 2rem;
    height: 2rem;
    animation: ${rotate} 0.6s linear;
    animation-iteration-count: infinite;
    margin: 0 0 0 -1rem;
  }
`
