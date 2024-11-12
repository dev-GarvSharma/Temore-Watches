import React from 'react';

// Import images
import heroImage from '../../../assets/aboutUs.jpg';
import watchImage1 from '../../../assets/aboutUs.jpg';
import watchImage2 from '../../../assets/aboutUs.jpg';

const AboutUs = () => {
    return (
        <div className="bg-white text-gray-900 font-sans">

            {/* Hero Section */}
            <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
                <div className="relative z-10 text-center text-white px-6 py-20">
                    <h1 className="text-5xl font-extrabold mb-4">Crafting Timeless Watches</h1>
                    <p className="text-lg font-medium mb-8">Where tradition meets modern craftsmanship</p>
                    <button className="bg-red-500 font-semibold text-white py-3 px-8 rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
                        Learn More
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 px-6 text-center bg-gray-50">
                <h2 className="text-4xl font-bold mb-6 text-red-500">Who We Are</h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
                    At Temore Watches, we believe that every timepiece tells a story. We craft each watch with precision, dedication, and the passion to create something lasting.
                </p>
                <div className="flex flex-col lg:flex-row justify-center gap-12">
                    <div className="lg:w-1/3 rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-semibold text-red-500 mb-4">Our Vision</h3>
                        <p className="text-gray-500">To bring the world the perfect fusion of classic design and modern functionality, elevating every moment with precision and style.</p>
                    </div>
                    <div className="lg:w-1/3 rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-semibold text-red-500 mb-4">Our Mission</h3>
                        <p className="text-gray-500">To produce watches that not only stand the test of time but also make a statement of elegance and craftsmanship for generations to come.</p>
                    </div>
                    <div className="lg:w-1/3 rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-semibold text-red-500 mb-4">Our Promise</h3>
                        <p className="text-gray-500">Quality, durability, and style come together to ensure that every Temore watch is an experience, not just a product.</p>
                    </div>
                </div>
            </section>

            {/* Product Showcase Section */}
            <section className="bg-gray-100 py-24 px-6">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Our Watches</h2>
                <div className="flex flex-wrap gap-12 justify-center">
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img src={watchImage1} alt="Watch 1" className="w-full h-64 object-cover rounded-t-lg mb-6" />
                            <h3 className="text-xl font-semibold mb-4">Classic Series</h3>
                            <p className="text-gray-500">A timeless design, perfect for every occasion. The Classic Series is a true representation of luxury and simplicity.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img src={watchImage2} alt="Watch 2" className="w-full h-64 object-cover rounded-t-lg mb-6" />
                            <h3 className="text-xl font-semibold mb-4">Modern Elegance</h3>
                            <p className="text-gray-500">For those who seek a balance between innovation and tradition, the Modern Elegance series is the perfect choice.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 px-6 bg-gray-50">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">What Our Customers Say</h2>
                <div className="flex flex-wrap justify-center gap-10">
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="text-lg text-gray-600 mb-4">"The craftsmanship of my Temore watch is unparalleled. I feel like I’m wearing a piece of art every day!"</p>
                            <div className="text-right">
                                <p className="font-semibold">John Doe</p>
                                <p className="text-gray-500">Loyal Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="text-lg text-gray-600 mb-4">"A perfect blend of tradition and innovation. I am thrilled with my purchase. Highly recommend Temore Watches!"</p>
                            <div className="text-right">
                                <p className="font-semibold">Jane Smith</p>
                                <p className="text-gray-500">Happy Client</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-6 text-center bg-red-500 text-white">
                <h2 className="text-4xl font-bold mb-6">Join the Temore Family</h2>
                <p className="text-lg mb-10">Discover the craftsmanship, precision, and elegance that define Temore Watches. Start your journey with us today.</p>
                <button className="bg-white text-red-500 py-3 px-8 rounded-lg shadow-lg">
                    Shop Now
                </button>
            </section>

        </div>
    );
};

export default AboutUs;
