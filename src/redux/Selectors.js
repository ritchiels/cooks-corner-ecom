export const selectProducts = (state) => {
  console.log('State is', state);
  return state.productsList;
}

export const selectProduct = (productTitle) => (state) => {
  // Select a specific product by name
  return state.productsList.find(product => product.title === productTitle);
}

/*
  function SelectProduct(productTitle) {
    return function(state) {
      return state.productsList.find(product => product.title === productTitle);
    }
  }

  SelectProduct('Microwave')();
*/