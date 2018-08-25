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
    // Show what this weeks collection is...
    weekStyle = document.getElementsByClassName("week")[0].classList;
    if (week == "green") {
        document.getElementsByClassName("week")[0].innerHTML = "green week";
        document.getElementsByClassName("items")[0].innerHTML = "rubbish, glass & metal";
        weekStyle.add("green-week");  //make it green
    }
    else {
        document.getElementsByClassName("week")[0].innerHTML = "blue week";
        document.getElementsByClassName("items")[0].innerHTML = "paper & plastics";
        weekStyle.add("blue-week");   //make it blue   ooooh
    }

    var n = date.getDay();

    if (n == 2) {
        document.getElementsByClassName("prompt")[0].innerHTML = "It's collection day tomorrow!";
    }
    if (n == 3) {
        document.getElementsByClassName("prompt")[0].innerHTML = "It's collection day today!";
    }
}

var date = new Date();
var weeknum = getWeekNumber(date);

//odd is green, even is blue
if(weeknum % 2 == 0){
    //Blue = rubbish, glass, metal
    PrintCollection(date, "blue");
}
else{
    //Green = paper, plastics
    PrintCollection(date, "green");
}
