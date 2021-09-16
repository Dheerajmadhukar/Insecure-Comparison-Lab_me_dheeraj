$(document).ready(function() {
	//alert("Congratulations! You're a winner!!");
		$("#answer1").click(function() {
			$(this).remove();
		});
		$("#answer7").click(function() {
			$(this).remove();
		});
		$("#answer11").click(function() {
			$(this).remove();
		});
		$(".answer").click(function() {
			$(this).css('background-color', 'red');
			$(this).html("X");
		});
		$(".help").click(function() {
			$(this).clone("help").appendTo("#help");
		});
}); 