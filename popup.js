$("#black").on("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            color: "black"
        });
    });
});

$("#red").on("click", () => {
    //����Ȃ��I�I
    // chrome.runtime.sendMessage({ color: "red" });

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            color: "red"
        });
    });
});
