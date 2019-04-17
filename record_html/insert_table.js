// the data table itself
var dataTable = null;

jQuery(document).ready(function() {
  dataTable = jQuery("#dataTable").raytable({
    datasource: { data: [], keyfield: "username" },
    columns: [
      { field: "username", title: "User Name", sort: true },
      { field: "link", title: "Report Link", sort: true },
      { field: "credibility", title: "Credibility" },
      { field: "time_stamp", title: "Time Stamp", sort: true }
    ],
    pagesize: 15,
    maxPageButtons: 5,
    rowNumbers: true,
    rowClickHandler: rowAction
  });

  jQuery(".glyphicon").css("cursor", "pointer");

  // load some default
  //doLoad(jQuery("#dataTable"));
});

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

// row clicked handler
function rowAction(event) {
  // jquery to get the record ID back out
  //var id = jQuery(event.target).data('ray-key');
  alert("You clicked row " + event.data.rowIdx);
}
