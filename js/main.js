// To hide the welcome modal when clicking the buttons
$(".hide-modal").click(function(){
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

