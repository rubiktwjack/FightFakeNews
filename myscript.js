var port = "";

function extensionConnect(extensionId) {
  //console.log(extensionId);
  port = chrome.runtime.connect(extensionId);
}

function buttonFunction(e, voter, status) {
  myDate = new Date().toString();

  alert(
    "使用者:" +
      voter +
      "\n投票文章連結:" +
      "www.facebook.com" +
      e +
      "\n感謝您的投票!!"
  );
  //$(".vote-button").attr( "disabled", "disabled" );
  //$(".vote-button").attr( "disabled", "disabled" );
  //document.getElementById("vote-button").css( "color", "red" );
  //console.log(document.getElementById("vote-button").value);
  console.log("clicked!");
  console.log(e);
  console.log(voter);
  console.log(status);
  console.log(myDate);
  var info = {
    username: voter,
    link: e,
    credibility: status,
    date: myDate
  };
  port.postMessage(info);
}
// FB那邊的
