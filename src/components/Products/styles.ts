import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 60%;
  margin: 0 auto;

  margin-top: 2rem;

  h2 {
    color: var(--text-title);
  }

  @media only screen and (max-device-width: 425px) {
    h2 {
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;

export const WrapperProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;

  margin-top: 2rem;

  @media only screen and (max-device-width: 425px) {
    display: inline-block;
  }

  @media only screen and (max-device-width: 375px) {
    display: inline-block;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;

  span {
    color: var(--text-body);
    text-overflow: ellipsis;
  }

  button {
    margin-top: 1rem;
    padding: 0.75rem;
    border: none;
    border-radius: 0.25rem;
    color: #fff;
    background: #00a8ff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media only screen and (max-device-width: 425px) {
    font-size: 1.2rem;

    padding: 0;
    margin: 0;

    margin-bottom: 1rem;
  }
`;
