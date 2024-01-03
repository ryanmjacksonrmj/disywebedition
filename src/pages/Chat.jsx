import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsersRoute } from "../utils/APIRoutes";
import Contacts from "../components/Contacts";

function Chat() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  // useEffect(
  //   () => async () => {
  //     if (!localStorage.getItem("disy-app-user")) {
  //       navigate("/login");
  //     } else {
  //       setCurrentUser(await JSON.parse(localStorage.getItem("disy-app-user")));
  //     }
  //   },
  //   []
  // );
  // useEffect(
  //   () => async () => {
  //     console.log("OTHER CURRENTUSER", currentUser, "OTHER CURRENTUSER");
  //     if (currentUser) {
  //       if (currentUser.isAvatarImageSet) {
  //         const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
  //         console.log("DATA", data, "DATA");
  //         setContacts(data.data);
  //       } else {
  //         console.log("THISPATH");
  //         navigate("/setAvatar");
  //       }
  //     }
  //   },
  //   [currentUser]
  // );

  useEffect(() => {
    const checkUser = async () => {
      if (!localStorage.getItem("disy-app-user")) {
        navigate("/login");
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("disy-app-user")));
      }
    };

    checkUser();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log("OTHER CURRENTUSER", currentUser, "OTHER CURRENTUSER");
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
          console.log("DATA", data, "DATA");
          setContacts(data.data);
        } else {
          console.log("THISPATH");
          navigate("/setAvatar");
        }
      }
    };

    fetchData();
  }, [currentUser]);

  return (
    <Container>
      <div className="container">
        <Contacts contacts={contacts} currentUser={currentUser} />
      </div>
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
