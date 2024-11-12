import React, { useEffect, useState } from 'react';
import Watch4 from '../../../assets/Group-1344-470x470.jpg'
import { useParams } from 'react-router-dom';
import { watchDetails } from '../api';
import { API_RESPONSE_CODES } from '../../../constants/ApiResponseCodes';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [details, setDetails] = useState('');
    const [selectedColor, setSelectedColor] = useState("Carbon");
    const colors = ["Carbon", "Smoke", "Matte"];
    const { id } = useParams();
    const appUrl = import.meta.env.VITE_API_URL;

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const fetchWatchDetails = async (id) => {
        try {
            const res = await watchDetails(id)
            if (res.status == API_RESPONSE_CODES.OK) {
                setDetails(res.data.data)
            }
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        fetchWatchDetails(id)
    }, [])

    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center lg:items-start p-6 lg:p-12 bg-gray-50">
            {/* Image Gallery */}
            <div className="lg:w-1/2 flex flex-col items-center space-y-4">
                <div className="w-full h-96 lg:h-full flex items-center justify-center">
                    <img src={`${appUrl}${details.image}` || ''} alt="Watch" className="w-4/5 h-auto object-cover" />
                </div>
                <div className="flex space-x-2">
                    {/* Thumbnails */}
                    {["/path-to-thumb1.jpg", "/path-to-thumb2.jpg", "/path-to-thumb3.jpg"].map((src, idx) => (
                        <img key={idx} src={`${appUrl}${details.image}` || ''} alt="Thumbnail" className="w-16 h-16 object-cover rounded-lg cursor-pointer hover:ring-2 ring-gray-300" />
                    ))}
                </div>
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
                <h2 className="text-3xl font-bold text-gray-800">{details.name || ''}</h2>
                <p className="text-yellow-500 mt-2">⭐⭐⭐⭐☆ <span className="text-gray-600">(1 customer review)</span></p>
                <p className="text-2xl font-semibold text-gray-800 mt-4">Rs {details.price || ''}</p>
                <p className="text-green-500 font-medium mt-2">Free Shipping</p>
                <p className="text-gray-600 mt-4">
                    {details.description || ''}
                </p>

                {/* Color Selection */}
                <div className="mt-6">
                    <h4 className="text-gray-800 font-semibold">Select Color:</h4>
                    <div className="flex space-x-4 mt-2">
                        {colors.map((color, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedColor(color)}
                                className={`px-4 py-2 rounded-full border ${selectedColor === color ? 'border-gray-800 bg-gray-200' : 'border-gray-300'
                                    }`}
                            >
                                {color}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quantity and Cart Button */}
                <div className="flex items-center mt-6 space-x-4">
                    <div className="flex items-center border rounded-lg">
                        <button onClick={decreaseQuantity} className="px-3 py-1 bg-gray-100 text-gray-600">-</button>
                        <span className="px-4 py-1">{quantity}</span>
                        <button onClick={increaseQuantity} className="px-3 py-1 bg-gray-100 text-gray-600">+</button>
                    </div>
                    <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-gray-500 transition">
                        Add to Cart
                    </button>
                </div>

                {/* Wishlist and Share */}
                <div className="flex items-center space-x-4 mt-6">
                    <button className="text-gray-600 hover:text-gray-800 transition">
                        ❤️ Add to Wishlist
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 transition">
                        🔗 Share
                    </button>
                </div>

                {/* Categories */}
                <div className="mt-8">
                    <h4 className="text-gray-600 font-semibold">Categories:</h4>
                    <p className="text-gray-600">{details.category || ''}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
