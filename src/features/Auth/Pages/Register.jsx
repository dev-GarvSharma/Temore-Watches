import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { register } from '../api';
import { API_RESPONSE_CODES } from '../../../constants/ApiResponseCodes';
import { toast } from 'react-toastify';

const Register = () => {
    // State to manage password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Toggle password visibility
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
    const handleSubmit = async (values) => {
        try {
            const res = await register(values)
            if (res.status == API_RESPONSE_CODES.CREATED) {
                toast.success("User Registered Successfully")
            }
        } catch (error) {
            toast.error("Registration Failed")
        }
    }
    // Formik configuration
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            phone: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Full Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            phone: Yup.string().required('Phone Number is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        }),
        onSubmit: (values) => {
            handleSubmit(values)

        },
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
                <p className="text-center text-gray-500 text-sm">Join us and start your journey</p>

                <form onSubmit={formik.handleSubmit} className="space-y-5">
                    {/* Full Name Field */}
                    <div className="relative">
                        <label htmlFor="name" className="text-sm text-gray-600">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            className={`mt-1 w-full px-4 py-2 rounded-md border ${formik.errors.name && formik.touched.name ? 'border-red-500' : 'border-gray-300'
                                } focus:outline-none focus:ring-2 focus:ring-green-500`}
                            {...formik.getFieldProps('name')}
                        />
                        {formik.errors.name && formik.touched.name && (
                            <p className="text-sm text-red-500 mt-1">{formik.errors.name}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                        <label htmlFor="email" className="text-sm text-gray-600">Email</label>
                        <input
                            id="email"
                            type="email"
                            className={`mt-1 w-full px-4 py-2 rounded-md border ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'
                                } focus:outline-none focus:ring-2 focus:ring-green-500`}
                            {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
                        )}
                    </div>

                    <div className="relative">
                        <label htmlFor="email" className="text-sm text-gray-600">Phone</label>
                        <input
                            id="phone"
                            type="phone"
                            className={`mt-1 w-full px-4 py-2 rounded-md border ${formik.errors.phone && formik.touched.phone ? 'border-red-500' : 'border-gray-300'
                                } focus:outline-none focus:ring-2 focus:ring-green-500`}
                            {...formik.getFieldProps('phone')}
                        />
                        {formik.errors.phone && formik.touched.phone && (
                            <p className="text-sm text-red-500 mt-1">{formik.errors.phone}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <label htmlFor="password" className="text-sm text-gray-600">Password</label>
                        <div className="relative mt-1">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                className={`w-full px-4 py-2 rounded-md border relative ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-gray-300'
                                    } focus:outline-none focus:ring-2 focus:ring-green-500`}
                                {...formik.getFieldProps('password')}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-3 text-gray-600 focus:outline-none"
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                        {formik.errors.password && formik.touched.password && (
                            <p className="text-sm text-red-500 mt-1">{formik.errors.password}</p>
                        )}
                    </div>

                    {/* Confirm Password Field */}
                    <div className="relative">
                        <label htmlFor="confirmPassword" className="text-sm text-gray-600">Confirm Password</label>
                        <div className="relative mt-1">
                            <input
                                id="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                className={`w-full px-4 py-2 rounded-md border ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                                {...formik.getFieldProps('confirmPassword')}
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPasswordVisibility}
                                className="absolute inset-y-0 right-3 text-gray-600 focus:outline-none"
                            >
                                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                            <p className="text-sm text-red-500 mt-1">{formik.errors.confirmPassword}</p>
                        )}

                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm">
                    Already have an account?{' '}
                    <a href="/login" className="text-green-500 font-medium hover:underline">
                        Log in here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
