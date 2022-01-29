console.log('Start main.js');
let gloval_counter_id = 0;
let len = 0;//Длина массива - кол-во записей таблицы
let max_elem = 0;
let first_empty = 0;
// json-server --watch db.json
// let urlapi = "https://jsonplaceholder.typicode.com/posts";
// let urlapi = "http://localhost:3000/posts";
let urlapi = "http://localhost:3000/users";


document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
  // Если должен быть найден один элемент
  VListingall();  
});

// Подсчет количества записей в таблице
function countersrecords(){	
	fetch(urlapi)
	  .then((response) => response.json()).then(function(json) {	  	
	  len = json.length;
		document.getElementById("countersrecords").innerHTML = json.length;
	});	
	  return len;
}

// Просматривание всего(VIEW) - готово
function VListingall(){
	console.log("start VListingall");	
		
	let buff="";
	let cl = document.getElementById("table");

	fetch(urlapi)
	.then((response) => response.json()).then(function(json) {
	  	console.log(json);
	  	console.log(json.length);
	  	len = json.length;
  		
  	for(let i = 0; i < len; i++){
			let a = json[i];
			console.log("a - " + a);

			if (a.id > max_elem){ max_elem = a.id;  }
			if (a === undefined){
				first_empty = i;
				console.log("first_empty - " + first_empty);
			}

			console.log("i - " + i);

			buff +='<tr><td>'+ (a.id)
			+'</td><td>'+ a.firstName
			+'</td><td>'+ a.lastName 
			+'</td><td>'+ a.age 
			+'</td><td>'+ a.phoneNumbers
			+'</td><td><button id="'+a.id+'" onclick="editValue(this.id)">Edit</button></td>'
			+'</td><td><button id="'+a.id+'" onclick="VDeleting(this.id)">Delete</button></td></tr>';
		}		
  		cl.innerHTML = buff;
  		countersrecords();
	});	
}
// Тестовая функция.
function test22(){
	fetch(urlapi)
	  .then((response) => response.json())
	  .then(function(json) {
		 	console.log(json);		 		  		
		 	console.log(json.typeof);		
		 	console.log(json[22].age);
		});
}
