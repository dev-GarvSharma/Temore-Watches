import React from 'react'

const Footer = () => {
	return (
		<div className='mx-auto md:p-15 bg-[#111111] text-white'>
			<div className='md:grid grid-cols-4 md:px-32 px-10 py-10'>
				<div>
					<h1 className='text-3xl'>Timoré</h1>
					<p className='pt-2'>
						There are many variations passages of Lorem Ipsum
						available, but the majority have
					</p>
					<br />
					<h1 className='text-3xl'>Social</h1>
					<div className='flex gap-2 text-xl pt-2'>
						<i className="fa-brands fa-facebook hover:text-yellow-400"></i>
						<i className="fa-brands fa-twitter hover:text-yellow-400"></i>
						<i className="fa-brands fa-linkedin hover:text-yellow-400"></i>
						<i className="fa-brands fa-instagram hover:text-yellow-400"></i>
					</div>
				</div>
				<div className='md:my-0 my-5'>
					<h1 className='text-3xl'>Quick Links</h1>
					<ul className='pl-1 pt-2 cursor-pointer'>
						<li className='hover:text-yellow-400'>Home</li>
						<li className='hover:text-yellow-400'>About</li>
						<li className='hover:text-yellow-400'>Shop</li>
						<li className='hover:text-yellow-400'>Contact</li>
					</ul>
				</div>

				<div>
					<h1 className='text-3xl'>Address</h1>
					<p className='pt-2'>+99 (0) 101 0000 888 Patricia C. Amedee <br />4401 Waldeck Street Grapevine Nashville, Tx 76051</p>
				</div>

				<div className='md:my-0 my-5'>
					<h1 className='text-3xl'>GET DISCOUNT 30% OFF</h1>
					<p className='pt-2'>Get 20% discount with notified about the latest news and updates. No spam, we promise!</p>
				</div>
			</div>
		</div>
	)
}
export default Footer
