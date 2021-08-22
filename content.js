// setup script
var script = document.createElement("script");
script.onload = function () {
	setTimeout(function () {
		let id = chrome.runtime.id;
		location.href = `javascript:extensionConnect("${id}"); void 0`;
	}, 1000);
};
script.type = "text/javascript";
script.src = chrome.extension.getURL("myscript.js");
document.getElementsByTagName("head")[0].appendChild(script);

// whitelist
var whiteList = [
	"/YahooTWNews",
	"/ETtoday",
	"/tvbsfb",
	"/news.ebc",
	"/appledaily.tw",
	"/CTfans",
	"/setnews",
	"/myudn",
	"/stormmedia",
	"/m.ltn.tw",
];

// post url
var ele = "";

// get voter
var voter =
	localStorage.getItem("name") == null ? "" : localStorage.getItem("name");
chrome.runtime.onMessage.addListener(function (message, sendResponse) {
	// voter = message.content;
	localStorage.setItem("name", message.content);
});

var url = window.location.href;
localStorage.setItem("ele", url);
for (i = 0; i <= whiteList.length; i++) {
	var n = url.indexOf(whiteList[i]);
	if (n >= 0) {
		$("#mount_0_0").bind("DOMNodeInserted", function (event) {
			if (event.type == "DOMNodeInserted") {
				$(
					".a8nywdso.e5nlhep0.rz4wbd8a.ecm0bbzt.dhix69tm.oygrvhab.wkznzc2l.kvgmc6g5.k7cz35w2.jq4qci2q.j83agx80"
				).each(function () {
					if ($(this).children(".trueBtn").length) {
						return;
					} else {
						console.log(voter);
						$(this)
							.append(
								'<button class="trueBtn" style="margin-top:5px;  margin-left:5px; width:28%;  display: inline-block;padding: 5px 15px;font-size: 12px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: #fff;background-color: #4CAF50;border: none;" onclick="buttonFunction(\'' +
									ele +
									"','" +
									voter +
									"','" +
									1 +
									"')\" >此新聞可信</button>"
							)
							.append(
								'<button class="falseBtn" style="margin-top:5px;  margin-left:5px; width:28%;  display: inline-block;padding: 5px 15px;font-size: 12px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: #fff;background-color: #4CAF50;border: none;" onclick="buttonFunction(\'' +
									ele +
									"','" +
									voter +
									"','" +
									0 +
									"')\" >此新聞不可信</button>"
							);
						return false;
					}
				});
			}
		});
	}
}
