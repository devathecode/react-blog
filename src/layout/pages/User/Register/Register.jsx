import React, {useState} from 'react';
import {registrationValidationSchema} from "../../../../core/Validationschemas/Schedule";
import {Card, TextField} from "@mui/material";
import {useFormik} from "formik";
import {toast} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Passwordeye from "../../../../shared/components/Passwordeye/Passwordeye";
import UserService from "../../../../core/Services/UserService/UserService";

const Register = () => {
    const navigate = useNavigate();
    const currentHost = window.location.href.split('/')[2];
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const registerForm = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: registrationValidationSchema,
        onSubmit: (values) => {
            UserService.register(values.firstName + '' + values.lastName, values.email, values.password, currentHost).then((response) => {
                console.log('response', response);
                if(response){
                    navigate('/');
                    toast.success('Please verify your mail. You are just a step away!', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            })
        },
    });
    const handlePasswordVisibility = (val) => {
        setShowPassword(val);
    }

    const handleConfirmPasswordVisibility = (val) => {
        setShowConfirmPassword(val);
    }
    return (
        <Card className="max-w-5xl mx-auto p-10 my-20">
            <h1 className="text-3xl mb-2 font-bold text-color-one border-b-4 border-sky-800 max-w-fit pb-2">Register</h1>
            <h1 className="text-sm text-gray-400 tracking-wider">Enter your basic details and you are all set to go</h1>
            <form onSubmit={registerForm.handleSubmit} className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-6 mt-4">
                    <TextField
                        fullWidth
                        id="firstName"
                        label="First Name"
                        name="firstName"
                        value={registerForm.values.firstName}
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        helperText={registerForm.touched.firstName && Boolean(registerForm.errors.firstName) ? registerForm.errors.firstName : ''}
                        error={registerForm.touched.firstName && Boolean(registerForm.errors.firstName)}>
                    </TextField>
                </div>
                <div className="col-span-12 md:col-span-6 mt-4">
                    <TextField
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        value={registerForm.values.lastName}
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        helperText={registerForm.touched.lastName && Boolean(registerForm.errors.lastName) ? registerForm.errors.lastName : ''}
                        error={registerForm.touched.lastName && Boolean(registerForm.errors.lastName)}>
                    </TextField>
                </div>
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
                <div className="col-span-12 md:col-span-6 mt-4 relative">
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
                <div className="col-span-12 md:col-span-6 mt-4 relative">
                    <TextField
                        fullWidth
                        id="confirmPassword"
                        label="Confirm Password"
                        name="confirmPassword"
                        type={`${showConfirmPassword ? 'text' : 'password'}`}
                        value={registerForm.values.confirmPassword}
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        helperText={registerForm.touched.confirmPassword && Boolean(registerForm.errors.confirmPassword) ? registerForm.errors.confirmPassword : ''}
                        error={registerForm.touched.confirmPassword && Boolean(registerForm.errors.confirmPassword)}>
                    </TextField>
                    <Passwordeye handleClick={handleConfirmPasswordVisibility}/>
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

export default Register;
