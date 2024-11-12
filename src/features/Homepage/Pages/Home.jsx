import React, { useEffect, useState } from 'react'
import icon1 from '../../../assets/Icons/noun_delivery_1095359.svg'
import icon2 from '../../../assets/Icons/noun_guarantee_952398.svg'
import icon3 from '../../../assets/Icons/Group-995.svg'
import icon4 from '../../../assets/Icons/noun_Wallet_745515.svg'
import Image1 from '../../../assets/Group-1174-400x570.png'
import Image2 from '../../../assets/Group-1175-400x570.png'
import Image3 from '../../../assets/Group-1176-400x570.png'
import Banner from '../../../assets/banner.png'
import { allWatches } from '../api'
import { API_RESPONSE_CODES } from '../../../constants/ApiResponseCodes'
import LocalStorageService from '../../../services/localstorageService'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const [watch, setWatch] = useState(null)
	const appUrl = import.meta.env.VITE_API_URL;
	const navigate = useNavigate()

	const fetchWatchData = async () => {
		try {
			const res = await allWatches()
			if (res.status == API_RESPONSE_CODES.OK) {
				setWatch(res.data.data)
			}
		} catch (error) {
			console.log(error);

		}
	}
	const handleOnClick = (item) => {
		let cartData = LocalStorageService.getCartData();
		cartData = cartData ? JSON.parse(cartData) : [];

		const existingItemIndex = cartData.findIndex(cartItem => cartItem.id === item.id);
		if (existingItemIndex > -1) {
			cartData[existingItemIndex].quantity += 1;
		} else {
			cartData.push({
				id: item.id,
				name: item.name,
				price: item.price,
				image: item.image,
				quantity: 1
			});
		}

		LocalStorageService.setCartData(JSON.stringify(cartData)); // This will stringify cartData before saving
		toast.success("Item added to cart");
	};

	useEffect(() => {
		fetchWatchData()
	}, [])

	return (
		<div className='lg:px-32 px-5 md:px-16'>
			<div className='bg-[#EEEEEE]  h-[750px] rounded-3xl'>
				<div className='flex justify-center items-center relative'>
					<img src={Banner} className='absolute top-0 lg:-left-0 md:right-5' />
					<div className='absolute top-44 right-[150px] lg:block hidden'>
						<h1 className='bg-red-500 text-white text-2xl p-2 font-semibold absolute top-5'>TIMORE</h1>
						<h1 className='text-[200px] font-bold relative'>WATCHES</h1>
						<h1 className='text-xl bg-[#fec62e] p-2 min-w-full font-semibold px-5 text-right absolute bottom-5'>All New Trending Collection Available Here</h1>
					</div>
				</div>
			</div>
			<div className='md:grid lg:grid-cols-4 md:grid-cols-2 h-[350px] md:gap-10 flex flex-col gap-4 mb-[800px] md:mb-[450px] lg:mb-0 mt-5'>
				<div className='col-span-1 bg-[#444444] rounded-3xl flex flex-col justify-center items-center relative' >
					<img src={Image1} className='h-80 mt-10 ml-5' />
					<button className='bg-white hover:scale-105 p-2 text-black px-16 rounded-lg absolute bottom-3 hover:bg-red-500 hover:text-white transition-all'>Browse</button>
				</div>
				<div className='col-span-1 bg-[#fec62e] rounded-3xl flex justify-center items-center relative' >
					<img src={Image2} className='h-80 mt-10 ml-5' />
					<button className='bg-white hover:scale-105 p-2 text-black px-16 rounded-lg absolute bottom-3 hover:bg-red-500 hover:text-white transition-all'>Browse</button>
				</div>
				<div className='col-span-2 bg-[#f42c37] rounded-3xl flex justify-center items-center relative' >
					<img src={Image2} className='h-80 mt-10 ml-5' />
					<button className='bg-white hover:scale-105 p-2 text-black px-16 rounded-lg absolute bottom-3 hover:bg-red-500 hover:text-white transition-all'>Browse</button>
				</div>
			</div>
			<div className='md:grid lg:grid-cols-4 md:grid-cols-2 h-[350px] lg:gap-10 flex flex-col gap-4 mb-[800px] md:mb-[450px] lg:my-8'>
				<div className='col-span-2 bg-[#cfcfcf] rounded-3xl flex flex-col justify-center items-center relative' >
					<img src={Image1} className='h-80 mt-10 ml-5' />
					<button className='bg-white hover:scale-105 p-2 text-black px-16 rounded-lg absolute bottom-3 hover:bg-red-500 hover:text-white transition-all'>Browse</button>
				</div>
				<div className='col-span-1 bg-[#2dd06f] rounded-3xl flex justify-center items-center relative' >
					<img src={Image2} className='h-80 mt-10 ml-5' />
					<button className='bg-white hover:scale-105 p-2 text-black px-16 rounded-lg absolute bottom-3 hover:bg-red-500 hover:text-white transition-all'>Browse</button>
				</div>
				<div className='col-span-1 bg-[#1a9dff] rounded-3xl flex justify-center items-center relative' >
					<img src={Image2} className='h-80 mt-10 ml-5' />
					<button className='bg-white hover:scale-105 p-2 text-black px-16 rounded-lg absolute bottom-3 hover:bg-red-500 hover:text-white transition-all'>Browse</button>
				</div>
			</div>
			<div className='lg:flex justify-between my-10 px-2 grid grid-cols-2 gap-2'>
				<div>
					<div className='flex justify-between'>
						<div className='flex gap-5'>
							<div>
								<img src={icon1} alt='' />
							</div>
							<div>
								<h1 className='font-semibold'>Free Shipping</h1>
								<p className='text-sm text-gray-400'>
									Free Shipping On All Order
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className='flex justify-between'>
						<div className='flex gap-5'>
							<div>
								<img src={icon2} alt='' />
							</div>
							<div>
								<h1 className='font-semibold'>
									Money Guarantee
								</h1>
								<p className='text-sm text-gray-400'>
									30 Day Money Back
								</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div className='flex justify-between'>
						<div className='flex gap-5'>
							<div>
								<img src={icon3} alt='' />
							</div>
							<div>
								<h1 className='font-semibold'>
									Online Support 24/7
								</h1>
								<p className='text-sm text-gray-400'>
									Technical Support 24/7
								</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div className='flex justify-between'>
						<div className='flex gap-5'>
							<div>
								<img src={icon4} alt='' />
							</div>
							<div>
								<h1 className='font-semibold'>
									Secure Payment
								</h1>
								<p className='text-sm text-gray-400'>
									All Cards Accepted
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-[350px] bg-[#f42c37] rounded-3xl watchBanner flex watchBanner text-xl items-center relative">
				{/* <img src={Banner} className='absolute left-48 h-96 ' /> */}
				<div className="text-white px-4 pl-20 ">
					<h1 className="text-3xl md:text-5xl font-bold mb-2">
						Discover Timeless Elegance
					</h1>
					<p className="text-xl md:text-2xl mb-4">
						Find your perfect watch to match your style and personality.
					</p>
					<button className="bg-white text-[#f42c37] font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition">
						Shop Now
					</button>
				</div>
				{/* <img src={Banner} className='absolute right-48 h-96 ' /> */}
			</div>

			<div className='text-center my-10'>
				<h1 className='text-4xl font-bold'>Best Seller Products</h1>
				<p className='text-gray-400 font-semibold'>
					Here are our Best Selling Products
				</p>
			</div>
			<div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5">
				{watch && watch.length > 0 ?
					watch.map((item) => (
						<div key={item.id} className="hover:shadow-xl transition-all rounded-lg">
							<img
								src={`${appUrl}${item.image}`}
								alt={item.name}
								className="rounded-t-lg w-full h-68 object-cover cursor-pointer"
								onClick={() => navigate(`product/details/${item.id}`)}
							/>
							<div className="flex justify-between items-center p-2">
								<div>
									<h3 className="text-lg font-semibold">{item.name}</h3>
									<p className="text-gray-600">₹ {item.price}</p>
								</div>
								<button
									className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition"
									onClick={() => handleOnClick(item)}
								>
									Add to Cart
								</button>
							</div>
						</div>
					)) : (
						<p className="col-span-full text-center text-gray-500">No watches available</p>
					)}
			</div>

			<br />
			<div className='h-[350px] bg-[#57d68b] rounded-3xl watchBanner'></div>
			<br />
		</div>
	)
}

export default Home