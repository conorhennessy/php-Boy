function getbusdata(stopID,target,lines){
	GetCredentials(function(){
		
		console.log("got keys "+creds)
		
		
	

	var xmlhttp = new XMLHttpRequest();
	var url = "https://transportapi.com/v3/uk/bus/stop/"+stopID+"/live.json?app_id="+creds[0]+"&app_key="+creds[1];
	xmlhttp.open("GET", url, true);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var BusDepartures = JSON.parse(this.responseText);
			
			
			var times =[];
			
			for(var i=0; i<=lines.length;i++){	
				line=lines[i]
				
				
				try{
					BusDepartures.departures[line].length;		//if this errors that means there are no times for this line;
				}
				catch(err){
					continue;
				}
				
					for(var i=0; i<BusDepartures.departures[line].length; i++){
						
						var time = BusDepartures.departures[line][i].expected_departure_time;
						if(time==null){
							time = BusDepartures.departures[line][i].aimed_departure_time;
						}
						times.push(time);
						
					}
			}
			
			if(times.length==0){
				var element=document.getElementById(target);
				element.appendChild(document.createTextNode("no more buses"));
				return 0;
			}
			
			
			
			PrintBusStop(times,target);
			
			
			
		}
		if(this.readyState==4 && this.status==403){
			var element=document.getElementById(target);
			element.appendChild(document.createTextNode("out of requests"));
		}
		
	};
	xmlhttp.send();
	
	
	});
	
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

function PrintBusStop(times,target){
	minsUntil=MinsUntilTime(times[0]);
	if(target=="ToColchester"){
		ColchesterNextTime=times[0];
	}
	if(target=="ToWivenhoe"){
		WivenhoeNextTime=times[0];
	}
	
	
	var next = document.createElement("div");
	var NextTime = document.createElement("p");
	NextTime.className="NextBusNum";
	NextTime.style.display="inline";
	if(minsUntil>0){
	NextTime.appendChild(document.createTextNode(minsUntil));
	}

	next.appendChild(NextTime);
	
	var mins = document.createElement("p");
	mins.className="NextbusMins";
	mins.style.display="inline";
	if(minsUntil>0){
	mins.appendChild(document.createTextNode("mins"));
	}
	else{
		mins.appendChild(document.createTextNode("Due"));
	}
	next.appendChild(mins);
	
	var otherTimes = document.createElement("div");
	for(var i=0; i<times.length;i++){
		var timepara=document.createElement("p");
		timepara.className="otherTimes";
		timepara.style.display="inline";
		if(times[i]!=null){
		timepara.appendChild(document.createTextNode(times[i]));
		}
		otherTimes.appendChild(timepara);
	}
	
	
	var element = document.getElementById(target);
	element.appendChild(next);
	element.appendChild(otherTimes);
	
	
	
}



function tConvert (time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    //time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}





var ColchesterNextTime;
var WivenhoeNextTime;

getbusdata("1500IM2533", "ToColchester",["62","62B"]);
getbusdata("150032002012","ToWivenhoe",["61"]);



