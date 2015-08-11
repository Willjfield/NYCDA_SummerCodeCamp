//this is a global value:
var z = 20;

function alertValue(){
	//this is a local value:
	var x = 10;
	alert("your value is "+x);
}

alertValue();
//This will give an error:
console.log(x);