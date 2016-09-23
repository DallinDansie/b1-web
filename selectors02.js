$(document).ready(function() {

	$("#buttonpic").hide();
	$("#testbutton").click(function() {

		$("#buttonpic").fadeToggle(500);

		/*
		 $("#selector02").css("background-color", "red");
		 $("h3, #testbutton").css("background-color", "red");
		 $("*").css("background-color", "red");
		 */

	});
	
	$("#aboutmebutton").click(function(){
		
		$("#aboutmeinfo").fadeToggle(500);
	});
});
