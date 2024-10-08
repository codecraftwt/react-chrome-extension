import React, { useState } from 'react';
import '../App.css'; // Adjust the path if necessary

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<{ user?: string; bot?: string }[]>([]);
    const [input, setInput] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { user: input }]);
        setInput('');

        const response = await fetch('http://localhost:5000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input }),
        });

        const data = await response.json();
        setMessages((prev) => [...prev, { bot: data.response }]);
    };

    const clearChat = () => {
        setMessages([]);
    };

    return (
        <div className="chat-container">
            <h1 className="chat-title">Chatbot</h1>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.user ? 'message user-message' : 'message bot-message'}>
                        <span>{msg.user ? 'You: ' : 'Bot: '}</span>
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
                <button type="submit" className="chat-submit" disabled={!input.trim()}>Send</button>
            </form>
            <button className="clear-chat" onClick={clearChat}>Clear Chat</button>
        </div>
    );
};

export default Chat;
