$(document).ready(function() {

    $("#spinner").show();
    $("#card").hide();

    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1);
    var hash = hashes.split('=');

    if(hash[0] == 'c'){
      var staticId = hash[1];

      $.ajax({
        url:"https://beresid.com/GetCaller",
        type:"POST",
        data:'{"staticID":"'+staticId+'"}',
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        headers: {
          "Content-Type": "application/json"
        },
        success: function(data,status){
          $("#title").text(data.title);
          $("#desc").text(data.desc);

          jQuery.each( data.menu, function( i, val ) {

            if(val.items.length > 0){
              $('#cat').append( '<p id="category">' + val.name + '</p>' );
            
              jQuery.each( val.items, function( i, items ) {
              $('#cat').append( '<table><tr><td id="child-price"> ' + items.price + ' ت</td><td><table><tbody><tr><td id="child-title">' + items.name + '</td><td id="child-dot" rowspan="0"><span class="dot"></span></td></tr><tr><td id="child-sub">' + items.desc + '</td></tr></tbody></table></td></tr></table>' );
              });
            }

          });

          $("#spinner").hide();
          $("#card").show();

        },
        error: function(){
          window.location.replace("http://beresid.com/main");
        }
      });

    }else{
      window.location.replace("http://beresid.com/main");
    }

  });