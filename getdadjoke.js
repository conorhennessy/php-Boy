var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://www.reddit.com/r/dadjokes/hot.json", true);
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

function printjoke(title,selftext,author){
	var jokebox = document.createElement("div");
	jokebox.className="joke";
	
	var titleelm = document.createElement("p");
	var titletext = document.createTextNode(title);
	titletext.className="joketitle";
	titleelm.appendChild(titletext);
	jokebox.appendChild(titleelm);
	
	var selftextelm = document.createElement("p");
	var selftexttext = document.createTextNode(selftext);
	selftextelm.className="jokeselftext";
	selftextelm.appendChild(selftexttext);
	jokebox.appendChild(selftextelm);
	
	var authorelem = document.createElement("p");
	var authortext = document.createTextNode(author);
	authorelem.className="jokeauthor";
	authorelem.appendChild(authortext);
	jokebox.appendChild(authorelem);
	
	var element = document.getElementById("joke");
	element.appendChild(jokebox);
}