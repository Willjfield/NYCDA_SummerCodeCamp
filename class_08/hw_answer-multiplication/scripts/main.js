//When the document is ready
$('document').ready(function(){
	console.log("i'm loaded!");
	$('#submission').click(function(){
		var val=parseInt($('#variable1').val());
		console.log(val);
		var val2=parseInt($('#variable2').val());
		console.log(val2);
		var val3=parseInt($('#variable3').val());
		console.log(val3);

		console.log(val*val2*val3);
		$('#result').text(val*val2*val3);
		$('#myHTML').html("<a href='https://google.com'> Now I'm a link and your product was "+(val*val2*val3)+"</a>");
		$('#myHTML').css("background","rgb("+val+","+val2+","+val3+")");
	})
});
