var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://transportapi.com/v3/uk/bus/stop/1500IM2533/live.json?app_id=58108540&app_key=6129f04b28d157f30089c4ac0339fd8e", true);
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		//	document.write(this.status);
		var ToColOBJ = JSON.parse(this.responseText)				
		
		for(var bus in ToColOBJ.departures){			//each bus line
			
			var line=ToColOBJ.departures[bus][0].line;
			var timearr =[];
			for(time in ToColOBJ.departures[bus]){		//each coming time
				var time=ToColOBJ.departures[bus][time];
				timearr.push(tConvert(time.aimed_departure_time));
				
				
			}
			
			//document.write(timearr);
			
			makebusline(line,timearr);
			
		}
	}
	else{
		var errorpara = document.createElement("p");
		errorpara.appendChild(document.createTextNode("Error getting info"));
	}
};

xmlhttp.send();

function makebusline(line,timearr){
		var businfo = document.createElement("div");
		businfo.className="businfo";
		var busname = document.createElement("div");
		busname.className="busname";
		businfo.appendChild(busname);
		var busnametext = document.createTextNode(line)
		busname.appendChild(busnametext);
		
		
		for(var i=0; i <timearr.length;i++){
			
			var time = document.createElement("div");
			time.className="time";
			var timetext=document.createTextNode(timearr[i]);
			time.appendChild(timetext);
			businfo.appendChild(time);
			
		}
		
		
		
		
		var element = document.getElementById("bus");
		element.appendChild(businfo);
	
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