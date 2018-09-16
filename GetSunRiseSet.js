function getsunriseinfo(){
    var element = document.getElementById("sunriseTime");
    element.innerHTML="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "https://api.sunrise-sunset.org/json?lat=51.867654&lng=-0.955715&date=today", true);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var page = JSON.parse(this.responseText)

			var sunrise = page.results.sunrise;
			var sunset = page.results.sunset;

			printTime(sunrise,sunset);
		}
	};

	xmlhttp.send();
}

function printTime(sunrise,sunset){
	
	var element = document.getElementById("sunriseTime");
	

	var sundown = document.createElement("p");
	sundown.appendChild(document.createTextNode("sunrise "));
	sundown.appendChild(document.createTextNode(sunrise));
	sundown.appendChild(document.createTextNode(" |   sunset "));
	var uptext = document.createTextNode(sunset);
	sundown.appendChild(uptext);
	
	element.appendChild(sundown);

}

getsunriseinfo()

var sunriseinterval=setInterval(getsunriseinfo,43200000)	//12 hours