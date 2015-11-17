var additionalOptions = {
	timenav_position: 'top'
}

timeline = new TL.Timeline(
	'timeline-embed',
	'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml',
	additionalOptions
);

//hide timeline area on load
$(document).ready(function(){
	$('.tl-timenav').css('display', 'none');
	$('.tl-menubar').css('display', 'none');
});

//hide timeline area when we go back to start
timeline.on('back_to_start', function(data) {
   $('.tl-timenav').slideUp();
   $('.tl-menubar').slideUp();
});

//show timeline on any change event
timeline.on('change', function(data) {
   	$('.tl-timenav').slideDown();
   	$('.tl-menubar').slideDown();
});

timeline.on('change', function(data){
	if (data.unique_id == 'google-spreadsheet-example') {
		$('.tl-timenav').slideUp();
   		$('.tl-menubar').slideUp();
	}
});


