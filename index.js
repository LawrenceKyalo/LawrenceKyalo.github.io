//to add javascript code
onload(){
	console.log("Ready");
}
 function getCurrentImage(){
 	if(date >= current_date){
		current_image = image.getByDate(lastDate);
	} else{
		current_image = image.getByDate(current_date);
	}
	 
	this.current_image = current_image;
	 return current_image;
 }

updateImage(){
	var current_image;
	var new_image;
	
	temp = this.get(current_image);
	new = this.get(new_image);
	
	temp.replace(new);
		     
	return new_image;
}

var dt = new Date();
var currentYr = dt.getFullYear();


 var currYr = new Date().getFullYear();
 document.getElementById("year").innerHTML = currYr;
 console.log(currYr);
	