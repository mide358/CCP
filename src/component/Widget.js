import attachment from "./images/icons/attachment.svg";
import emojis from "./images/icons/emojis.svg";
import microphone from "./images/icons/microphone.svg";
import chatboxicon from "./images/icons/chatbox-icon.svg";
import closechat from "./images/icons/close-chat.svg";
import send from "./images/icons/paper-plane.svg";
import image from "./images/image.png";
import "./style.css";
import "./assets/css/chat.css";
import "./assets/css/typing.css";
import { useState } from "react";

const Widget = () => {
  const [chatBoxState, setChatBoxState] = useState(false);

  function toggleState() {
    setChatBoxState(!chatBoxState);
    /* showOrHideChatBox();
        toggleChatButtonIcon(); */
  }

  function showOrHideChatBox() {
    if (chatBoxState) {
      return "chatbox--active";
    } else {
      return "";
    }
  }

  function toggleChatButtonIcon() {
    if (chatBoxState) {
      return closechat;
    } else {
      return chatboxicon;
    }
  }

  return (
    <div className="container">
      <div className="chatbox">
        <div className={`chatbox__support ${showOrHideChatBox()}`}>
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <img src={image} alt="representative avatar" />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Bisola Aiyeola</h4>
              <p className="chatbox__description--header">
                Customer Care Platform
              </p>
            </div>
          </div>
          <div className="chatbox__messages">
            <div>
              <div className="messages__item messages__item--visitor">
                Can you let me talk to the support?
              </div>
              <div className="messages__item messages__item--operator">
                Sure!
              </div>
              <div className="messages__item messages__item--visitor">
                Need your help, I need a developer in my site.
              </div>
              <div className="messages__item messages__item--operator">
                Hi... What is it? I'm a front-end developer, yay!
              </div>
              <div className="messages__item messages__item--typing">
                <span className="messages__dot"></span>
                <span className="messages__dot"></span>
                <span className="messages__dot"></span>
              </div>
            </div>
          </div>
          <div className="chatbox__footer">
            <button>
              {" "}
              <img src={emojis} alt="emoji" />{" "}
            </button>
            <button>
              {" "}
              <img src={microphone} alt="click to speak" />{" "}
            </button>
            <input type="text" id="write" placeholder="Write a message..." />
            <button>
              {" "}
              <img src={attachment} alt="attach a file" />{" "}
            </button>
            <button>
              {" "}
              <img src={send} id="send" alt="send message" />{" "}
            </button>
            {/* <p className="chatbox__send--footer">Send</p> */}
          </div>
        </div>
        <div className="chatbox__button">
          <button onClick={toggleState}>
            <img src={`${toggleChatButtonIcon()}`} alt="toggle chat" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Widget;
