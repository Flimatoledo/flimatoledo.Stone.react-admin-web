import styled from 'styled-components';

export const NavSide = styled.div`
  position: fixed;
  z-index:1;
  display: flex;
  justify-content: space-between;
  background: var(--green);
  flex-direction: column;

  align-items: center;

  max-width: 24rem;
  width: 100%;
  height: 100vh;
  padding: 2rem;

  .buttons-container {
    display: flex;
    flex-direction: column;

    width: 100%;

    a {
      text-decoration: none;

      & + a {
        padding-top: 0.5rem;
      }

      &:first-child {
        padding-top: 0;
      }
    }
  }

  .logout {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--white);
    font-weight: 500;

    button {
      background-color: #c53030;
      border: 0;
      padding: 0.25rem;
      border-radius: 0.25rem;

      font-size: 1.125rem;
      color: var(--white);
      font-weight: 500;

      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1480px;
  margin-top: 0.25rem;
  margin: 0 auto;
  padding: 0 24px;
  font-size: 2.25rem;
  color: var(--white);
`;

export const TextSpan = styled.span`
  font-weight: 600;
  color: #1c4532;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 20rem;
  width: 100%;

  border: 0;
  background: var(--button-sidebar);
  padding: 1.1875rem 2rem;
  border-radius: 0.25rem;

  font-size: 1.125rem;
  color: var(--white);

  &:hover {
    background: var(--button-sidebar2);
  }

  transition: background 1000ms;

  &.selected {
    background: var(--background-button2);
  }
`;
