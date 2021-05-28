//Responsiveness js

//function for making the iframes vid have a fixed aspect ratio
function keepAspect(){
	//Gets the width of the element with id 'keepAspect'
	var width = document.getElementById('keepAspect').getBoundingClientRect().width;
	//Calculation for aspect ratio 
	var newHeight = (width/16)*9;
	//Sets the height to the calculated value
	document.getElementById('keepAspect').style.height = newHeight + "px";	
}