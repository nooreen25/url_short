$(document).ready(function(){
	$("#shorten").click(function(){
		var longurl=$(".longurl").val();
		var shorturl=$(".shorturl").val();
		if(longurl==""||shorturl=="")
			 alert("Invalid URL");
        
        else
		
			$.ajax({
				type:'POST',
				headers: {
      				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
   						},
				url: "/shorten",
				data: {
   						'long_url':longurl,
   						'short_url':shorturl,
   						},
				success: function(data){
				
					$(".abc").html();
				}
		});
	});
})