function toggleCreateForm(){
	console.log("start toggleCreateForm");
	$('.createheader').toggle();
	
	// эту штуку я не доделал
	// $("#demoDataGenerate").toggleText('Добавить запись в таблицу', 'Не Добавлять запись в таблицу');
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
  	id: len+1,
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