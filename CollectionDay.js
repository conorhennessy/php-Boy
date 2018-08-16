function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
}

function PrintCollections(week){
	element = document.getElementById("collections");
	div = document.createElement("div");
	
	
	if(week=="green"){
		div.appendChild(document.createTextNode("green week"));
	}
	else{
		div.appendChild(document.createTextNode("blue week"));
	}
	
	element.appendChild(div);
}

var date = new Date();
var n = date.getDay();

var weeknum = getWeekNumber(date);


//Im pretty sure its always a wednesday
if(n==3){
	
	//odd is green, even is blue
	if(weeknum%2==0){
		document.write("its a blue week");
		//rubbish, glass, metal
		PrintCollections("blue");
	}
	else{
		document.write("its a green week");
		//paper, plastics
		PrintCollections("green");
	}
}
