console.log("start api.js");

function Getting(){
	console.log("start .js");

	fetch(urlapi+'/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function Listingall(){
	console.log("start Listingall");

	fetch(urlapi)
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function Creating(){

	fetch(urlapi, {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

}
 // ---
function Updating(idx){
	fetch(urlapi+'/'+idx, {
  method: 'PUT',
  body: JSON.stringify({
    id: idx,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function Patching(idx){

	fetch(urlapi+'/'+idx, {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo2',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function Deleting(idx){
	fetch(urlapi+'/'+idx, {
  	method: 'DELETE',
	});
}

function Filtering(idx){

	// This will return all the posts that belong to the first user
fetch(urlapi+'?userId='+idx)
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function Listingnested(){

	// This is equivalent to /comments?postId=1
fetch(urlapi+'/1/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));
}
