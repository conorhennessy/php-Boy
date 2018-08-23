///make request for the weather over the next 4.5 ish days in 3 hour intervals. 
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=2652618&APPID=77d556c4a3afa89eb1b61a0a836a40c6", true);
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var Weatherobj = JSON.parse(this.responseText)				
		
		
			var temp0 = Math.round(Weatherobj.list[0].main.temp-273.15);
			var temp1 = Math.round(Weatherobj.list[8].main.temp-273.15);
			var temp2 = Math.round(Weatherobj.list[16].main.temp-273.15);
			var temp3 = Math.round(Weatherobj.list[24].main.temp-273.15);
			var temp4 = Math.round(Weatherobj.list[32].main.temp-273.15);
			
			var weather0=Weatherobj.list[0].weather[0].main;
			var weather1=Weatherobj.list[1].weather[0].main;
			var weather2=Weatherobj.list[2].weather[0].main;
			var weather3=Weatherobj.list[3].weather[0].main;
			var weather4=Weatherobj.list[4].weather[0].main;
			
			var humidity0=Weatherobj.list[0].main.humidity;
			var humidity1=Weatherobj.list[1].main.humidity;
			var humidity2=Weatherobj.list[2].main.humidity;
			var humidity3=Weatherobj.list[3].main.humidity;
			var humidity4=Weatherobj.list[4].main.humidity;
			
			makeday(temp0,weather0,humidity0);
			makeday(temp1,weather1,humidity1);
			makeday(temp2,weather2,humidity2);
			makeday(temp3,weather3,humidity3);
			makeday(temp4,weather4,humidity4);
		
	}
};

xmlhttp.send();


function makeday(temp,descrip,humidity){

	var daybox = document.createElement("div");
	daybox.className="weatherbox";
	
	var temppara = document.createElement("p");
	var temptext = document.createTextNode(temp);
	temppara.className="temp";
	temppara.appendChild(temptext);
	temppara.appendChild(document.createTextNode("°"));
	daybox.appendChild(temppara);
	
	var descrippara = document.createElement("p");
	var descriptext = document.createTextNode(descrip);
	descrippara.appendChild(descriptext);
	daybox.appendChild(descrippara);

	
	var Humiditydiv = document.createElement("div");
	Humiditydiv.appendChild(document.createTextNode(humidity+"%"));
	daybox.appendChild(Humiditydiv);

	
	var element = document.getElementById("weather");
	element.appendChild(daybox);
}