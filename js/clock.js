
var dateobj = new Date()
//invokes functions as soon as window loads
window.onload = function(){
	time();
	meridian();
	whatDay();
	getdate();
	setInterval(function(){
		dateobj = new Date()
		time();
		meridian();
		whatDay();
		getdate();
	}, 1000);
};


//gets current time and changes html to reflect it
function time(){
	var	hours = dateobj.getHours(),
		minutes = dateobj.getMinutes(),
		seconds = dateobj.getSeconds();

	//make clock a 12 hour clock instead of 24 hour clock
	hours = (hours > 12) ? (hours - 12) : hours;
	hours = (hours === 0) ? 12 : hours;

	//invokes function to make sure number has at least two digits
	hours = addZero(hours);
	minutes = addZero(minutes);
	seconds = addZero(seconds);

	//changes the html to match results
	document.getElementsByClassName('hours')[0].innerHTML = hours;
	document.getElementsByClassName('minutes')[0].innerHTML = minutes;
	document.getElementsByClassName('seconds')[0].innerHTML = seconds;
}

//turns single digit numbers to two digit numbers by placing a zero in front
function addZero (val){
	return (val <= 9) ? ("0" + val) : val;
}

//lights up either am or pm on clock
function meridian(){
	var hours = dateobj.getHours();
	am = document.getElementsByClassName("am")[0].classList;
	pm = document.getElementsByClassName("pm")[0].classList;
	
	(hours >= 12) ? pm.add("light-on") : am.add("light-on");				//am
	(hours >= 12) ? am.remove("light-on") : pm.remove("light-on");           ///pm
}

function getdate(){

	element = document.getElementById("date")

	element.innerText=dateobj.getDate()
}


//lights up what day of the week it is
function whatDay(){
	var currentDay = dateobj.getDay();
	
	if(currentDay==-1){currentDay=6;}
	if(currentDay==0){currentDay=6}
	else{currentDay=currentDay-1;}
	
	var days = document.getElementsByClassName("day");
	//iterates through all divs with a class of "day"
	for (var x in days){
		//list of classes in current div
		var classArr = days[x].classList;
		
		(classArr !== undefined) && ((x == currentDay) ? classArr.add("light-on") : classArr.remove("light-on"));
	}
}