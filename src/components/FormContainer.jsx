import styled from "styled-components";

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #07beb8;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
    justify-content: center;
    h1 {
      color: #ff9505;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #9ceaef;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #07beb8;
    border-radius: 0.4rem;
    color: #ff9505;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    &:focus {
      border: 0.1rem solid #ff9505;
      outline: none;
    }
  }
  button {
    background-color: #3dccc7;
    color: #ffc971;
    padding: 1rem 2rem;
    border: none;
    cursor: pointer;
    border-radius: 0.75rem;
    font-size: 2.5rem;
    font-weight: bolder;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #ffc971;
      color: #3dccc7;
    }
  }
  span {
    color: #ff9505;
    font-size: 1.4rem;
    a {
      color: #3dccc7;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default FormContainer;
