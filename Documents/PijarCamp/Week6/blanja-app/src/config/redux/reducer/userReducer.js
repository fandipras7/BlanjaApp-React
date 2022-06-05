const initialState = {
  user: {
    name: "",
    email: "",
    roleId: "",
  },
  isLoading: false,
  response: false,
};

const userReducer = (state = initialState, action) => {
  if (action.type === "USER_LOGIN_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "USER_LOGIN_SUCCESS") {
    return {
      ...state,
      user: action.payload.user,
      isLoading: false,
      response: true,
    };
  } else {
    return state;
  }
};

export default userReducer;
