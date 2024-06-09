chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "changeColor") {
        document.body.style.backgroundColor = request.color;
        console.log("title is " + request.tabTitle)
        sendResponse({status: "Color changed", tabTitle: request.tabTitle});
    }
    chrome.scripting.executeScript({
        target: { tabId: request.tabId},
        files: ['src/js/customScript.js']
    }, function (){
        customFunction();
    });
});