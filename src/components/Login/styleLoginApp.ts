import styled from "styled-components";

export const Div = styled.div`
 
  overflow: hidden;
  display: flex;
  z-index: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: var(--back-login);
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--white);
  border-radius: 0.5rem;
  width: 100%;
  max-width: 360px;
  padding: 2rem;

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-input);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button {
    width: 100%;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    height: 3rem;
    background: var(--back-button);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
