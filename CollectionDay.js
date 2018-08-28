function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
}


function PrintCollection(date, week) {
	//document.getElementsByClassName("title")[0].innerHTML = "RUBBISH COLLECTION";
    // Show what this weeks collection is...
    weekStyle = document.getElementsByClassName("week")[0].classList;
    document.getElementsByClassName("week")[0].innerHTML = week + " week";
    if (week == "green") {
        document.getElementsByClassName("items")[0].innerHTML = "rubbish, glass & metal";
        weekStyle.add("green-week");  //make it green
    }
    else {
        document.getElementsByClassName("items")[0].innerHTML = "paper & plastics";
        weekStyle.add("blue-week");   //make it blue   ooooh
    }

    //  Show prompt before and on collection days
    var day = date.getDay();

    if (day == 2) {
        document.getElementsByClassName("prompt")[0].innerHTML = "It's collection day tomorrow!";
    }
    if (day == 3) {
        document.getElementsByClassName("prompt")[0].innerHTML = "It's collection day today!";
    }
}

var date = new Date();
var weeknum = getWeekNumber(date);
var day = date.getDay();

//odd is green, even is blue
if (day == 2 || day == 3){
	if(weeknum % 2 == 0){
		//Blue = rubbish, glass, metal
		PrintCollection(date, "blue");
	}
	else{
		//Green = paper, plastics
		PrintCollection(date, "green");
	}
}
else {
	collectionBox = document.getElementsByClassName("collection")[0].classList;
	collectionBox.remove("bordered");
}
