//Form js
function formcheck(){
	//Changes the class of the form to was-validated to make it green or red depending on if it was filled in
	document.getElementById('form').setAttribute('class', 'was-validated two_col image_container');
}
function ctzshipCheck(){
	var ctzshipQuestion = document.getElementById('ctzship');
	var selectedOption = ctzshipQuestion.options[ctzshipQuestion.selectedIndex].text;
	console.log(selectedOption);
	if( selectedOption === "Annat" ){
	document.getElementById('hiddenInput').setAttribute('class', '');
	}
	else
	document.getElementById('hiddenInput').setAttribute('class', 'hideMe');
}