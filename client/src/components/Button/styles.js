import styled from 'styled-components'

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: var(--font-bold);
  padding: var(--spacing-3) var(--spacing-5);
  border-radius: var(--border-radius-2);
  transition: 0.3s;

  &:disabled {
    cursor: progress;
    opacity: 0.5;
  }

  &.primary {
    border: 1px solid var(--primary);
    color: var(--white);
    background-color: var(--primary);
  }

  &.primary:hover:not(:disabled) {
    background-color: var(--primary-outlined);
  }

  &.secondary {
    border: 1px solid var(--secondary);
    color: var(--white);
    background-color: var(--secondary);
  }

  &.secondary:hover:not(:disabled) {
    background-color: var(--secondary-outlined);
  }

  &.outlined-primary {
    border: 1px solid var(--primary);
    color: var(--primary);
    background-color: transparent;
  }

  &.outlined-primary:hover:not(:disabled) {
    background-color: var(--primary-outlined);
  }

  &.outlined-secondary {
    border: 1px solid var(--secondary);
    color: var(--secondary);
    background-color: transparent;
  }

  &.outlined-secondary:hover:not(:disabled) {
    background-color: var(--secondary-outlined);
  }

  &.link-primary {
    border: none;
    color: var(--primary);
    background-color: transparent;
    text-decoration: underline;
    text-transform: none;
    border: 1px solid transparent;
  }

  &.link-primary:hover:not(:disabled) {
    border: 1px solid var(--primary);
    background-color: var(--primary-outlined);
  }

  &.link-secondary {
    border: none;
    color: var(--secondary);
    background-color: transparent;
    text-decoration: underline;
    text-transform: none;
    border: 1px solid transparent;
  }

  &.link-secondary:hover:not(:disabled) {
    border: 1px solid var(--secondary);
    background-color: var(--secondary-outlined);
  }

  &.icon-button {
    border-radius: var(--border-radius-3);
    padding: var(--spacing-3);
  }
`
