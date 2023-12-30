import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsersRoute } from "../utils/APIRoutes";

function Chat() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  useEffect(() => async () => {
    if (!localStorage.getItem("disy-app-user")) {
      navigate("/login");
    } else {
      setCurrentUser(await JSON.parse(localStorage.getItem("disy-app-user")));
    }
  }, []);
	useEffect(() => async() => {
		if(currentUser) {
			const data = await axios.get(`${allUsersRoute}`)
		}
	}, [currentUser])
  return (
    <Container>
      <div className="container">Chat</div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: lightblue;
  .container {
    height: 85wh;
    width: 85vw;
    background-color: lightgreen;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
    /* @media screen and (min-width: 720px) and (max-width: 1080px);
		grid-template-columns: 35% 65%; ADD 360-480 for phones...*/
  }
`;

export default Chat;
