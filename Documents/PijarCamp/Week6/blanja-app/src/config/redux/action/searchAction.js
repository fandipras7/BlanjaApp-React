export const searchProduct = (data) => {
  const keyword = data;
  return {
    type: "SEARCHING_PRODUCT",
    payload: keyword,
  };
};
