import * as React from "react";
import "./App.css";
import Messages from "./components/Messages";
function App() {
  const [isOpenChat, setOpenChat] = React.useState(false);

  const handleOpenChat = (e: any) => {
    e.preventDefault();
    setOpenChat(true);
  };

  const handleCloseChat = (e: any) => {
    e.preventDefault();
    setOpenChat(false);
  };
  return (
    <>
    <div>
      <button
        className="open-button"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          fontSize: "25px",
        }}
      >
        <i
          className="fa fa-comments-o"
          aria-hidden="true"
          onClick={handleOpenChat}
        ></i>
      </button>
      {isOpenChat ? (
        <Messages isOpenChat={isOpenChat} handleCloseChat={handleCloseChat} />
      ) : (
        ""
      )}
    </div>
    </>
  );
}

export default App;
