import {toast} from 'react-toastify'
import httpService from "../httpService,";

const tokenKey = 'auth-token';

// Login functions
async function login(email, password) {
    try {
        const {data: token} = await httpService.post("login", {
            email,
            password,
        });
        localStorage.setItem(tokenKey, JSON.stringify(token));
        httpService.setJWT(`Bearer ${JSON.parse(localStorage.getItem(tokenKey))}`);
        return token;
    } catch (ex) {
        if (ex.response && ex.response.status === 400) {
            toast.error(ex.response.data)
        }
    }
}

httpService.setJWT(`Bearer ${JSON.parse(localStorage.getItem(tokenKey))}`);

function logout() {
    localStorage.removeItem(tokenKey);
}

// Register function
async function register(name, email, password, host) {
    try {
        const {data: token} = await httpService.post("register", {
            name,
            email,
            password,
            host
        });
        localStorage.setItem(tokenKey, JSON.stringify(token));
        httpService.setJWT(`Bearer ${JSON.parse(localStorage.getItem(tokenKey))}`);
        return token;
    } catch (ex) {
        if (ex.response && ex.response.status === 400) {
            toast.error(ex.response.data)
        }
    }
}

async function verifyToken(token) {
    try {
        const {data: response} = await httpService.get('verify?token=' + token);
        return response
    }
    catch (ex) {
        if (ex.response && ex.response.status === 400) {
            toast.error(ex.response.data)
        }
        return ex
    }
}

export default {
    login,
    logout,
    register,
    verifyToken
}
