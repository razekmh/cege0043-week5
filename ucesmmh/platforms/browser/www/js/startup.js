function loadW3HTML() {
	w3.includeHTML();
}

function trackAndCircle () {
	//trackLocation();
	addPointLinePoly();
	loadW3HTML();
}


function startup() {
	document.addEventListener('DOMContentLoaded', function() {
		trackAndCircle ();
		}, false);
	}

getPort()