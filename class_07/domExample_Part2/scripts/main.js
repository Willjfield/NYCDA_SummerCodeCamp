//When the document is ready
$('document').ready(function(){
	//Find the element that has the id "submission". Then take click events on that element.	
	$('#submission').click(
		//When it's clicked, preform the following function:
		function(){
			//find the value in the box with the id "username" and store it as a value callex submitted
			var submitted=$('#username').val();
			//change the text of the div to the value stored in the variable called submitted
			$('#submittedText').text(submitted);
		}
	)
});
