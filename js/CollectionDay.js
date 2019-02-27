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
    element =document.getElementById("collection");

    element.innerHTML="<p class=\"title\"></p><p class=\"week\"></p><p class=\"items\"></p><p class=\"prompt\"></p>";

    weekStyle = document.getElementsByClassName("week")[0].classList;
    document.getElementsByClassName("week")[0].innerHTML = week + " week";
    if (week == "green") {
        document.getElementsByClassName("items")[0].innerHTML = "paper & plastics";
        weekStyle.add("green-week");  //make it green
    }
    else {
        document.getElementsByClassName("items")[0].innerHTML = "rubbish, glass & metal";
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

function getweekfromfile(_callback){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "collectionweek.json", true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {

            if(rawFile.status === 200 || rawFile.status == 0)
            {
                Week= this.responseText;
                console.log(Week)
                return _callback
                return Week
            }
        }
    }
    rawFile.send(null);

}

function displayCollection(){
    var date = new Date();
    var day = date.getDay();

    PrintCollection(date,Week);
    //odd is blue, even is green
    if (day == 2 || day == 3){
        PrintCollection(date,Week)
        //console.log("print")
    }

    else {
        collectionBox = document.getElementById("collection")
        collectionBox.innerHTML="";
        collectionBox.classList.remove("bordered");
    }
}


Week=""
getweekfromfile()
displayCollection()



var checkweek=setInterval(getweekfromfile,43200000)             //12 hours
var runcollections=setInterval(displayCollection,3600000)   //       43200000

