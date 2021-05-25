//Responsiveness js

//function for making the yt vid have a fixed aspect ratio
function responsiveVid(){
	//Gets the width of the element with id 'video'
	var width = document.getElementById('video').getBoundingClientRect().width;
	//Calculation for aspect ratio
	var height = (width/16)*9;
	//Sets the height to the calculated value
	document.getElementById('video').style.height = height + "px";
}