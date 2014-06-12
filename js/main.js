
$(document).ready(function(){
  checkStreamAPI();
  $("#takePictureField").on("change",gotPic);
  desiredWidth = window.innerWidth;

    if(!("url" in window) && ("webkitURL" in window)) {
        window.URL = window.webkitURL;
    }
});


// To hide the welcome modal when clicking the buttons
$(".hide-modal").click(function(){
  $( "#welcome" ).animate({
    opacity: 0,
  }, 500, function() {
    $("#cam-toggle .icon-camera").removeAttr("hidden");
    $(this).attr('hidden', 'true');
  });
});
// To hide the welcome modal when clicking TAKE A PICTURE button
$(".enable-camera").click(function(){
  $( "#welcome" ).animate({
    opacity: 0,
  }, 500, function() {
    $("#cam-toggle .icon-camera").removeAttr("hidden");
    $(this).attr('hidden', 'true');
  });
});

$(".enable-camera").click(function(){
  // $("#cam-toggle .icon-camera").removeAttr("hidden");
  $("#welcome").attr("hidden", "true");
  $('.camera').toggleClass( 'show' );
});

//To toggle camera icon in the header
$('.test').click(function(){
  $( '.camera' ).toggleClass( 'show' );
});

//To check whether the browser support streamA API
function checkStreamAPI(){
  if(!!navigator.webkitGetUserMedia){
    console.log('webcamOnReady');
    $("input").hide();
  }else{
    console.log("webcamError");
    $("#cam-toggle").hide();
    $('#welcome').hide();
  }
}
//To prepend image element when uploading picture.
var prependImg = function(){
  $("#main").prepend("<figure class='content-image'><img id='preview'></figure>");
}

var gotPic = function(event) {
  prependImg();
  if(event.target.files.length == 1 &&
     event.target.files[0].type.indexOf("image/") == 0) {
      $("#preview").attr("src",URL.createObjectURL(event.target.files[0]));
  }
}


