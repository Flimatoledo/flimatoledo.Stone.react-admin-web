import styled from "styled-components";

export const ContentCards = styled.div`
  position: absolute;
  
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  left: 24rem;
  width: 75%;
  max-width: 1535px;
  padding: 4rem;

  div {
    width: 22%;
    color: var(--white);
    background: #2f855a;
    font-weight: 500;
    margin: 1rem;
    padding: 0.75rem 2rem;
    border-radius: 1rem;
  }

  .approved-rejected {
    margin-left: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      color: #1c4532;
      padding: 0 0.5rem;
      height: 2rem;

      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      font-weight: 600;

      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }

    .approved {
      background: var(--back-button);
    }

    .rejected {
      color: var(--white);
      background-color: #ff4500;
    }
  }
`;
