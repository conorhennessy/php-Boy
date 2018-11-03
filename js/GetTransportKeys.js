function GetTransportCredentials(_callback)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "transportKeys.json", true);

    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
			
            if(rawFile.status === 200 || rawFile.status == 0)
            {
				
                var file= JSON.parse(this.responseText)	
				
				creds =[]
				
				var arraynum=Math.floor(Math.random()*file.keys.length)
				
				//console.log(arraynum)
				creds.push(file.keys[arraynum].app);
				creds.push(file.keys[arraynum].key);
				//console.log(creds);
				
				
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


var creds=[]

