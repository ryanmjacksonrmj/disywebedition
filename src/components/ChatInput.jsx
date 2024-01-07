import { useState } from "react";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiObject, event) => {
    setMsg((msg) => msg + emojiObject.emoji);
    setShowPicker(false);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={() => setShowPicker((val) => !val)} />
          {showPicker && <Picker className="test123" onEmojiClick={onEmojiClick} />}
        </div>
      </div>
      <form className="input-container" onSubmit={(e) => sendChat(e)}>
        <input type="text" placeholder="type your message here" value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color: #07beb8;
  padding: 0 2rem;
  border-radius: 2rem;
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffc971;
        cursor: pointer;
      }
      .test123 {
        position: absolute;
        top: -470px;
        background-color: #c4fff9;
        box-shadow: 0 5px 10px purple;
        border-color: #07beb8;
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #cc5803;
          width: 5px;
          &-thumb {
            background-color: #ffb627;
          }
        }
        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }
        .emoji-search {
          background-color: transparent;
          border-color: #ffc971;
        }
        .emoji-group:before {
          background-color: #ffc971;
        }
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-content: center;
    gap: 2rem;
    background-color: white;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: black;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
      &::selection {
        background-color: #9186f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #cc5803;
      border: none;
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;
