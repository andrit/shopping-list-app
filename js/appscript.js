$(document).ready(function() {
	var add = $(this).parent('.input-input').find('.add-item').val();
	$('.add-button').on('click', function(e){
        e.preventDefault();
        console.log("add button clicked");
 			
        $('.list-list').append('<button class="checked"><i class="fa fa-check fa-2x"></i></button>' +
                '<li><p class="list-item-name">' + add + '</p>' +
                '<button class="remove">X</button><p class="extend-list-item">More Info <i class="fa fa-chevron-down"></i></p></li>');
});

	$('#reset-button').on('click', function(){
		$('.list-list').find('.list-item').remove();
});

	$('.checked').on('click', function(){
		$(this).closest('.list-item').find('list-item-name').addClass("line-through");
});
	$('.remove').on('click', function(){
		$(this).closest(.list-item).remove();
	})



});