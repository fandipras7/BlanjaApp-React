import axios from "axios";
export const loginSeller = (dataForm, navigate) => async (dispatch) => {
    try {
        dispatch({type: "USER_LOGIN_PENDING"});
        const result = await axios.post("http://localhost:4000/v1/seller/login", dataForm);
        const user = result.data.data;
    } catch (error) {
        
    }
}