$(document).ready(function() {

	$.getJSON("flu/data.json", function(data){	
		$.each(data.weeks, function(i){
			$('#week').clone().attr( 'id', 'week_' + i ).appendTo('#container');
			$("#week_"+i+" h2").html(this);	
		});
	
		$.each(data.states,function(i){
			$.each(data.states[i].values,function(x){
				$("#week_"+x+" li[data-state='"+data.states[i].state+"']").addClass(""+this+"");			
			});
		});
	
		$("#loader").fadeOut();
	
	});
	
});
