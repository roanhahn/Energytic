$(document).ready(function() {

	// replace html code
	// $( "docs-code" ).html();
	// alert("blaat");
	$( ".docs-code" ).click(function() {
		var htmlString = $( this ).html();
		$( this ).text( htmlString );
	});


	// Harmonica

	$(".accordion-header").click(function() 
	{
		$(".accordion-content").hide();
		$(".accordion-item").removeClass("accordion-item--active");
		$(this).parent().find(".accordion-content").slideToggle(300);
		$(this).parent().addClass("accordion-item--active");
	});

	// Tooltip
	$('[data-toggle="tooltip"]').tooltip()



	

});


