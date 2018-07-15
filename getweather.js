var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "api.openweathermap.org/data/2.5/forecast?id=2652618&mode=json", false);
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var Weatherobj = JSON.parse(this.responseText)				
		
		
	}
};

xmlhttp.send();