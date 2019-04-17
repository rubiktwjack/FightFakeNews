// load some data
function doLoad(sender) {
  var Data;
  $.ajax({
    method: "GET",
    url: "https://ponder.cs.nccu.edu.tw:8080/all",
    success: function(a) {
      Data = a.data;
      console.log(Data);
      dataTable.data(Data, "username");
    },
    error: function(a) {
      console.log(a);
    }
  });
}

var s;
doLoad(s);
