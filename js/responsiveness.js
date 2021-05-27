//Responsiveness js

//function for making the yt vid have a fixed aspect ratio
function keepAspect(){
	//Gets the width of the element with id 'video'
	var width = document.getElementById('keepAspect').getBoundingClientRect().width;
	//Calculation for aspect ratio
	var height = (width/16)*9;
	//Sets the height to the calculated value
	document.getElementById('keepAspect').style.height = height + "px";
}