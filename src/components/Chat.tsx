import React, { useState } from "react";
import "../App.css"; // Adjust the path if necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsSpin, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ user?: string; bot?: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [gptTypes, setgptTypes] = useState([
    "gpt 4o mini",
    "gptPlus",
    "Chatgpt",
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { user: input }]);
    setInput("");

    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    const data = await response.json();
    setMessages((prev) => [...prev, { bot: data.response }]);
  };

  const clearChat = () => {
    setMessages([]);
  };

  const handleRegnerate = async () => {};
  const handleNewChat = async () => {};

  return (
    <div className="chat-container">
      <h1 className="chat-title">Chatbot</h1>
      <select className="form-select" name="" id="">
        <option value="">Select gpt</option>
        {gptTypes.map((type, index) => (
          <option value="">
            <span>{type}</span>
          </option>
        ))}
      </select>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.user ? "message user-message" : "message bot-message"
            }
          >
            <span>{msg.user ? "You: " : "Bot: "}</span>
            {msg.user ? msg.user : msg.bot}
          </div>
        ))}
      </div>
      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="chat-input"
        />
        <button type="submit" className="submit-button" disabled={!input.trim()}>
          Send
        </button>
      </form>
      <div className="custom-btn-icon">
        <button type="button" className="reg-button" onClick={handleRegnerate}>
          <span>
            <FontAwesomeIcon className="me-3" icon={faArrowsSpin} />
            Regenerate
          </span>
        </button>
        <button type="button" className="new-button" onClick={handleNewChat}>
          <span>
            {" "}
            <FontAwesomeIcon className="me-3" icon={faSquarePlus} />
            New Chat
          </span>
        </button>
      </div>
      <button className="clear-chat" onClick={clearChat}>
        Clear Chat
      </button>
    </div>
  );
};

export default Chat;
