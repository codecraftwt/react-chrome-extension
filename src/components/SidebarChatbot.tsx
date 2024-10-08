import React from "react";

interface SidebarChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarChatbot: React.FC<SidebarChatbotProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`chatbot-sidebar ${isOpen ? "open" : ""}`}>
      <button onClick={onClose}>Close</button>
      {/* Add your chatbot UI here */}
    </div>
  );
};

export default SidebarChatbot;
