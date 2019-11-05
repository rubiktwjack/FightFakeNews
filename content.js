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


var whiteList = ["/ETtoday", "/YahooTWNews", "/appledaily.tw", "/djy.news", "/myudn", "/CTfans", "/m.ltn.tw", "/bbcnewstrad", "/TheNewsLens", "/edn168", "/pnnpts", "/nownews"]

// first post
$(".mbm").each(function () {
  // find username
  var voter = $("._cy6")
    .find("._1k67")
    .find("a")
    .attr("href");

  // get post url
  var ele = $(this).find("div._5pcr").find("a._3hg-._42ft").attr("href") || "null"

  if (ele) {
    for (i = 0; i <= whiteList.length; i++) {
      var n = ele.indexOf(whiteList[i]);
      if (n >= 0) {
        console.log("貼文網址 : " + ele);
        // append true button
        $(this)
          .find("._3vuz")
          .append(
            '<button id="true-button"   style="margin-top:5px;  margin-left:5px; width:28%;  display: inline-block;padding: 5px 15px;font-size: 12px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: #fff;background-color: #4CAF50;border: none;"  class="true-button" onclick="buttonFunction(\'' +
            ele +
            "','" +
            voter +
            "','" +
            1 +
            "')\" >此新聞可信</button>"
          );

        // append false button
        $(this)
          .find("._3vuz")
          .append(
            '<button id="false-button"  style="margin-top:5px;  margin-left:5px; width:28%;  display: inline-block;padding: 5px 15px;font-size: 12px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: #fff;background-color: #4CAF50;border: none;"  class="false-button" onclick="buttonFunction(\'' +
            ele +
            "','" +
            voter +
            "','" +
            0 +
            "')\" >此新聞值得懷疑</button>"
          );
        break;
      }
    }
  }
});

// other post
$("body").on("DOMNodeInserted", function (e) {
  //inserted element;
  var target = e.target;

  if ($(e.target).hasClass("mbm")) {
    // find username
    var voter = $("._cy6")
      .find("._1k67")
      .find("a")
      .attr("href");

    // 因為動態載入留言數量，因此setTimeout
    setTimeout(() => {
      // get post url
      var ele = $(target).find("div._5pcr").find("a._3hg-._42ft").attr("href") || "null"

      if (ele) {
        for (i = 0; i <= whiteList.length; i++) {
          var n = ele.indexOf(whiteList[i]);
          if (n >= 0) {
            console.log("貼文網址 : " + ele);
            // 因為動態載入post，因此setTimeout
            setTimeout(() => {
              // append true button
              $(target)
                .find("._3vuz")
                .append(
                  '<button id="true-button"   style="margin-top:5px;  margin-left:5px; width:28%;  display: inline-block;padding: 5px 15px;font-size: 12px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: #fff;background-color: #4CAF50;border: none;"  class="true-button" onclick="buttonFunction(\'' +
                  ele +
                  "','" +
                  voter +
                  "','" +
                  1 +
                  "')\" >此新聞可信</button>"
                );

              // append false button
              $(target)
                .find("._3vuz")
                .append(
                  '<button id="false-button"  style="margin-top:5px;  margin-left:5px; width:28%;  display: inline-block;padding: 5px 15px;font-size: 12px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: #fff;background-color: #4CAF50;border: none;"  class="false-button" onclick="buttonFunction(\'' +
                  ele +
                  "','" +
                  voter +
                  "','" +
                  0 +
                  "')\" >此新聞值得懷疑</button>"
                );
            });
            break;
          }
        }
      }
    }, 500);
  }
});