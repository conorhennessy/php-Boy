var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://transportapi.com/v3/uk/bus/stop/1500IM2533/live.json?app_id=58108540&app_key=6129f04b28d157f30089c4ac0339fd8e", true);
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var ToColOBJ = JSON.parse(this.responseText)				
		
		for(var bus in ToColOBJ.departures){			//each bus line
			
			var line=ToColOBJ.departures[bus][0].line;
			var timearr =[];
			for(time in ToColOBJ.departures[bus]){		//each coming time
				var time=ToColOBJ.departures[bus][time];
				timearr.push(time.aimed_departure_time);
				
				
			}
			
			//document.write(timearr);
			
			makebusline(line,timearr);
			
		}
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