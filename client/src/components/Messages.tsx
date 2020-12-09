import * as React from "react";

function Messages(props: any) {
  return (
    <div
      style={{
        display: props.isOpenChat ? "block" : "none",
      }}
      className="chat-popup"
      id="myForm"
    >
      <form action="/action_page.php" className="form-container">
        <h1>Messages</h1>
        <div
          style={{
            minHeight: "200px",
            minWidth: "350px",
          }}
        >
          <div className="list-message-histories">
            <div id="message-item">
              <div id="avatar">
                <img
                  width="50px"
                  height="50px"
                  style={{ borderRadius: "50%" }}
                  src="https://i.pinimg.com/originals/2f/c1/e8/2fc1e8f24f04c4f16334032847540b1e.jpg"
                />
              </div>
              <div id="right-message-item">
                <div>
                  <b>Lisa</b>
                </div>
                <div>
                  <small>Message....</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn cancel"
          onClick={props.handleCloseChat}
        >
          Close
        </button>
      </form>
    </div>
  );
}

export default Messages;
