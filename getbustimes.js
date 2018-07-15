var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "testjson.json", false);
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var ToColOBJ = JSON.parse(this.responseText)				
		
		var count=0;
		
		for(var bus in ToColOBJ.departures){
		
			var id="bus"+count;
			
			
			document.getElementById(id).innerHTML=bus;
		
			var time0=ToColOBJ.departures[bus][0].aimed_departure_time;
			document.getElementById(id+"time0").innerHTML=time0;
			var time1=ToColOBJ.departures[bus][1].aimed_departure_time;
			//var time2= ToColOBJ.departures[bus][2].aimed_departure_time;
			
			
			document.getElementById(id+"time1").innerHTML=time1;
		

			count++;
			
		
		document.write("<br>");
		}
	}
};

xmlhttp.send();