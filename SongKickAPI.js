function GetNextMonth(){
	
	GetAPIKey(function(){
		
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "https://api.songkick.com/api/3.0/metro_areas/24426-uk-london/calendar.json?apikey="+Key+"&min_date="+StartOfNextMonth()+"&max_date="+EndOfNextMonth(), true);
		//https://www.songkick.com/developer/upcoming-events-for-metro-area   
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				
				var json = JSON.parse(this.responseText);
				var events = json.resultsPage.results.event;
				var lastDate="";
				for(event in events){
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
					console.log(artist,"@",venue,"on",date);
					lastDate=date;
				}
				

			}
		};

	xmlhttp.send();
	
	});
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
	var targetDiv = document.getElementById("LiveMusic");
	var DateHeader = document.createElement("div");
	DateHeader.className="MusicDate";
	DateHeader.innerHTML=date;
	targetDiv.appendChild(DateHeader);
	
}

function StartOfNextMonth(){
	var date = new Date();
	var nextmonth=date.getMonth()+2;
	nextmonth = ("0" + nextmonth).slice(-2);  //make sure month is two digits
	var min_date = date.getFullYear()+"-"+nextmonth+"-"+"01";
	return min_date;
}

function EndOfNextMonth(){
  var date = new Date();
  var nextmonth=date.getMonth()+2;
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


var Key=""

GetNextMonth();