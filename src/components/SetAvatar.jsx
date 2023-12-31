import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import loader from "../assets/loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setAvatarRoute } from "../utils/APIRoutes";
import { Buffer } from "buffer";

export default function SetAvatar() {
  const api = "https://api.multiavatar.com/45678945";
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  console.log("SELECTEDAVATAR", selectedAvatar, "SELECTEDAVATAR");
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    const checkLocalStorage = async () => {
      if (!localStorage.getItem("disy-app-user")) {
        navigate("/login");
      }
    };
    checkLocalStorage();
  }, []);

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error("Please select an avatar", toastOptions);
    } else {
      const user = await JSON.parse(localStorage.getItem("disy-app-user"));
      console.log("USER", user, "USER");
      try {
        const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, { image: avatars[selectedAvatar] });
        console.log("DATTTTAAAAAA", data, "DATA");
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        console.log("SECOND USER", user, "SECOND USER");
        localStorage.setItem("disy-app-user", JSON.stringify(user));
        navigate("/");
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error setting avatar. Please try again.", toastOptions);
      }
    }
  };
  useEffect(() => {
    const generateAvatars = async () => {
      const data = [];
      for (let i = 0; i < 4; i++) {
        const image = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`);
        console.log(image.data);
        const buffer = new Buffer(image.data);
        data.push(buffer.toString("base64"));
        console.log(buffer);
      }
      setAvatars(data);
      setIsLoading(false);
    };
    generateAvatars();
  }, []);
  return (
    <>
      {isLoading ? (
        <Container>
          <img src={loader} alt="loader" className="loader" />
        </Container>
      ) : (
        <Container>
          <div className="title-container">
            <h1>Pick an avatar as your profile picture</h1>
          </div>
          <div></div>
          <div className="avatars">
            {avatars.map((avatar, index) => {
              return (
                <div key={index} className={`avatar ${selectedAvatar === index ? "selected" : ""}`}>
                  <img
                    src={`data:image/svg+xml;base64,${avatar}`}
                    alt="avatar"
                    onClick={() => setSelectedAvatar(index)}
                  />
                </div>
              );
            })}
          </div>
          <div></div>
          <button className="submit-btn" onClick={setProfilePicture}>
            Set as Profile Picture
          </button>
        </Container>
      )}
      ;
      <ToastContainer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #c4fff9;
  height: 100vh;
  width: 100vw;
  .loader {
    max-inline-size: 100%;
  }
  .title-container {
    h1 {
      color: #ff9505;
      font-size: 4rem;
      padding: 2rem;
    }
  }
  .avatars {
    display: flex;
    gap: 3rem;
    .avatar {
      border: 0.4 rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s ease-in-out;
      img {
        height: 8rem;
      }
    }
    .selected {
      border: 0.4rem solid #ffc971;
    }
  }
  .submit-btn {
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
`;
