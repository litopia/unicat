// To hide the welcome modal when clicking BROWSE button
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
  // $("#cam-toggle .icon-camera").toggleClass("show");
	$("#welcome").attr("hidden", "true");
  $('.camera').toggleClass( 'show' );
});

