import React, { useEffect, useState } from 'react'
import { Paginator } from 'primereact/paginator';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useNavigate } from 'react-router-dom';
import { allWatches } from '../../Homepage/api';
import { API_RESPONSE_CODES } from '../../../constants/ApiResponseCodes';
import { toast } from 'react-toastify';
import LocalStorageService from '../../../services/localstorageService';
import { Skeleton } from 'primereact/skeleton';
import NoData from '../../../assets/noData.jpg'
import ProductSkelton from '../../Components/ProductSkelton';


function Products() {
    const [first, setFirst] = useState(0);
    const [loading, setLoading] = useState(false)
    const [rows, setRows] = useState(10);
    const [count, setCount] = useState('')
    const navigate = useNavigate()
    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };
    const [watches, setWatches] = useState('')
    const appUrl = import.meta.env.VITE_API_URL;

    const fetchWatches = async () => {
        setLoading(true)
        try {
            const res = await allWatches()
            if (res.status == API_RESPONSE_CODES.OK) {
                setWatches(res.data.data)
                setCount(res.data.meta.total_records)
            }
        } catch (error) {
            console.log(error);

        }
        setLoading(false)
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
        fetchWatches()
    }, [])
    return (
        <div>
            <div className='h-[180px] bg-[#dddbdb] flex items-center justify-center'>
                <div>
                    <h1 className='text-md px-2'>
                        <span className='hover:text-red-500 cursor-pointer hover:underline'
                            onClick={() => {
                                navigate('/')
                            }}
                        >Home </span> <i className="fa-solid fa-greater-than mx-2"></i>   Products</h1>
                    <h1 className='text-4xl font-bold'>Products</h1>
                </div>
            </div>
            <br />
            <div className='lg:px-32 md:grid lg:grid-cols-4 mx-10 '>
                <div className='col-span-1 md:px-2'>
                    <Accordion activeIndex={0}>
                        <AccordionTab header="Premium Watches">
                            <ul className='cursor-pointer'>
                                <li>Casio</li>
                                <li>Fastrack</li>
                                <li>Omega</li>
                                <li>Timore</li>
                            </ul>
                        </AccordionTab>
                        <AccordionTab header="Price Range">

                        </AccordionTab>
                    </Accordion>
                </div>
                <div className='col-span-3'>
                    <h1 className='text-4xl font-bold'>Shop</h1>
                    <p className='py-1 pl-1'>Showing 1–{count || 9} of {count || 10} results Sort by popularity</p>
                    {loading ? <ProductSkelton /> : (
                        <div className='md:grid grid-cols-3 gap-5 pt-5'>
                            {watches && watches.length > 0 ? (
                                watches.map((item, index) => (
                                    <div key={index} className="rounded-3xl relative">
                                        <img src={`${appUrl}${item.image}`} alt={item.name} className="rounded-t-3xl"
                                            onClick={() => {
                                                navigate(`/product/details/${item.id}`)
                                            }}
                                        />
                                        <div className="flex items-center justify-between px-2 py-4"

                                        >
                                            <div className="p-2">
                                                <h1 className="font-bold text-lg">{item.name}</h1>
                                                <p className="text-gray-400 font-semibold text-lg">{item.price}</p>
                                            </div>
                                            <div>
                                                <button className="p-2 bg-red-500 text-white rounded-full px-3 hover:scale-105 transition-all"
                                                    onClick={() => {
                                                        handleOnClick(item)
                                                    }
                                                    }
                                                >
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 col-span-3">
                                    <div className="p-8 flex flex-col items-center justify-center text-center">
                                        <div className="bg-gray-100 p-6 rounded-full">
                                            <img src={NoData} alt="No watches icon" className="w-24 h-24 opacity-80" />
                                        </div>
                                        <h2 className="mt-6 text-3xl font-semibold text-gray-800">No Watches Available</h2>
                                        <p className="mt-4 text-gray-600 text-lg">
                                            It seems we're currently out of stock. Check back soon for our latest collection!
                                        </p>
                                        <button
                                            className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 shadow-md transition-transform transform hover:scale-105"
                                            onClick={() => {
                                                navigate('/')
                                            }}
                                        >
                                            Explore Our Collection
                                        </button>
                                    </div>
                                </div>


                            )}
                        </div>
                    )}
                    <div className="card">
                        <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
