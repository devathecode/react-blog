import * as yup from 'yup';

const passRegex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/
export const registrationValidationSchema = yup.object({
    firstName: yup
        .string('Enter your firstName')
        .required('First Name is required'),
    lastName: yup
        .string('Enter your firstName')
        .required('Last Name is required'),
    email: yup
        .string('Enter your Email')
        .required('Email is required')
        .email('Please enter a valid email'),
    password: yup
        .string('Enter your Email')
        .matches(passRegex, 'Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character.')
        .required('Password is required'),
    confirmPassword: yup
        .string('Enter your Email').oneOf([yup.ref('password'), null], 'Password and Confirm Password Must match')
        .matches(passRegex, 'Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character.')
        .required('Confirm Password is required')
});

export const loginValidationSchema = yup.object({
    email: yup
        .string('Enter your Email')
        .required('Email is required')
        .email('Please enter a valid email'),
    password: yup
        .string('Enter your Email')
        .matches(passRegex, 'Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character.')
        .required('Password is required'),
});
