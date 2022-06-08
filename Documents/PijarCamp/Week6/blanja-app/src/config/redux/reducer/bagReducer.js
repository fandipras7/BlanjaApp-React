const initialState = {
  product: [],
  totalPrice: 0,
};

const bagReducer = (state = initialState, action) => {
  if (action.type === "ADD_BAG") {
    return {
      ...state,
      product: [...state.product, { ...action.payload.data, qtyOrder: 4 }],
    };
  } else if (action.type === "PLUS") {
    return {
      ...state,
      product: [{ ...state.product, qtyOrder: action.payload }],
    };
  } else {
    return state;
  }
};

export default bagReducer;
