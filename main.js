window.addEventListener("load",main);


function main(){
	var people =[];
	var table = document.createElement("table");
	for(i=0 ; i<50 ;i++){
		var person = {
			last:faker.fake("{{name.lastName}}"),
			first:faker.fake("{{name.firstName}}"),
			age:randRange(20,100),
			job:faker.fake("{{name.jobTitle}}"),
			tel:faker.fake("{{phone.phoneNumber}}"),
			adress:faker.fake("{{address.streetAddress}}")
		}
	people.push(person);
	}
	
	for(i=0;i<people.length;i++){
		var line=document.createElement("tr");
		for(celul in people[i]){
			cel=document.createElement("td");
			cel.textContent = people[i][celul];
			cel.style.border = "1px solid red"
			line.appendChild(cel);
		}
		table.appendChild(line);
		
	}
	console.log(table);
	document.body.appendChild(table);
}
	 
	
function randRange(min,max){
	return Math.floor(Math.random()*(max,min))+min;
}
