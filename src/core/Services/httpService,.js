import axios from "axios";
import {toast} from "react-toastify";
import * as AppConstants from "../constants/AppConstants";

axios.defaults.baseURL = AppConstants.baseUrl;
const setJWT = (jwt) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;
}
axios.interceptors.response.use(null, (err) => {
    console.log('error', err);
    const expectedError = (err.response && err.response.status <= 400 && err.response.status < 500)
    if (!expectedError) {
        toast.error(err.response.data);
    }
    return Promise.reject(err);
});
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJWT
};
