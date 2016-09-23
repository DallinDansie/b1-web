$(document).ready(function() {

	$("p").hide();
	$("#favPic").hide();

	$("h1").click(function() {
		$(this).next().fadeToggle(700);

	});
	
	$("h2").click(function() {
		$(this).next().fadeToggle(700);

	});
	
	$("#favPic").click(function() {
		$(this).next().slideDown(1000);
	});
	
});
