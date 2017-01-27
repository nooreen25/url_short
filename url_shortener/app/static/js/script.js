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
					if(data=="shorturl already exists"||"Not a valid url")
						$(".abc").html(data);
					
					else
						$(".abc").html("<a href="+data+">"+data+"</a>");
				}
		});
	});
})