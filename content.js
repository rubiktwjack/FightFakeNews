var script = document.createElement("script");
script.onload = function() {
  setTimeout(function() {
    let id = chrome.runtime.id;
    // console.log(id);
    location.href = `javascript:extensionConnect("${id}"); void 0`;
  }, 1000);
};
script.type = "text/javascript";
script.src = chrome.extension.getURL("myscript.js");
document.getElementsByTagName("head")[0].appendChild(script);
chrome.runtime.sendMessage({
  todo: "showPageAction"
});
//find fbuser

$(".mbm").each(function() {
  var voter = $("._cy6")
    .find("._1k67")
    .find("a")
    .attr("href");

  //find('span.fwb.fcg') can find the post person
  var ele = $(this)
    .find("span.fsm.fwn.fcg")
    .find("a")
    .attr("href");

  if (ele) {
    $(this)
      .find("._3x-2")
      /*.find(".mtm")*/
      .append(
        '<button id="true-button"  style="margin-top:5px; margin-left:5px; width:48%;  display: inline-block;padding: 15px 25px;font-size: 24px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: #fff;background-color: #4CAF50;border: none;" disabled="true" class="true-button" onclick="buttonFunction(\'' +
          ele +
          "','" +
          voter +
          "','" +
          1 +
          '\')" ><span class="">此新聞可信</button>'
      );
    $(this)
      .find("._3x-2")
      /*.find(".mtm")*/
      .append(
        '<button id="false-button"  style="margin-top:5px; margin-left:5px;  width:48%;  display: inline-block;padding: 15px 25px;font-size: 24px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: #fff;background-color: #4CAF50;border: none;" disabled="true" class="false-button" onclick="buttonFunction(\'' +
          ele +
          "','" +
          voter +
          "','" +
          0 +
          '\')" ><span class="">此新聞值得懷疑</button>'
      );
  }
});

$("body").on("DOMNodeInserted", function(e) {
  var target = e.target; //inserted element;

  if ($(e.target).hasClass("mbm")) {
    var voter = $("._cy6")
      .find("._1k67")
      .find("a")
      .attr("href");

    var flag = 0;

    var ele = $(target)
      .find("span.fsm.fwn.fcg")
      .find("a")
      .attr("href");
    if (ele) {
      $(target)
        .find("._3x-2")
        /*.find(".mtm")*/
        .append(
          '<button id="true-button"  style="margin-top:5px;  margin-left:5px; width:48%;  display: inline-block;padding: 15px 25px;font-size: 24px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: #fff;background-color: #4CAF50;border: none;"  class="true-button" onclick="buttonFunction(\'' +
            ele +
            "','" +
            voter +
            "','" +
            1 +
            "')\" >此新聞可信</button>"
        );
      $(target)
        .find("._3x-2")
        /*.find(".mtm")*/
        .append(
          '<button id="false-button"  style="margin-top:5px;  margin-left:5px; width:48%;  display: inline-block;padding: 15px 25px;font-size: 24px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: #fff;background-color: #4CAF50;border: none;"  class="false-button" onclick="buttonFunction(\'' +
            ele +
            "','" +
            voter +
            "','" +
            0 +
            "')\" >此新聞值得懷疑</button>"
        );
    }
  }
});
