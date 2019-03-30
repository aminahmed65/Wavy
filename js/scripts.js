//This switches the Div from the Map to the Quiz (Next)
function switchDivToBottom(){
	document.getElementById('map').style.visibility = "hidden";
	document.getElementById('quizDiv').style.visibility = "visible";
}

//This switches the Div from the Quiz to the Map (Prev)
function switchDivToTop(){
	document.getElementById('quizDiv').style.visibility = "hidden";
	document.getElementById('map').style.visibility = "visible";
}

//Displays the Google Maps IFRAME when Activated
function fullMap(){
	document.getElementById('fullMap').style.opacity='1';
	document.getElementById('fullMap').style.visibility='visible';
	document.getElementById('hideFullMap').style.zIndex='99';
}

//Hides the Google Maps IFRAME when yopu click the sides
function hideFullMap(){
	document.getElementById('fullMap').style.opacity='0';
	document.getElementById('fullMap').style.visibility='hidden';
	document.getElementById('hideFullMap').style.zIndex='-11';
}