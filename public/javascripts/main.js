$('body').on('click', '#loadGenButton', function (event) {
	$.get( '/loadgen', null, function(data) {
        	$('#results').html(data);
	});

});

$(function(){
 $('#search').on('keyup', function(e){
   if(e.keyCode === 13) {
     var parameters = { search: $(this).val() };
       $.get( '/searching',parameters, function(data) {
       $('#results').html(data);
     });
    };
 });
});

