import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {loginValidationSchema} from "../../../../core/Validationschemas/Schedule";
import {Card, TextField} from "@mui/material";
import Passwordeye from "../../../../shared/components/Passwordeye/Passwordeye";
import UserService from '../../../../core/Services/UserService/UserService';
import {toast} from "react-toastify";

const Login = (props) => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordVisibility = (val) => {
        setShowPassword(val);
    }
    const registerForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values) => {
            console.log('values', values);
            UserService.login(values.email, values.password).then((res) =>{
                if(res){
                    props.setLogIn();
                    toast.success('Successfully logged In');
                    navigate('/');
                }
            })
            // console.log('payload', payload);
        },
    });
    return (
        <Card className="max-w-5xl mx-auto p-10 my-20">
            <h1 className="text-3xl mb-2 font-bold text-color-one border-b-4 border-sky-800 max-w-fit pb-2">Login</h1>
            <h1 className="text-sm text-gray-400 tracking-wider">Dive into the world of blogs</h1>
            <form onSubmit={registerForm.handleSubmit} className="grid grid-cols-12 gap-5">
                <div className="col-span-12 mt-4">
                    <TextField
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        value={registerForm.values.email}
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        helperText={registerForm.touched.email && Boolean(registerForm.errors.email) ? registerForm.errors.email : ''}
                        error={registerForm.touched.email && Boolean(registerForm.errors.email)}>
                    </TextField>
                </div>
                <div className="col-span-12 mt-4 relative">
                    <TextField
                        fullWidth
                        id="Password"
                        label="Password"
                        name="password"
                        type={`${showPassword ? 'text' : 'password'}`}
                        value={registerForm.values.password}
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        helperText={registerForm.touched.password && Boolean(registerForm.errors.password) ? registerForm.errors.password : ''}
                        error={registerForm.touched.password && Boolean(registerForm.errors.password)}>
                    </TextField>
                    <Passwordeye handleClick={handlePasswordVisibility}/>
                </div>
                <button
                    className={`bg-sky-700 hover:bg-sky-900 w-24 text-white rounded p-2 ${registerForm.isValid ? '' : 'cursor-not-allowed'}`}
                    type="submit"
                    disabled={!registerForm.isValid}>
                    Submit
                </button>
            </form>
        </Card>
    );
};

export default Login;
