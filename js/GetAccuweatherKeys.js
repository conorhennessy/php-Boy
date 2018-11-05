function GetWeatherCredentials(_callback)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "AccuweatherKeys.json", true);

    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var file= this.responseText
				
				Weathercreds =[]
				Weathercreds.push(file)

				//console.log(Weathercreds);

				_callback();
            }
        }
    }
    rawFile.send(null);
}


/*
function firstFunction(_callback){
    // do some asynchronous work
    // and when the asynchronous stuff is complete
    _callback();    
}

function secondFunction(){
    // call first function and pass in a callback function which
    // first function runs when it has completed
    firstFunction(function() {
        console.log('huzzah, I\'m done!');
    });    
}
*/


var Weathercreds=[]

