import axios from "axios";

export const getData = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_DATA_PENDING" });
    // const result = await axios.get('http://localhost:4000/v1/products')
    const result = await axios({
      method: "GET",
      baseURL: process.env.REACT_APP_API_BLANJA,
      url: "/products",
    });
    const product = result.data.data;
    console.log(product);
    dispatch({ type: "GET_DATA_SUCCESS", payload: { product } });
  } catch (error) {
    console.log(error);
    alert("Gagal mengambil produk");
  }
};

export const addProduct = (dataform, navigate) => async (dispatch) => {
  try {
    const result = await axios.post("http://localhost:4000/v1/products", dataform);
    // await axios(
    //   {
    //     method: "POST",
    //     baseURL: process.env.REACT_APP_API_BLANJA,
    //     url: "/products",
    //   },
    //   dataform
    // );
    const product = result.data.data;
    alert("berhasil menambah produk");
    dispatch({ type: "ADD_PRODUCT", payload: { product } });
    navigate("/profile/storeprofile/myproduct");
  } catch (error) {
    console.log(error);
    alert("Gagal menambah produk");
  }
};
