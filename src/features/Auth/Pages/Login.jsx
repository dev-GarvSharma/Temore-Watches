import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../api';
import { API_RESPONSE_CODES } from '../../../constants/ApiResponseCodes';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import LocalStorageService from '../../../services/localstorageService';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../authSlice';



const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (values) => {
        try {
            const res = await login(values)

            if (res.status == API_RESPONSE_CODES.OK) {
                // LocalStorageService.setTokenData(res.data)
                LocalStorageService.setUserData(JSON.stringify(res.data.data));
                toast.success(res.message)
                dispatch(setLoggedIn(true))
                navigate('/')
            } else {
                toast.error(res.message)
            }
        } catch (error) {
            console.log(error);

        }
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        }),
        onSubmit: (values) => {
            handleSubmit(values);
        },
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-400 to-red-400 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back!</h2>
                <p className="text-center text-gray-500 text-sm">Please enter your login details below</p>

                <form onSubmit={formik.handleSubmit} className="space-y-5">
                    {/* Email Field */}
                    <div className="relative">
                        <label htmlFor="email" className="text-sm text-gray-600">Email</label>
                        <input
                            id="email"
                            type="email"
                            className={`mt-1 w-full px-4 py-2 rounded-md border ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'
                                } focus:outline-none focus:ring-2 focus:ring-red-500`}
                            {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <label htmlFor="password" className="text-sm text-gray-600">Password</label>
                        <input
                            id="password"
                            type="password"
                            className={`mt-1 w-full px-4 py-2 rounded-md border ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-gray-300'
                                } focus:outline-none focus:ring-2 focus:ring-red-500`}
                            {...formik.getFieldProps('password')}
                        />
                        {formik.errors.password && formik.touched.password && (
                            <p className="text-sm text-red-500 mt-1">{formik.errors.password}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
                    >
                        Log In
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm">
                    Don't have an account?{' '}
                    <a href="/register" className="text-red-500 font-medium hover:underline">
                        Sign up here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
