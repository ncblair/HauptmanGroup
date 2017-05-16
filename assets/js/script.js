/*
$(document).ready(function() {
	console.log("working");
	$(window).resize(function() {
		console.log("working");
        var bodywidth = $(this).width();
        $(".About").css("margin-right",50);
        console.log($(".About").paddingRight);
        if (true) {
        	$(".About").css("padding-right",bodywidth/3 - 300);
        }
    }).resize();
});
*/

$(document).ready(function() {
	console.log("working");
	$(window).resize(function() {
		console.log("working");
        var bodywidth = $(this).width();
        console.log($(".About").paddingRight);
        if (bodywidth > 800) {
        	$(".title").css("margin-right",bodywidth - 780);
        }
    }).resize();
});