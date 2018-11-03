var run = setInterval(refreshTimes, 30000);



function refreshTimes(){
	//window.alert(ColchesterMinsUntil);
	try{
	var colchesterBox = document.getElementById("ToColchester");
	var timeLeftElem= colchesterBox.getElementsByClassName("NextBusNum");
	timeLeftElem[0].innerHTML=MinsUntilTime(ColchesterNextTime);
	
	}catch(err){
		console.log("colchester time recal failed")
	}
	
	try{
	var WivenhoeBox = document.getElementById("ToWivenhoe");
	var timeLeftElem= WivenhoeBox.getElementsByClassName("NextBusNum");
	timeLeftElem[0].innerHTML=MinsUntilTime(WivenhoeNextTime);
	
	}catch(err){
		console.log("wivenhoe time recal failed")
	}
	
}



function MinsUntilTime(time){
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var now = 60*hours + minutes;
	
	var nextbusHoursMins = time.split(":");
		
			
	var timeinMins = parseInt(nextbusHoursMins[0]*60) + parseInt(nextbusHoursMins[1],10);
	
	return timeinMins-now;
	
}