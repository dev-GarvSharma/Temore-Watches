import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import LocalStorageService from '../../services/localstorageService'; // Import LocalStorageService or adjust path
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { useNavigate } from 'react-router-dom';

const CartDialog = ({ visible, onHide }) => {
    const [cartItems, setCartItems] = useState([]);
    const appUrl = import.meta.env.VITE_API_URL;
    const navigate = useNavigate()

    useEffect(() => {
        // Fetch cart data from local storage on component load
        const cartData = JSON.parse(LocalStorageService.getCartData() || "[]"); // Parse the JSON string
        setCartItems(Array.isArray(cartData) ? cartData : []); // Ensure cartItems is always an array
    }, [visible]);

    // Calculate total price for each item and grand total
    const getTotalPrice = (item) => (item.price && item.quantity) ? item.price * item.quantity : 0;
    const getGrandTotal = () => cartItems.reduce((total, item) => total + getTotalPrice(item), 0);

    return (
        <Dialog header="Your Cart" visible={visible} style={{ width: '50vw' }} onHide={onHide} draggable={false} blockScroll={true}
            className="p-4 rounded-lg shadow-lg bg-white">

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="grid gap-4 relative">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex items-center p-4 border rounded-lg bg-gray-100">
                            <img src={`${appUrl}${item.image}`} alt={item.name} className="w-16 h-16 rounded-lg mr-4" />
                            <div className="flex-grow">
                                <h4 className="font-bold text-lg">{item.name}</h4>
                                <p className="text-gray-500">Price: ₹ {item.price ? item.price.toFixed(2) : "0.00"}</p>
                                <p className="text-gray-500">Quantity: {item.quantity}</p>
                                <p className="font-semibold">
                                    Total: ₹ {getTotalPrice(item) ? getTotalPrice(item).toFixed(2) : "0.00"}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="text-right sticky bottom-0 bg-white min-w-full">
                        <h3 className="font-bold text-xl">
                            Grand Total: ₹ {getGrandTotal() ? getGrandTotal().toFixed(2) : "0.00"}
                        </h3>
                        <button className='p-2 bg-red-500 hover:bg-red-600 hover:scale-105 transition-all text-white rounded-lg mt-3 px-10'
                            onClick={() => {
                                {
                                    onHide()
                                    navigate('/cart');

                                }
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            )}
        </Dialog>
    );
};

export default CartDialog;
