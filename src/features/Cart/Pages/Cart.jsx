import React, { useEffect, useState } from 'react';
import LocalStorageService from '../../../services/localstorageService';
import { Link } from 'react-router-dom';
import EmptyCart from '../../../assets/emptyCart.svg';
import { toast } from 'react-toastify';
import { IoTrashBinSharp } from 'react-icons/io5';
import { Tooltip } from 'primereact/tooltip';
import { getCartData, updateCartData } from '../api';
import { API_RESPONSE_CODES } from '../../../constants/ApiResponseCodes';

function Cart() {
    const appUrl = import.meta.env.VITE_API_URL;
    const [cartData, setCartData] = useState([]);
    const { id } = LocalStorageService.getUserData() || {};

    // Fetch cart data
    const fetchCartData = async (id) => {
        try {
            const res = await getCartData(id);
            if (res.status === API_RESPONSE_CODES.OK) {
                setCartData(res.data.data);
            }
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    // Add product to the cart (increase quantity)
    const addProduct = async (item) => {
        try {
            const updatedItem = {
                user_id: item.user_id,
                product_id: item.product_id,
                quantity: item.quantity + 1, // Increment quantity by 1
            };

            const response = await updateCartData(item.id, updatedItem);

            if (response.status === 201) {
                setCartData(prevData =>
                    prevData.map(cartItem =>
                        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                    )
                );
                toast.success('Cart updated successfully');
            } else {
                toast.error('Failed to update cart');
            }
        } catch (error) {
            toast.error('Error updating cart');
            console.error('Error:', error);
        }
    };

    // Remove product from the cart (decrease quantity or remove item)
    const removeProduct = async (item) => {
        try {
            if (item.quantity > 1) {
                const updatedItem = {
                    user_id: item.user_id,
                    product_id: item.product_id,
                    quantity: item.quantity - 1, // Decrease quantity by 1
                };

                const response = await updateCartData(item.id, updatedItem);

                if (response.status === 201) {
                    setCartData(prevData =>
                        prevData.map(cartItem =>
                            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
                        )
                    );
                    toast.success('Cart updated successfully');
                } else {
                    toast.error('Failed to update cart');
                }
            } else {
                // Remove item completely if quantity is 1
                const response = await deleteCartData(item.id);

                if (response.status === 200) {
                    setCartData(prevData => prevData.filter(cartItem => cartItem.id !== item.id));
                    toast.success('Item removed from cart');
                } else {
                    toast.error('Failed to remove item from cart');
                }
            }
        } catch (error) {
            toast.error('Error updating cart');
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchCartData(id);
        }
    }, [id]);

    return (
        <div className="mx-10 bg-gradient-to-br from-[#f0f4f8] to-[#e2e8f0] p-10 rounded-xl shadow-lg mb-5">
            <div className="md:grid grid-cols-12 gap-8">
                {/* Shopping Cart Section */}
                <div className={`${cartData.length > 0 ? 'col-span-8' : 'col-span-12'}`}>
                    <div className="pb-6">
                        <h1 className="text-3xl font-semibold text-gray-800">Shopping Bag</h1>
                        <p className="text-gray-600">
                            <span className="font-semibold">{cartData?.length || 0} Items</span> in your bag
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        {cartData && cartData.length > 0 ? (
                            cartData.map((item, index) => (
                                <div key={index} className="md:grid grid-cols-12 gap-4 p-4 border-b last:border-b-0">
                                    <div className="col-span-7 flex items-center">
                                        <img
                                            src={`${appUrl}${item.Watch.image}`}
                                            className="w-28 h-28 object-cover rounded-lg shadow-md"
                                            alt="Product"
                                        />
                                        <div className="ml-6 flex flex-col justify-between">
                                            <h1 className="text-xl font-bold text-gray-700">{item.name}</h1>
                                            <p className="text-gray-600">Color: <span className="font-semibold">{item.color || 'Black'}</span></p>
                                            <p className="text-gray-600">Category: {item.category || 'Mens'}</p>
                                        </div>
                                    </div>
                                    <div className="col-span-2 flex flex-col items-center justify-center text-gray-700">
                                        <h2 className="text-sm font-medium">Price</h2>
                                        <p className="text-lg font-bold">₹ {item.Watch.price}</p>
                                    </div>
                                    <div className="col-span-2 flex flex-col items-center justify-center text-gray-700">
                                        <h2 className="text-sm font-medium">Quantity</h2>
                                        <div className="flex items-center border rounded-lg mt-1">
                                            <button className="px-3 py-1 bg-gray-100 text-gray-600"
                                                onClick={() => removeProduct(item)}>
                                                {item.quantity > 1 ? '-' : <IoTrashBinSharp className="text-red-500 remove_from_cart" />}
                                            </button>
                                            <Tooltip target=".remove_from_cart">
                                                <h1>Remove from Cart</h1>
                                            </Tooltip>
                                            <span className="px-4 py-1">{item.quantity}</span>
                                            <button className="px-3 py-1 bg-gray-100 text-gray-600"
                                                onClick={() => addProduct(item)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-span-1 flex flex-col items-center justify-center text-gray-700">
                                        <h2 className="text-sm font-medium">Total</h2>
                                        <p className="text-lg font-bold">₹ {item.Watch.price * item.quantity}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-20">
                                <img
                                    src={EmptyCart}
                                    alt="Empty Cart"
                                    className="mx-auto mb-5 h-32"
                                />
                                <h2 className="text-2xl font-semibold text-gray-700">Your Cart is Empty</h2>
                                <p className="text-gray-500 mt-2">Looks like you haven't added anything to your cart yet.</p>
                                <Link to="/products">
                                    <button className="mt-6 bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold py-3 px-5 rounded-lg shadow-lg hover:from-red-600 hover:to-rose-700">
                                        Start Shopping
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Checkout Section */}
                {cartData && cartData.length > 0 && (
                    <div className="col-span-4 mt-5 md:mt-0">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-10">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Coupon Code</h2>
                            <div className="flex flex-col space-y-4 justify-between text-gray-600 w-full">
                                <h1>Apply coupon and get 50 % off</h1>
                                <input type="text" className="w-full p-3 rounded-lg focus:outline-none bg-gray-100 font-semibold" />
                                <button className="bg-red-500 hover:bg-red-600 transition-all text-white p-3 rounded-lg font-semibold">Apply</button>
                            </div>
                            <hr className="my-4" />
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span className="font-bold">₹ {cartData.reduce((acc, item) => acc + item.Watch.price * item.quantity, 0)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 mt-2">
                                <span>Shipping</span>
                                <span className="font-bold">₹ 50</span>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between text-lg text-gray-800">
                                <span>Total</span>
                                <span className="font-bold">
                                    ₹ {cartData.reduce((acc, item) => acc + item.Watch.price * item.quantity, 0) + 50}
                                </span>
                            </div>
                            <Link to="/checkout">
                                <button className="w-full bg-red-500 text-white py-3 px-5 mt-4 rounded-lg font-semibold">
                                    Proceed to Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
