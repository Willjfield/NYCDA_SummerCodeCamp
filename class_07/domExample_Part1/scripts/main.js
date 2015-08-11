//When the document is ready
$('document').ready(function(){
	//Find the element that has the id "submission". Then take click events on that element.	
	$('#submission').click(
		//When it's clicked, preform the following function:
		function(){
			//log the value entered in username
			console.log($('#username').val());
		}
	)
});
