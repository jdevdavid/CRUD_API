// Удалить Элемент(DELETE) - готово
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

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Тут проблема в том что функция удаляет элемент
// но место остается и возникает конфликт при создании
// нового элемента
// возможно можно изменить выставление позиции
// для создания элемента,
// и таким образом исправить его

// Удаление таблицы - Сделано
function cleartable(){
	console.log("start cleartable");
	countersrecords();
	if (window.confirm("Do you really want to CLEAR ALL TABLE?")) {
	  for (var i = 0; i <= max_elem; i++) {
			fetch(urlapi+'/'+i, {
		  	method: 'DELETE',
				})
				.then((response) => response.json())
			  .then(function(json) {
			  	console.log("Запись удалена");		  	
			  });		  
				if (i === len){
					alert("All Table has been cleared!");
					VListingall();//Смотрим все ли удалилось
				}
		}
	}	
} 