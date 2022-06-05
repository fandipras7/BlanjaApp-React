const initialState = {
  product: [],
  isGeting: false,
};

const productReducer = (state = initialState, action) => {
  if (action.type === "GET_DATA_PENDING") {
    return {
      ...state,
      isGeting: true,
    };
  } else if (action.type === "GET_DATA_SUCCESS") {
    return {
        ...state,
        product: [...action.payload.product],
        isGeting: false
    }
  } else {
      return state
  }
};

export default productReducer;
