$(document).ready(function() {
	var add = ($(this).parent('.input-input').find('.add-item').val();)
	$('.add-button').on('click', function(e){
        e.preventDefault();
        console.log("add button clicked")
 
        $('.list-list').append('<button class="checked"><i class="fa fa-check fa-2x"></i></button>
                <p class="list-item-name">' + add + '</p>
                <button class="remove">X</button>');
});