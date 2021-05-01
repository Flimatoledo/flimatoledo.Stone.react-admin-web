import styled from "styled-components";

export const ContentAudits = styled.div`
  position: absolute;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 24rem;
  width: 75%;
  max-width: 1535px;
  padding: 4rem;

  div {
    font-size: 1.25rem;
    width: 70%;
    color: var(--white);
    background: #2f855a;
    font-weight: 500;
    margin: 1rem;
    padding: 0.75rem 2rem;
    border-radius: 1rem;
  }
`;
