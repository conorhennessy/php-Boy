var date = new Date(),
currentDay = date.getDay();
document.write("Original: "+currentDay);

if (currentDay == 1) { 
	currentDay = 0; 
} else if (currentDay == 0) {
	currentDay = 6;
} else { 
	currentDay = currentDay - 1;
}

document.write("    New: "+currentDay);
