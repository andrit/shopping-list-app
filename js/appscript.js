$(document).ready(function() {
	var add = $(this).parent('.input-input').find('.add-item').val();
	$('.add-button').on('click', function(e){
        e.preventDefault();
        console.log("add button clicked")
 
        $('.list-list').append('<button class="checked"><i class="fa fa-check fa-2x"></i></button>' +
                '<p class="list-item-name">' + add + '</p>' +
                '<button class="remove">X</button>');
	});
		$('#reset-button').on('click', function(){
			console.log("reset button clicked");
			$('.list-list').child('li').remove();
	});
		$('.prod-add-more-info').on('click', function(){
			$(this).find('.input-slideout').show(slow);
	});
		$('.checked').on('click', function(){
			console.log("Check complete button clicked");
			$(this).closest('.list-item-name').addClass("line-through");
	});
		$('.remove').on('click', 'button', function(){
			$(this).closest('.list-item').remove();
	});
		$('.extend-list-item').on('click', function(){
			$(this).find('.more-info-slide-out').show(slow);
	});
});