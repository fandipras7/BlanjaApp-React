export const addBag = (data) => {
  return {
    type: "ADD_BAG",
    payload: { data },
  };
};

export const addPlus = (data) => {
  return {
    type: "PLUS",
    payload: data,
  };
};
