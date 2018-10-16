// var app = chrome.runtime.getBackgroundPage();

function hello() {
    chrome.tabs.executeScript({
      file: 'alert.js'
    }); 
  }
  //var ed= $('#eee').text();
  $( document ).ready(function() {
    
    
        //var red= $("#name").val();
        //console.log(red);
        $( "#login" ).click(function(e) {
            //e.stopPropagation();
            var loginPage = $('.loginPage').css('display');
            if(loginPage =='none'){
                $('.loginPage').show(); 
                $('.registerPage').hide(); 
            }
            var name= $("#name").val();
            var password= $("#password").val();

            //alert(name+"   "+password);
            $.ajax({
                'method': "POST",
                'url': "",
                'data': {
                    name: name,
                    password: password
                },
                success: function(a, b, c) {
                //console.log(a, b, c);
                },
                error: function(a, b, c) {
                //console.log(a, b, c);
                }
            });
          });
          $( "#register" ).click(function(e) {
            //e.stopPropagation();
            var registerPage = $('.registerPage').css('display');
            if(registerPage =='none'){
                $('.loginPage').hide(); 
                $('.registerPage').show(); 
            }
            

            //alert(name+"   "+password);
            
          });
          
        
    
  });
  