chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Crome extension loaded");
    
    if (request.action === "openChat") {
        sendResponse({status: "Chat opened!"});
    }
});
