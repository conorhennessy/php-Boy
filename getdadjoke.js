var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://www.reddit.com/r/dadjokes/hot.json", true);
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var Risingjokes = JSON.parse(this.responseText)			
		
		var top=0;
		var title="";
		var selftext="";
		for(var post in Risingjokes.data.children){
			var score=Risingjokes.data.children[post].data.score;
			if(score>top){
				top=score
				title=Risingjokes.data.children[post].data.title;
				selftext=Risingjokes.data.children[post].data.selftext;
			}
			
		}
		printjoke(title,selftext);
		
		
	}
};

xmlhttp.send();

function printjoke(title,selftext){
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
	
	var element = document.getElementById("joke");
	element.appendChild(jokebox);
}