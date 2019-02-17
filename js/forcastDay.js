document.write(Arrayday());

function Arrayday(){
	
	var Dayarray=[];
	Dayarray.push(0);

	var date = new Date(),
	hours = date.getHours();
		var tmoz9=33-hours;
		Dayarray.push(Math.round(tmoz9/3));		//tmoz  at 9am
		
		Dayarray.push(Math.round((tmoz9+8)/3));	//tmoz at 5pm
		
		Dayarray.push(Math.round((tmoz9+24)/3)); //next day at 9am
		
		Dayarray.push(Math.round((tmoz9+32)/3)); ///next day at 5pm
		
		
		return Dayarray;
}