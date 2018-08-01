$(document).ready(()=>{

$(window).resize(function(){
	
	if($(this).width()<=550){
		$("body").html( "<img class='replaced_image' src='toggler.png' style='height:4%;width;10px'>" );
		event.preventDefault();
	}
	
	else if($(this).width() >= 500){
		
    // Removing table from DOM when window resized to above 500px
    //$( "#dynamicTable" ).remove();
	
	$(".navigation").appendTo("body");
	
  }
	
});



});