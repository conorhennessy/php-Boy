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




	var namelinkEle = document.createElement("a");
	namelinkEle.setAttribute("href",vals[3])

	if(vals[1].length==3){}

	else
    {
        namelinkEle.innerHTML = vals[2].substr(0, 46) + " "
    }
	var name = document.createElement("p");

	name.className="torrent_name"
	name.appendChild(namelinkEle)
	//name.appendChild(nameval);
	
	
	var seeds = document.createElement("p");
	var seedval = document.createTextNode(vals[1]);
	seeds.appendChild(seedval);
	seeds.style.display="inline";
	seeds.style.padding="5px";
	
	var type = document.createElement("p");
	var typetext = document.createTextNode(PadEnd(vals[0],5));
	type.appendChild(typetext);
	type.style.display="inline";
	type.style.padding="5px";


	if(vals[0]==="movie"){
		type.style.color="#589EA5";
	}
	if(vals[0]==="game"){
		type.style.color="#ffbd7b";
	}
	if(vals[0]==="tv"){
		type.style.color="#6ec2b1";
	}
    if(vals[0]==="app"){
        type.style.color="#7BBDFF";
    }
    if(vals[0]==="music"){
        type.style.color="#FF7B7B";
    }
    if(vals[0]==="anime"){
    	type.style.color="#ED6B00";
	}
	
	
	element.appendChild(name);
	element.appendChild(seeds);
	element.appendChild(type);
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