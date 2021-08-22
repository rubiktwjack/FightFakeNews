document.addEventListener("DOMContentLoaded", function (dcle) {
	var dButton = document.getElementById("button");
	var input = document.getElementById("inputText");

	//點擊按鈕，向內容腳本發送訊息
	dButton.addEventListener("click", function (ce) {
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			chrome.tabs.sendMessage(tabs[0].id, { content: input.value });
		});
		// localStorage.setItem("name", input.value);
	});
});
