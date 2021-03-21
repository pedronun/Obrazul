import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 5rem;

  background: var(--nav);

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .right-side-header {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-device-width: 425px) {
    flex-direction: column;

    height: 11rem;
  }
`;

export const Form = styled.form`
  input {
    width: 23.75rem;
    height: 2.5rem;

    border-radius: 0.5rem;
    border: none;

    padding: 0.5rem 1rem;

    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }
  }

  div {
    position: relative;
  }

  button {
    background-color: transparent;
    border: none;

    position: absolute;
    right: 10px;
    top: 10px;
  }

  @media only screen and (max-device-width: 425px) {
    flex-direction: column;

    input {
      margin-bottom: 1rem;
    }

    button {
      top: 7px;
    }
  }

  @media only screen and (max-device-width: 375px) {
    input {
      width: 20rem;
    }
  }
`;

export const Cart = styled.div`
  padding-left: 1rem;

  position: relative;

  .cart-counter {
    position: absolute;

    top: -10px;
    right: -10px;

    background: #ff41c6;
    color: #fff;

    height: 20px;
    width: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    @media only screen and (max-device-width: 425px) {
      top: -7px;
    }
  }
`;

export const LineBottom = styled.div`
  width: 100%;
  height: 2rem;
  background: #0048b9;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin-left: 3rem;
    margin-right: 3rem;

    border: none;
    background: transparent;
    color: #fff;

    font-size: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  p {
    color: #fff;
  }

  .pink {
    background: #d02c9f;
    padding: 0.2rem 0.5rem;
  }

  @media only screen and (max-device-width: 425px) {
    height: 3.5rem;

    .pink {
      padding: 0.25rem 0.5rem;
    }
  }
`;
