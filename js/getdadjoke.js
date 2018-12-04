function GetJoke(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://www.reddit.com/r/dadjokes/rising.json", true);
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var Risingjokes = JSON.parse(this.responseText)			
		
		var subelem = document.createElement("p");
		subelem.className="subreddit";
		var subname = document.createTextNode(Risingjokes.data.children[0].data.subreddit); 
		subelem.appendChild(document.createTextNode("r/"));
		subelem.appendChild(subname);
		
		var element = document.getElementById("joke");
		element.appendChild(subelem);
		
		var top=0;
		var title="";
		var selftext="";
		for(var post in Risingjokes.data.children){
			var score=Risingjokes.data.children[post].data.score;
			if(score>top){
				top=score
				title=Risingjokes.data.children[post].data.title;
				selftext=Risingjokes.data.children[post].data.selftext;
				author=Risingjokes.data.children[post].data.author;
			}
			
		}
		printjoke(title,selftext,author);
		
		
	}
};

xmlhttp.send();
}

function printjoke(title,selftext,author){
    var element = document.getElementById("joke");
    element.innerHTML="";

	var jokebox = document.createElement("div");
	jokebox.className="joke";

	var subname = document.createElement("p")
	subname.className="subreddit"
	subname.innerText="r/dadjokes"
	jokebox.appendChild(subname)

	var titleelm = document.createElement("p");
	titleelm.innerText=title
	jokebox.appendChild(titleelm);

	var selftextelm = document.createElement("p");
	selftextelm.className="jokeselftext";
	selftextelm.innerText=selftext
	jokebox.appendChild(selftextelm);
	
	var authorelem = document.createElement("p");
	authorelem.className="jokeauthor";
	authorelem.innerText="u/"+author
	jokebox.appendChild(authorelem);
	

	element.appendChild(jokebox);
}

GetJoke();

var getjokeinterval=setInterval(GetJoke,300000)