var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://www.reddit.com/r/aww/rising.json", true);
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var page = JSON.parse(this.responseText)			
		
		
		top=0;
		var title="";
		var imglink;
		for(var post in page.data.children){
			var score=page.data.children[post].data.score;
			if(score>top){
				top=score
				title=page.data.children[post].data.title;
				//imglink=JSON.stringify(page.data.children[post].data);
				
				author=page.data.children[post].data.author;
			}
			
		}
		
		addimage(title,imglink,author)
		
	}
};

xmlhttp.send();

function addimage(title,imglink,author){
	
	var element = document.getElementById("awwpane");
	
	var container =document.createElement("div");
	
	
	var txt = document.createTextNode(title);
	container.appendChild(txt);
	container.className ="awwbox";
	
	//document.write(imglink)
	
	var awwpic = document.createElement("img");
	awwpic.src=imglink;
	
	container.appendChild(awwpic);
	
	element.appendChild(container);
	
	
}