chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if(request.todo =="showPageAction"){
    console.log("wwww");
    chrome.tabs.query({active:true,currentWindow: true},function(tabs){
    chrome.pageAction.show(tabs[0].id);
    });
  }
});

chrome.runtime.onConnectExternal.addListener(function(port) {
  port.onMessage.addListener(function(info) {
    console.log(info);
    //console.log(voter);
    $.ajax({
      method: 'POST',
      url: "https://ponder.cs.nccu.edu.tw:8080/record",
      data: info,
        success: function(a, b, c) {
          console.log(a);
          console.log(b);
          console.log(c);
        },
        error:  function(a, b, c) {
          console.log(a);
          console.log(b);
          console.log(c);
        }

    });

  });
});


