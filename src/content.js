const chatbotIcon = document.createElement('div');
chatbotIcon.className = 'chatbot-icon';
chatbotIcon.textContent = 'Chat';
document.body.appendChild(chatbotIcon);

const chatbotSidebar = document.createElement('div');
chatbotSidebar.className = 'chatbot-sidebar';
chatbotSidebar.innerHTML = `
    <button id="close-chatbot">Close</button>
    <div>Your Chatbot UI Here</div>
`;
document.body.appendChild(chatbotSidebar);

chatbotIcon.addEventListener('click', () => {
    chatbotSidebar.classList.toggle('open');
});

document.getElementById('close-chatbot').addEventListener('click', () => {
    chatbotSidebar.classList.remove('open');
});
