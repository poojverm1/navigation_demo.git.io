$(document).ready(()=>{


  
$( window ).resize(function() {
  // Adding table when window resized to below 500px
  if($(this).width() <= 500){
  $("body").html( "<img class='replaced_image' src='toggler.png' style='height:4%;width;10px'>" );

  }
  
else if($(this).width() > 500){
    // Removing table from DOM when window resized to above 500px
    //$( "#dynamicTable" ).remove();
	
	$("body").appendTo($('lists'));
	
  }

});
});