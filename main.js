console.log('Start main.js');
let gloval_counter_id = 0;
let len = 0;
// json-server --watch db.json
// let urlapi = "https://jsonplaceholder.typicode.com/posts";
// let urlapi = "http://localhost:3000/posts";
let urlapi = "http://localhost:3000/users";

// let urlapi = "http://localhost:3000";

document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
  // Если должен быть найден один элемент
  // readAll();
  VListingall();  
});


function countersrecords(){	
	fetch(urlapi)
	  .then((response) => response.json()).then(function(json) {	  	
	  len = json.length;
		document.getElementById("countersrecords").innerHTML = json.length;
	});	
	  return len;
}

function cleartable(){
	fetch(urlapi, {
  	method: 'DELETE',
	})
	.then((response) => response.json())
  .then(function(json) {
	 	// console.log(json);
		VListingall();//Считывание уже записанных новых данных
	});
}
