import React, { useState } from "react";
import Chat from "./components/Chat";
import "../src/styles.css";
import ChatbotIcon from "./components/ChatbotIcon";
import SidebarChatbot from "./components/SidebarChatbot";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      
      <ChatbotIcon onClick={toggleSidebar} />
      
      <SidebarChatbot isOpen={isSidebarOpen} onClose={toggleSidebar} />

      <Chat />
      
    </div>
  );
}

export default App;
