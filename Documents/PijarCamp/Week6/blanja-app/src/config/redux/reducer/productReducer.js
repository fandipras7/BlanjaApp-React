const initialState = {
  product: [],
  isGeting: false,
};

const productReducer = (state = initialState, action) => {
  //   if (action.type === "GET_DATA_PENDING") {
  //     return {
  //       ...state,
  //       isGeting: true,
  //     };
  //   } else
  if (action.type === "GET_DATA_SUCCESS") {
    return {
      ...state,
      product: [...action.payload.product],
      isGeting: true,
    };
  } else if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      product: [...state.product, action.payload.product],
    };
  } else if (action.type === "EDIT_PRODUCT") {
    return {
      ...state,
      product: state.product.map((item)=>{
       return item.id === action.payload.product.id ? action.payload.product : item;
      })
    }
  } else {
    return state;
  }
};

export default productReducer;
