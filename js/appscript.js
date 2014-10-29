$(document).ready(function() {
	console.log("add button clicked")
	$('.add-button').on('click', function(e){
        e.preventDefault();
        console.log("add button clicked")
        $(this).parent('.input-input').find('.add-item').val();
        
//put new items into DOM and on list
        $('.list-list').append('<button class="checked"><i class="fa fa-check fa-2x"></i></button>
                <p class="list-item-name">' + add + '</p>
                <button class="remove">X</button>');
});