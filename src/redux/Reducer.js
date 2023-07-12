const initialState = {
  productsList: [],
  cart: []
};

function MyReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOAD_INVENTORY':
      return { ...state, productsList: action.payload };
    case 'SAVE_PRODUCT':
      // update state accordingly
      let newlyCreatedProduct = action.payload;
      let existingProduct = state.productsList.find(p => newlyCreatedProduct.title === p.title);

      if (!existingProduct) {
        let newProductsList = [ ...state.productsList, newlyCreatedProduct ];
        // state.productsList.push(newlyCreatedProduct);
        // const newProductsList = state.productsList.concat([newlyCreatedProduct]);
        return { ...state, productsList: newProductsList };
      } else {
        return state;
      }
    case 'DELETE_PRODUCT':
      // remove item from array
      let deletedProductTitle = action.payload;
      let updatedProducts = state.productsList.filter(function(product) {
        return product.title !== deletedProductTitle;
      });
      return { ...state, productsList: updatedProducts };
    case 'ADD_CART':
      return { ...state, cart: [ ...state.cart, action.payload ] };
    default:
      return initialState;
  }
};

export default MyReducer;