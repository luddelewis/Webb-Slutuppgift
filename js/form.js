//Form js
function formcheck(){
	//Changes the class of the form to was-validated to make it green or red depending on if it was filled in
	document.getElementById('form').setAttribute('class', 'was-validated two_col image_container');
}
function ctzshipCheck(){
	//Gets the dropdown menu and saves it as ctzship
	var ctzship = document.getElementById('ctzship');
	//Gets the text of the selected option
	var selectedOption = ctzship.options[ctzship.selectedIndex].text;
	if( selectedOption === "Annat" ){
		//unhides the hiddenInput div and makes it requierd
		document.getElementById('hiddenInput').setAttribute('class', 'form-group');
		document.getElementById('country').required=true;
	}
	else{
		//hides it and makes it not requierd
		document.getElementById('hiddenInput').setAttribute('class', 'form-group hideMe');
		document.getElementById('country').required=false;
	}
	
}