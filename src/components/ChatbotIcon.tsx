import React from 'react';

interface ChatbotIconProps {
    onClick: () => void;
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
