function readTextFile()
{
    var element = document.getElementById("torrentspane");
    element.innerHTML="";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "zooqletopseeds.txt", true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var lines = allText.split(/\r?\n/);
				lines.splice(-8,8);			//shorten by 8
				var i;
				for(i=0; i<lines.length-5; i++){
					PrintTorrent(lines[i]);
				}
            }
        }
    }
    rawFile.send(null);
}


function PrintTorrent(line){
	if(line==""){return 0;}
	var element = document.getElementById("torrentspane");

	var vals = line.split(",");
	
	var type = document.createElement("p");								//terrible variable names
	var typeval = document.createTextNode(vals[2].substr(0,46));
	type.style.display="inline";
	type.style.padding="5px";
	type.appendChild(typeval);
	
	
	var seeds = document.createElement("p");
	var seedval = document.createTextNode(vals[1]);
	seeds.appendChild(seedval);
	seeds.style.display="inline";
	seeds.style.padding="5px";
	
	var name = document.createElement("p");
	var nametext = document.createTextNode(PadEnd(vals[0],5));
	name.appendChild(nametext);
	name.style.display="inline";
	name.style.padding="5px";
	if(vals[0]==="movie"){
		name.style.color="#589EA5";
	}
	if(vals[0]==="game"){
		name.style.color="#ffbd7b";
	}
	if(vals[0]==="tv"){
		name.style.color="#6ec2b1";
	}
    if(vals[0]==="app"){
        name.style.color="#7BBDFF";
    }
    if(vals[0]==="music"){
        name.style.color="#FF7B7B";
    }
	
	
	element.appendChild(type);
	element.appendChild(seeds);
	element.appendChild(name);
	element.appendChild(document.createElement("br"));
}

function PadEnd(string,targetlen){
	while(string.length<targetlen){
		string=string+"_";
	}
	return string;
}

readTextFile();

var torrentRefresh= setInterval(readTextFile,7200000)		//2 hours