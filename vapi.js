console.log("start vapi.js");

// Просматривание всего - готово
function VListingall(){
	console.log("start VListingall");	
		
	let buff="";
	let cl = document.getElementById("table");

	fetch(urlapi)
	.then((response) => response.json()).then(function(json) {
	  	console.log(json);
	  	console.log(json.length);
	  	len = json.length+1;
  		
  	for(let i=0; i < json.length;i++){
			let a = json[i];
		
			buff +='<tr><td>'+ (a.id+1)
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

function toggleCreateForm(){
	console.log("start toggleCreateForm");
	$('.createheader').toggle();
}


//Проверка данных для создания записи - готово
function checkingCreating(){
	if (document.getElementById("firstNameCreate").value.length > 18) {
		alert("Имя не может быть настолько длинным.");
	}else
	if (document.getElementById("firstNameCreate").value.length < 2) {
		alert("Имя не может быть настолько коротким.");
	}else
	if (document.getElementById("lastNameCreate").value.length > 19) {
		alert("Фамилия не может быть настолько длинной.");
	}else
	if (document.getElementById("lastNameCreate").value.length < 2) {
		alert("Фамилия не может быть настолько короткой.");
	}else
	if (document.getElementById("ageCreate").value < 0) {
		alert("Возраст не может быть отрицательным.");
	}else
	if (document.getElementById("ageCreate").value > 150) {
		alert("Возраст не может быть таким большим.");
	}else
	if (document.getElementById("phoneNumbersCreate").value.length < 5) {
		alert("Телефон не может быть таким коротким.");
	}else
	if (document.getElementById("phoneNumbersCreate").value.length > 15) {
		alert("Телефон не может быть таким длинным.");
	}else{
		VCreating();
	}
}
// Создает элемент - готово
function VCreating(){
	console.log("start VCreating");

	fetch(urlapi, {
  method: 'POST',
  body: JSON.stringify({
  	id: len,
  	firstName: document.getElementById("firstNameCreate").value,
    lastName: document.getElementById("lastNameCreate").value,
    age: document.getElementById("ageCreate").value,
    phoneNumbers: document.getElementById("phoneNumbersCreate").value,
  }),
  headers: {'Content-type': 'application/json; charset=UTF-8',},
}).then((response) => response.json()).then(function(json) {
	 	console.log(json);
		VListingall();//Считывание уже записанных новых данных		
	});

}
// Открываем форму для редактирования элемента - готово
function editValue(clicked_id){
	console.log("start editValue");
	
	fetch(urlapi+'/'+clicked_id)
	  .then((response) => response.json())	  
	  .then(function(json) {
	  	let a = json;
	
	document.getElementById("firstNameEdit").value = a.firstName;
	document.getElementById("lastNameEdit").value = a.lastName;
	document.getElementById("ageEdit").value = a.age;
	document.getElementById("phoneNumbersEdit").value = a.phoneNumbers;
	
	gloval_counter_id = clicked_id;	
	});	

	$('.editheader').show();
}

//Проверка данных для редактирования - готово
function checkingEditing(){
	if (document.getElementById("firstNameEdit").value.length > 18) {
		alert("Имя не может быть настолько длинным.");
	}else
	if (document.getElementById("firstNameEdit").value.length < 2) {
		alert("Имя не может быть настолько коротким.");
	}else
	if (document.getElementById("lastNameEdit").value.length > 19) {
		alert("Фамилия не может быть настолько длинной.");
	}else
	if (document.getElementById("lastNameEdit").value.length < 2) {
		alert("Фамилия не может быть настолько короткой.");
	}else
	if (document.getElementById("ageEdit").value < 0) {
		alert("Возраст не может быть отрицательным.");
	}else
	if (document.getElementById("ageEdit").value > 150) {
		alert("Возраст не может быть таким большим.");
	}else
	if (document.getElementById("phoneNumbersEdit").value.length < 5) {
		alert("Телефон не может быть таким коротким.");
	}else
	if (document.getElementById("phoneNumbersEdit").value.length > 15) {
		alert("Телефон не может быть таким длинным.");
	}else{
		VPatching();
	}
}

// Обновить элемент - готово
function VPatching(){
	let idx = gloval_counter_id;
	fetch(urlapi+'/'+idx, {
  method: 'PATCH',
  body: JSON.stringify({
    	firstName:document.getElementById("firstNameEdit").value,
    	lastName:document.getElementById("lastNameEdit").value,
    	age:document.getElementById("ageEdit").value,
    	phoneNumbers:document.getElementById("phoneNumbersEdit").value,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
	})
  .then((response) => response.json())
  .then(function(json) {
	 	console.log(json);
		VListingall();//Считывание уже записанных новых данных
		$('.editheader').toggle();
	});
}

// Удалить Элемент - готово
function VDeleting(idx){
	fetch(urlapi+'/'+idx, {
  	method: 'DELETE',
	})
	.then((response) => response.json())
  .then(function(json) {
	 	// console.log(json);
		// VListingall();//Считывание уже записанных новых данных
		fiksDelete(idx);
	});	
}

//Меняем(update) ID элемента последнего - len -1
// на idx  	// fiksDelete(1);
function fiksDelete(idxn){
	console.log('start fiksDelete');//5

	let idfiks = len-1;
	console.log('idfiks - ' + idfiks);//5
	console.log('idxn - ' + idxn);//4 sinful -4

	fetch(urlapi+'/'+idfiks, {
	  method: 'PATCH',
	  body: JSON.stringify({
	    	id:idxn,
	  }),
	  headers: {
	  	'Content-type': 'application/json; charset=UTF-8',
	  },
	}).then((response) => response.json())
	 .then(function(json) {
		 	console.log(json);
			VListingall();//Считывание уже записанных новых данных			
	});

};

//Добавить минимальный и максимальный возраст
//Выгружать по каждому возрасту или все сразу а потом фильтровать?

function filter(){

	let buff="";
	let cl = document.getElementById("table");
	let fl = document.getElementById("agefilter").value;
	// let fl_min = document.getElementById("agefilter_min").value;
	// let fl_max = document.getElementById("agefilter_max").value;

	console.log(fl);
// This will return all the posts that belong to the first user
fetch(urlapi+'?age='+fl)
  .then((response) => response.json())
  .then(function(json) {
	 	console.log(json);

	 	for(let i=0; i < json.length;i++){
			let a = json[i];
		
			buff +='<tr><td>'+ (a.id+1)
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