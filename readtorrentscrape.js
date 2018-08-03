function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var lines = allText.split(/\r?\n/);
				for(line in lines){
					PrintTorrent(lines[line]);
				}
            }
        }
    }
    rawFile.send(null);
}


function PrintTorrent(line){
	
	var torrentelm = document.createElement("p");
	var torrenttext = document.createTextNode(line);
	
	torrentelm.appendChild(torrenttext);
	
	var element = document.getElementById("torrentspane");
	element.appendChild(torrentelm);
}

readTextFile("zooqletopseeds.txt");	