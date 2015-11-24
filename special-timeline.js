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

//hide on certain hardcoded ids
timeline.on('change', function(data){
	if (
		data.unique_id == 'google-spreadsheet-example' ||
		data.unique_id == 'another-flickr-example'
	){
		$('.tl-timenav').slideUp();
   	$('.tl-menubar').slideUp();
	} else {
		$('.tl-timenav').slideDown();
   	$('.tl-menubar').slideDown();
	}
});
