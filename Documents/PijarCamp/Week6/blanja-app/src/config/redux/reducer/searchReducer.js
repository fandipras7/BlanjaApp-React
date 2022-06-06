const initialState = {
  search: "",
};

const searchReducer = (state = initialState, action) => {
  if (action.type === "SEARCHING_PRODUCT") {
    return {
      search: action.payload,
    };
  } else {
    return state;
  }
};

export default searchReducer;
