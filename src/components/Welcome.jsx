import styled from "styled-components";

export default function Welcome({ currentUser }) {
  return (
    <Container>
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Please select a chat to start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #c4fff9;
  font-size: 2rem;
  img {
    height: 20rem;
  }
  span {
    color: #07beb8;
  }
`;
