var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://newsapi.org/v2/top-headlines?apiKey=b53911f46bfc455b80402bd8800dfa89&sortBy=publishedAt&sources=bbc-news", true);
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var page = JSON.parse(this.responseText)			
		
		
		var numResults=page.totalResults;
		
		var i;
		for (i = 0; i < numResults; i++) { 
			
			PrintNews(page.articles[i]);
			
		}
		
		
		
	}
};

xmlhttp.send();



function PrintNews(articleObject){
	
	var article = document.createElement("div");
	var title = document.createElement("p");
	var description = document.createElement("p");
	title.appendChild(document.createTextNode(articleObject.title));
	description.appendChild(document.createTextNode(articleObject.description));
	
	
	article.appendChild(title);
	article.appendChild(description);
	
	var element = document.getElementById("news");
	element.appendChild(article);
	
	element.appendChild(document.createElement("br"));
	
	
}