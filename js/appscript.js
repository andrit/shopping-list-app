$(document).ready(function() {
	var add = $(this).parent('.input-input').find('.add-item').text();
	$('.add-button').on('click', function(e){
        e.preventDefault();
        console.log("add button clicked");
 			
        $('.list-list').append('<li class="list-item"><button class="checked"><i class="fa fa-check fa-2x"></i></button>' +
                '<p class="list-item-name">' + add + '</p>' +
                '<button class="remove">X</button><p class="extend-list-item">More Info <i class="fa fa-chevron-down"></i></p></li>');
});

	$('#reset-button').on('click', function(){
		console.log("reset button clicked");
		$('.list-list').find('.list-item').remove();
});

	$('.checked').on('click', function(){
		console.log("checked button clicked");
		$(this).closest('.list-item').find('.list-item-name').addClass("line-through");
});
	$('.remove').on('click', function(){
		console.log("remove button clicked");
		$(this).closest('.list-item').remove();
	})



});