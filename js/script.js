$(document).ready(function() {
  $("#view_all").click(function(){
	$("#markup").addClass("expand");
})

  $("#collapse").click(function(){
	$("#markup").removeClass("expand");
})


function flash(){

	random = Math.round(Math.random()*51);
	color = Math.round(Math.random()*5);
	x = Math.round(Math.random()*4);


	// $("#header").clone().replaceWith('#shadow');
	// $("#shadow").replaceWith(	$("#header").clone());
	$("#header li").eq(random).css('color', 'rgba(255,255,255,.'+(color+4)+')');
	$("#shadow li").eq(random).css('color', 'rgba(0,0,0,.'+((color+4))+')');
	setTimeout(flash, 100); 

}

setTimeout(flash, 100); 


});




