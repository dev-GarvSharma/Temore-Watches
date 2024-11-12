import React, { useState } from 'react'
import { FaHeart, FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { Sidebar } from 'primereact/sidebar';
import { Dialog } from 'primereact/dialog';
import { useSelector } from 'react-redux';
import { getLoggedIn } from '../../features/Auth/authSlice';
import CartDialog from '../../features/Components/CartDialog';
import LocalStorageService from '../../services/localstorageService';
import WishlistDialog from '../../features/Components/WishlistDialog';

const Header = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [searchBar, setSearchBar] = useState(0)
	const navigate = useNavigate()
	const [visibleRight, setVisibleRight] = useState(false)
	const [visible, setVisible] = useState(false);
	const [visibleCart, setVisibleCart] = useState(false);
	const isLoggedIn = useSelector(getLoggedIn)
	const [isWishlistVisible, setIsWishlistVisible] = useState(false)

	const getArrayCount = () => {
		const storedArray = JSON.parse(LocalStorageService.getCartData() || "[]"); // Parse the JSON string
		return Array.isArray(storedArray) ? storedArray.length : 0;
	};



	const handleOnClick = () => {
		if (isLoggedIn) {
			navigate('/dashboard')
		} else {
			navigate('/login')
		}
	}

	return (
		<div className='flex items-center justify-between lg:px-32 h-24 px-5'>
			<div className='flex items-center'>
				<span className='text-red-500 font-bold text-3xl mr-10 cursor-pointer'
					onClick={() => {
						{ navigate('/'); setActiveIndex(null) }
					}}
				>
					<h1>Timoré</h1>
					<p className='text-sm text-center text-black relative -top-2'>watches</p>
				</span>
				<div className='md:flex gap-5 text-lg font-semibold cursor-pointer hidden'>
					<span
						className={`transition-all ${activeIndex === 0 ? 'text-black' : 'text-gray-400'} hover:text-black hover:scale-105`}
						onClick={() => setActiveIndex(0)}
					>
						All Watches
					</span>
					<span
						className={`transition-all ${activeIndex === 1 ? 'text-black' : 'text-gray-400'} hover:text-black hover:scale-105`}
						onClick={() => setActiveIndex(1)}
					>
						Mens
					</span>
					<span
						className={`transition-all ${activeIndex === 2 ? 'text-black' : 'text-gray-400'} hover:text-black hover:scale-105`}
						onClick={() => setActiveIndex(2)}
					>
						Womens
					</span>
					<span
						className={`transition-all ${activeIndex === 3 ? 'text-black' : 'text-gray-400'} hover:text-black hover:scale-105`}
						onClick={() => setActiveIndex(3)}
					>
						<Link to="/products">Products</Link>
					</span>
				</div>
			</div>
			<div className='md:flex gap-5 items-center text-lg text-black font-semibold cursor-pointer hidden'>
				{searchBar === 1 ? (
					<span className='flex'>
						<input type='text' className='border rounded-full p-2 font-normal focus:outline-red-500 px-2 relative text-sm left-6' placeholder='Enter your search' />
						<FaSearch className='relative -left-2 top-2 text-red-500' onClick={() => setSearchBar(0)} />
					</span>
				) : (
					<span className='flex items-center gap-1'>
						<FaSearch onClick={() => setSearchBar(1)} />
					</span>
				)}
				<span className='flex items-center gap-1 hover:text-red-500'
					onClick={() => setIsWishlistVisible(true)}
				>
					<FaHeart /> Wishlist
				</span>
				<span className='flex items-center gap-1 hover:text-green-500 relative'
					onClick={() => setVisibleCart(true)}
				>
					<FaShoppingBag /> Cart
					{getArrayCount() > 0 ? (
						<span className='absolute top-0 -right-4 bg-red-500 h-4 w-4 rounded-full text-xs text-white flex items-center justify-center'>
							{getArrayCount()}
						</span>
					) : ''}
				</span>
				<span className='flex items-center gap-1 hover:text-[#1a9dff]'
					onClick={() => {
						handleOnClick()
					}}
				>
					<FaUser /> {isLoggedIn == true ? 'Dashboard' : 'Login'}
				</span>
			</div>
			<div className='text-4xl md:hidden'>
				<IoMdMenu onClick={() => setVisibleRight(true)} />
				<Sidebar
					visible={visibleRight}
					blockScroll={true}
					onHide={() => setVisibleRight(false)}
					pt={{ header: 'hidden' }}
					position="right"
					className="text-lg text-black backdrop-blur-md shadow-2xl rounded-l-2xl"
				>
					{/* Close Button */}
					<button
						className="absolute right-4 top-4 text-2xl cursor-pointer hover:scale-110 transition-transform duration-200 text-gray-300"
						onClick={() => setVisibleRight(false)}
					>
						<i className="fa-solid fa-times"></i>
					</button>

					{/* Sidebar Content */}
					<div className="flex flex-col pt-20 px-6 space-y-8">

						{/* Explore Section */}
						<div className="space-y-4">
							<h2 className="text-black font-semibold text-sm tracking-wider">EXPLORE</h2>
							<div className="flex items-center space-x-4 group transition-transform duration-300">
								<i className="fa-solid fa-clock text-xl text-indigo-500 group-hover:scale-110"></i>
								<Link to="/" className="hover:text-indigo-600 text-lg group-hover:translate-x-2 transition-all duration-300">All Watches</Link>
							</div>
							<div className="flex items-center space-x-4 group">
								<i className="fa-solid fa-male text-xl text-blue-500 group-hover:scale-110"></i>
								<Link to="/mens-watches" className="hover:text-blue-600 text-lg group-hover:translate-x-2 transition-all duration-300">Men's Watches</Link>
							</div>
							<div className="flex items-center space-x-4 group">
								<i className="fa-solid fa-female text-xl text-pink-500 group-hover:scale-110"></i>
								<Link to="/womens-watches" className="hover:text-pink-500 text-lg group-hover:translate-x-2 transition-all duration-300">Women's Watches</Link>
							</div>
						</div>

						{/* Wishlist and Cart */}
						<div className="space-y-4">
							<h2 className="text-black font-semibold text-sm tracking-wider">YOUR ITEMS</h2>
							<div className="flex items-center space-x-4 group">
								<i className="fa-solid fa-heart text-xl text-red-500 group-hover:scale-110"></i>
								<Link to="/wishlist" className="hover:text-red-600 text-lg group-hover:translate-x-2 transition-all duration-300">Wishlist</Link>
							</div>
							<div className="flex items-center space-x-4 group">
								<i className="fa-solid fa-shopping-cart text-xl text-green-500 group-hover:scale-110"></i>
								<Link to="/cart" className="hover:text-green-600 text-lg group-hover:translate-x-2 transition-all duration-300">Cart</Link>
							</div>
						</div>
					</div>

					{/* Login Button */}
					<button
						onClick={() => {
							handleOnClick()
						}}
						className="text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-orange-500 w-11/12 py-3 rounded-full absolute bottom-8 left-4 shadow-lg transform hover:scale-105 transition-transform duration-300"
					>
						{isLoggedIn == true ? 'Dashboard' : 'Login'}
					</button>
				</Sidebar>
				<Dialog
					header="Login"
					visible={visible}
					style={{ width: '40vw' }}
					onHide={() => { if (!visible) return; setVisible(false); }}
					draggable={false}
					resizable={false}
					blockScroll={true}
				>
					<p className="m-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</Dialog>
				<CartDialog
					visible={visibleCart}
					onHide={() => setVisibleCart(false)}
				/>
				<WishlistDialog
					visible={isWishlistVisible}
					onHide={() => setIsWishlistVisible(false)}
				/>
			</div>
		</div>
	)
}

export default Header
