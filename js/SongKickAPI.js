function GetNextMonth(){
	
	GetAPIKey(function(){
		
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "https://api.songkick.com/api/3.0/users/alex-hockly/calendar.json?reason=tracked_artist&apikey=vFJgueGeeIk9C2rV", true);
		//https://www.songkick.com/developer/upcoming-events-for-metro-area   
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				
				var json = JSON.parse(this.responseText);
				var events = json.resultsPage.results.event;
				var lastDate="";
				var count=0
				for(event in events){
					if(count>26){break}
					var eventobj = events[event];
					if(eventobj.type=="festival"){
						continue;
					}
					
					var artist = eventobj.performance[0].artist.displayName;
					var venue = eventobj.venue.displayName;
					var date = eventobj.start.date;
					
					if(date!=lastDate){		//if date changes print a new header
						printDate(date);
					}
					
					printEvent(artist,venue,date);
					//console.log(artist,"@",venue,"on",date);
					lastDate=date;
					count++
				}


			}
		};

	xmlhttp.send();
	
	})
}

function printEvent(artist,venue,date){
	var targetDiv = document.getElementById("LiveMusic");
	var artistDiv = document.createElement("div");
	artistDiv.innerHTML=artist+" @ "+venue;
	//var venueDiv = document.createElement("div");
	//venueDiv.innerHTML=venue;
	var dateDiv = document.createElement("div");
	dateDiv.innerHTML=date
	
	targetDiv.appendChild(artistDiv);
	//targetDiv.appendChild(venueDiv);
	//targetDiv.appendChild(dateDiv);
	
}

function printDate(date){
	console.log(date);
	//var textDate= new Date(date).toString().split(" ");
	var textDate=date.split("-")[2];	
	textDate+=" "+getMonthName(date.split("-")[1]);
	textDate+=" "+date.split("-")[0];
	//console.log(textDate);
	var targetDiv = document.getElementById("LiveMusic");
	var DateHeader = document.createElement("div");
	DateHeader.className="MusicDate";
	DateHeader.innerHTML=textDate;
	targetDiv.appendChild(DateHeader);
	
}

function getMonthName(monthNum){
    var month = new Array();
    month[1] = "January";
    month[2] = "February";
    month[3] = "March";
    month[4] = "April";
    month[5] = "May";
    month[6] = "June";
    month[7] = "July";
    month[8] = "August";
    month[9] = "September";
    month[10] = "October";
    month[11] = "November";
    month[12] = "December";
   
    return month[parseInt(monthNum)];
}

function StartOfNextMonth(){
	var date = new Date();
	var nextmonth=parseInt(date.getMonth())+2;	//plus 2 because js counts months from 0 (and songkick does not)
	console.log(nextmonth);
	nextmonth = ("0" + nextmonth).slice(-2);  //make sure month is two digits
	var min_date = date.getFullYear()+"-"+nextmonth+"-"+"01";
	console.log(min_date);
	return min_date;
}

function EndOfNextMonth(){
  var date = new Date();
  var nextmonth=date.getMonth()+2	;
  nextmonthpadded = ("0" + nextmonth).slice(-2);  //make sure month is two digits
  var max_date = date.getFullYear()+"-"+nextmonthpadded+"-"+daysInMonth(nextmonth,date.getFullYear());
  return max_date;
}
    
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}


function GetAPIKey(_callback){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "SongKickKey.json", true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
			
            if(rawFile.status === 200 || rawFile.status == 0)
            {
				
                Key= this.responseText;
				_callback();
				
            }
        }
    }
    rawFile.send(null);
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var Key=""




GetNextMonth();