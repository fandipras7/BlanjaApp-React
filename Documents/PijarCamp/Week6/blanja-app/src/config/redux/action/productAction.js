import axios from "axios";

export const getData = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_DATA_PENDING" });
    const result = await axios.get('http://localhost:4000/v1/products')
    // // await axios({
    // //   method: "GET",
    // //   baseURL: process.env.REACT_APP_API_BLANJA,
    // //   url: "/product",
    // // });
    const product = result.data.data
    console.log(product);
    dispatch({type: "GET_DATA_SUCCESS", payload: { product }})
  } catch (error) {
      console.log(error);
    //   alert('Gagal mengambil produk')
  }
};

//   export const fetchData = () => async (dispatch)=> {
//     try {
//         console.log('apakah ini jalan');
//       const result = await axios({
//         method: "GET",
//         baseURL: process.env.REACT_APP_API_BLANJA /*"http://localhost:4000/v1" */,
//         url: /*`products?${searchParams}`*/ "/products?page=1&limit=10",
//       });
//       const user = result.data.data
//       dispatch({type: "GET_DATA", payload:{user}})
//       // console.log(result.data.data[5].photo);
      
//     } catch (error) {
//       console.log(error);
//     }
//   }
