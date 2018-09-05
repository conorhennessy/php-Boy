window.onload = function(){
	refreshColchester();
	setInterval(function(){
		refreshColchester();
	}, 1000);
};





function refreshColchester(){
	console.log("ett");
	var busbox = document.getElementById("ToColchester");
	var nextTime = busbox.getElementsByClassName("otherTimes");
	
	
}