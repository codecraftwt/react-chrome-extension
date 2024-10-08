import React from 'react';

// Define the props interface
interface ChatbotIconProps {
    onClick: () => void; // Type for the onClick prop
}

const ChatbotIcon: React.FC<ChatbotIconProps> = ({ onClick }) => {
    return (
        <div className="chatbot-icon" onClick={onClick}>
            {/* Your icon or button here */}
            Popup
        </div>
    );
};

export default ChatbotIcon;
