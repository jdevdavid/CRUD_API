// Функция фильтрации(FILTER) по возрасту как в
// 1. диапазоне
// 2. по одному
function filter(){
	let buff="";
	let table = document.getElementById("table");	
	let fl_min = document.getElementById("agefilter_min").value;
	let fl_max = document.getElementById("agefilter_max").value;
	let count = document.getElementById("countersrecordsfilter");
	let countersrecordsfilter = 0;
	
// Если выбор диапазона возрастов от и до
if(fl_max > 0){
		console.log("Диапазон возрастов");	
		
		fetch(urlapi)
	  .then((response) => response.json())
	  .then(function(json) {
		 	console.log(json);

		 		for(let i=0; i < json.length;i++){
					let a = json[i];
		//	если возраст находится в диапазоне - то выводить
				 	if ((fl_min <= json[i].age)&&(json[i].age <= fl_max)){
				 		countersrecordsfilter++;

				 		console.log(i);
				 		console.log(json[i].age);

						buff +='<tr><td>'+ (a.id+1)
						+'</td><td>'+ a.firstName
						+'</td><td>'+ a.lastName
						+'</td><td>'+ a.age
						+'</td><td>'+ a.phoneNumbers
						+'</td><td><button id="'+a.id+'" onclick="editValue(this.id)">Edit</button></td>'
						+'</td><td><button id="'+a.id+'" onclick="VDeleting(this.id)">Delete</button></td></tr>';
					 	}		
				}	 
			table.innerHTML = buff; 	 	 		
			countersrecords();

			$('#div_countersrecordsfilter').show();
			count.innerHTML = countersrecordsfilter;
		});
			
	// Если выбор одного возраста
}else if(fl_min > 0){
	console.log(fl_min);
	console.log("Один возраст");
	
		// This will return all the posts that belong to the first user
		fetch(urlapi+'?age='+fl_min)
	  .then((response) => response.json())
	  .then(function(json) {
		 	console.log(json);
		 	countersrecordsfilter++;

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
	  		table.innerHTML = buff;
	  		countersrecords();
	  		
	  		$('#div_countersrecordsfilter').show();
				count.innerHTML = countersrecordsfilter;
		});
	} else{
	 	$('#div_countersrecordsfilter').hide();
	}
}
