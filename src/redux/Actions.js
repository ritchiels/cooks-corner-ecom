
/* Asynchronous vs Synchronous Code */

/*
  Async: 
    - Simultaneous (parallel) execution of code
    - Doesn't wait for previous execution to complete
    - It's like running code in the background

  Sync:
    - Consecutive execution of code
    - Waits for previous execution to complete


  How to make code async?
    - Redux Thunk
      - Fetch
        - Promises *
    - Async/await *
*/


// Promises

// Do a set of chores:
/*
  1. Clean your room
  2. Take out trash
  3. Do laundry
  4. Do homework
*/

/*
let cleanRoom = new Promise(function(resolve, reject) {
  // resolve/reject are functions
  let dirtyLevel = 1;
  if (dirtyLevel > 5) {
    reject();
  } else {
    resolve();
  }
});

let takeTrash = new Promise(function(resolve, reject) {
  resolve();
})

takeTrash.then().catch();

let doLaundry = new Promise(function(resolve, reject) {
  resolve();
})
let doHomework = new Promise(function(resolve, reject) {
  resolve();
})

let result = cleanRoom
  .then(function() {
    // handle the resolve of a promise
    return takeTrash;
  })
  .then(function() {
    // handling the next promise -- take out the trash
    // whatever promise returned from previous then()
    return doLaundry;
  })
  .then(function() {
    return doHomework;
  })
  .then(function() {
    console.log("Finished all my chores!")
  })
  .catch(function() {
    // handle the reject of a promise
  });

// nextPromise.then().catch();



// I want to make this function async using the 'async' keyword.
async function longRunningFunction() {
  // has 100000 lines of code
  // takes 50 seconds to complete
}

// await = asynchronously wait 
result = await longRunningFunction(); // should I wait for this to complete before moving on?

// I need to wait for the result before continuing

function sample() {}
await sample(); // this won't work


// continue my code

let x = 'hello';
let y = 'world';
let z = 'test';

*/


export const getProducts = () => dispatch => {
  // go fetch all the inventory from the json server
  return fetch('http://localhost:3001/inventory')
    .then(function(response) {
      // handle the response (resolve of the promise)
      return response.json();
    })
    .then(function(data) {
      // handle the raw data
      let loadInventory = {
        type: 'LOAD_INVENTORY',
        payload: data
      }
      dispatch(loadInventory);
    })
    .catch(function() {
      // handle the error
    })
}

// This is invoked from the CreateProduct component
export const saveProduct = (product) => dispatch => {
  return fetch('http://localhost:3001/inventory', {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(function(response) {
      dispatch({ type: 'SAVE_PRODUCT', payload: product });
      // dispatch(getProducts());
    })
    .catch(function(response) {

    })
}

// This is invoked from the ProductsList component
export const deleteProduct = (productTitle) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: productTitle
  }
}

export const addToCart = (product) => {
  return {
    type: 'ADD_CART',
    payload: product
  }
}