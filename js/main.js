// To hide the welcome modal when clicking the buttons
$(".hide-modal").click(function(){
  $("#welcome").attr("hidden", "true");
});

$(".enable-camera").click(function(){
	$("#welcome").attr("hidden", "true");
  $('.camera').toggleClass( 'show' );
});

