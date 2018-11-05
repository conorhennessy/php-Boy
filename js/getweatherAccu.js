function Getweather() {
    GetWeatherCredentials(function() {
        var element = document.getElementById("weather");
        element.innerHTML = "";

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "http://dataservice.accuweather.com/forecasts/v1/daily/5day/328075?metric=true&details=true&apikey="+Weathercreds[0], true);
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var Weatherobj = JSON.parse(this.responseText)


                for(var i=0; i<Weatherobj.DailyForecasts.length; i++){
					var date =Weatherobj.DailyForecasts[i].Date
					var mintemp = Weatherobj.DailyForecasts[i].RealFeelTemperature.Minimum.Value
					var maxtemp = Weatherobj.DailyForecasts[i].RealFeelTemperature.Maximum.Value
					var iconphrase = Weatherobj.DailyForecasts[i].Day.IconPhrase
					console.log(date,Math.round(mintemp),Math.round(maxtemp),iconphrase)
					makeday(i,Math.round(mintemp),Math.round(maxtemp),iconphrase,12)
				}



            }
        }

        xmlhttp.send();
    });
}




function makeday(displaycount,mintemp,maxtemp,descrip,humidity){

	var daybox = document.createElement("div");
	daybox.className="weatherbox";
	
	var temppara = document.createElement("p");
	var temptext = document.createTextNode(mintemp);
	temppara.className="temp";
	temppara.appendChild(temptext);
	temppara.appendChild(document.createTextNode("°"));
	daybox.appendChild(temppara);
	
	var descrippara = document.createElement("p");
	var descriptext = document.createTextNode(descrip);
	descrippara.appendChild(descriptext);
	daybox.appendChild(descrippara);

	

	

	
	var element = document.getElementById("weather");
	element.appendChild(daybox);
	
}



	
Getweather();

var getweatherinterval= setInterval(Getweather,86400000)	//24 hours