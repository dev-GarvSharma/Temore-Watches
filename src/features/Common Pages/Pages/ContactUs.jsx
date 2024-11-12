import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const ContactUs = () => {
    // Validation schema for the form
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        message: Yup.string().required("Message is required"),
    });

    // Handle form submission
    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
        alert("Your message has been sent!");
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-gray-900 text-white">
            {/* Floating Contact Header Section */}
            <section className="relative w-full flex flex-col items-center text-center p-8">
                <motion.h1
                    className="text-4xl lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Connect with Us
                </motion.h1>
                <motion.p
                    className="max-w-lg mx-auto text-lg lg:text-xl text-gray-300"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    We'd love to hear from you! Send us a message and let's get connected.
                </motion.p>
            </section>

            {/* Animated Contact Icons */}
            <section className="flex justify-center gap-8 mt-12 mb-16">
                {["Email", "Phone", "Location"].map((type, index) => (
                    <motion.div
                        key={type}
                        className="flex flex-col items-center bg-purple-700 rounded-full p-6 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <h3 className="text-xl font-semibold mb-1">{type}</h3>
                        <p className="text-gray-400 text-sm">
                            {type === "Email" && "support@temorewatches.com"}
                            {type === "Phone" && "+1 (123) 456-7890"}
                            {type === "Location" && "1234 Watch Ave, Time City, TX"}
                        </p>
                    </motion.div>
                ))}
            </section>

            {/* Contact Form Section with Floating Animation */}
            <section className="relative w-full max-w-2xl px-6 py-12 bg-gray-800 rounded-lg shadow-xl text-left" style={{ overflow: "hidden" }}>
                <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-8">Drop Us a Message</h2>
                <Formik
                    initialValues={{ name: "", email: "", message: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className="space-y-6">
                            {/* Name Field */}
                            <div className="relative">
                                <Field
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-gray-400 text-gray-200 placeholder-gray-500"
                                />
                                <ErrorMessage name="name" component="div" className="text-red-400 text-sm mt-1" />
                            </div>

                            {/* Email Field */}
                            <div className="relative">
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-gray-400 text-gray-200 placeholder-gray-500"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
                            </div>

                            {/* Message Field */}
                            <div className="relative">
                                <Field
                                    name="message"
                                    as="textarea"
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-gray-400 text-gray-200 placeholder-gray-500"
                                />
                                <ErrorMessage name="message" component="div" className="text-red-400 text-sm mt-1" />
                            </div>

                            {/* Submit Button with Hover Animation */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full py-3 bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-700 transition duration-300"
                            >
                                Send Message
                            </motion.button>
                        </Form>
                    )}
                </Formik>
            </section>

            {/* Animated Floating Background Elements */}
            <motion.div
                className="absolute w-64 h-64 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full opacity-30 -left-20 top-1/3"
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
                className="absolute w-40 h-40 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full opacity-30 -right-20 bottom-1/4"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            />
        </div>
    );
};

export default ContactUs;
