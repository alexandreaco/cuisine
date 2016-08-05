//---
// Cuisine API

export const apiGetIngredients = () => {

  return new Promise(resolve => {
   const url = 'http://localhost:3000/ingredients';

   fetch(url)
   .then(response => {
     return response.json();
   })
   .then(json => {
     resolve(json);
   }).catch(error => {
     log('Error: ', error);
   });
  });

}


export const apiAddIngredient = (newIngredient) => {

  const { name, cost, unit } = newIngredient;
  const id = new Date().valueOf();

  return new Promise(resolve => {
   const url = 'http://localhost:3000/addIngredient';
   const request = new Request(url, {
  	method: 'POST',
  	mode: 'cors',
  	redirect: 'follow',
  	headers: new Headers({
  		'Content-Type': 'application/json'
  	}),
    body: JSON.stringify({
      '_id': id,
      'name': name,
      'type': 'grain',
      'cost': cost,
      'unit': unit
    })
  });

   fetch(request)
   .then(response => {
     return response.json();
   })
   .then(json => {
     resolve(json);
   }).catch(error => {
     log('Error: ', error);
   });
  });
}


export const apiEditIngredient = (ingredient) => {

  const { name, cost, unit, _id } = ingredient;

  return new Promise(resolve => {
   const url = 'http://localhost:3000/editIngredient';
   const request = new Request(url, {
  	method: 'POST',
  	mode: 'cors',
  	redirect: 'follow',
  	headers: new Headers({
  		'Content-Type': 'application/json'
  	}),
    body: JSON.stringify({
      '_id': _id,
      'name': name,
      'type': 'grain',
      'cost': cost,
      'unit': unit
    })
  });

   fetch(request)
   .then(response => {
     return response.json();
   })
   .then(json => {
     resolve(json);
   }).catch(error => {
     log('Error: ', error);
   });
  });
}



export const apiDeleteIngredient = (ingredient) => {

  const { name, cost, unit, _id } = ingredient;

  return new Promise(resolve => {
   const url = 'http://localhost:3000/deleteIngredient';
   const request = new Request(url, {
  	method: 'POST',
  	mode: 'cors',
  	redirect: 'follow',
  	headers: new Headers({
  		'Content-Type': 'application/json'
  	}),
    body: JSON.stringify({
      '_id': _id,
    })
  });

   fetch(request)
   .then(response => {
     return response.json();
   })
   .then(json => {
     resolve(json);
   }).catch(error => {
     log('Error: ', error);
   });
  });
}
