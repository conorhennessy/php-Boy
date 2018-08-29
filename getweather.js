///make request for the weather over the next 4.5 ish days in 3 hour intervals. 
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=2652618&APPID=77d556c4a3afa89eb1b61a0a836a40c6", true);
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var Weatherobj = JSON.parse(this.responseText)				
			
			var days = Arrayday();
		
			var temp0 = Math.round(Weatherobj.list[days[0]].main.temp-273.15);
			var temp1 = Math.round(Weatherobj.list[days[1]].main.temp-273.15);
			var temp2 = Math.round(Weatherobj.list[days[2]].main.temp-273.15);
			var temp3 = Math.round(Weatherobj.list[days[3]].main.temp-273.15);
			var temp4 = Math.round(Weatherobj.list[days[4]].main.temp-273.15);
			
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
			
			makeday(0,temp0,weather0,humidity0);
			makeday(1,temp1,weather1,humidity1);
			makeday(2,temp2,weather2,humidity2);
			makeday(3,temp3,weather3,humidity3);
			makeday(4,temp4,weather4,humidity4);
		
	}
};

xmlhttp.send();


function Arrayday(){
	
	var Dayarray=[];
	Dayarray.push(0);

	var date = new Date(),
	hours = date.getHours();
		var tmoz9=33-hours;
		Dayarray.push(Math.round(tmoz9/3));		//tmoz at 9am
		
		Dayarray.push(Math.round((tmoz9+8)/3));	//tmoz at 5pm
		
		Dayarray.push(Math.round((tmoz9+24)/3)); //next day at 9am
		
		Dayarray.push(Math.round((tmoz9+32)/3)); ///next day at 5pm
		
		
		return Dayarray;
}

function makeday(displaycount,temp,descrip,humidity){

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

	
	if(displaycount==0){
		daybox.appendChild(document.createTextNode("Now"));
	}
	if(displaycount==1){
		daybox.appendChild(document.createTextNode("9am tmoz"));
	}
	if(displaycount==2){
		daybox.appendChild(document.createTextNode("5pm tmoz"));
	}
	if(displaycount==3){
		daybox.appendChild(document.createTextNode("9am "+ShortDayPlusn(2)));
	}
	if(displaycount==4){
		daybox.appendChild(document.createTextNode("5pm "+ShortDayPlusn(2)));
	}
	
	
	var element = document.getElementById("weather");
	element.appendChild(daybox);
	
}


function ShortDayPlusn(n){
	var d = new Date();
	var Dayint = d.getDay();
	var num=Dayint+n;
	var day="";
	
	switch (num) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
		case 7:
			day = "Sunday";
			break;
		case 8:
			day = "Monday";		
	}
	
	return day;
}
	
