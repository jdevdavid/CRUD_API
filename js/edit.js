
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
