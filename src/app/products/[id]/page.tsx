"use client"
import Image from "next/image"

import { useEffect, useState } from "react";
import Selling from "@/app/components/Selling/Selling";

import { FaMinus, FaPlus, FaStar } from "react-icons/fa";


interface types {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }

}

const Shop = ({
    params,
}: {
    params: { id: string };
}) => {
    const [data, setData] = useState<types | null>(null);
    const [loading, setLoading] = useState(true);




    useEffect(() => {
        const showUsers = async () => {
            try {
                const api = await fetch(
                    `https://fakestoreapi.com/products/${params.id}`
                );
                const user = await api.json();
                console.log(user);
                setData(user);
                console.log(params);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        showUsers();
    }, [params]);
    if (loading) {
        return <p className="text-center text-gray-600">Loading users...</p>;
    }
    if (!data) {
        return <p className="text-center text-gray-600">User  not found.</p>;
    }

    return (
        <div>
            <div className='w-full h-auto flex justify-center items-center mt-[84px] pb-[100px]'>
                <div className='w-[95%] lg:w-[90%] h-auto flex flex-row-reverse justify-around items-center gap-7  productdetail'>
                            
                    <div className=' w-auto h-auto lg:w-[541px]  flex  flex-col justify-between gap-10'>
                        <div>
                            <h1 className='text-left text-[32px] font-[700] sm:text-[40px]'>{data.title}</h1>
                            <div className="flex text-[20px] mt-2  items-center">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <h1 className="pl-2">{data.rating.rate}</h1>  <span className="pl-2">Out of  ({data.rating.count})</span>
                            </div>

                            <button className="w-[171px] h-[52px] text-[16px] text-white mt-8 border bg-black border-black rounded-3xl hover:bg-transparent hover:text-black transition-all duration-500"> ${data.price} USD</button>
                        </div>
                        <h1 className='sm:text-[20px]'>{data.description}</h1>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Qty</span>
                                <button className="border-2 border-gray-300  w-8 h-8 flex justify-center items-center"><FaMinus /></button>
                                
                                <button className="border-2 border-gray-300 ml-9  w-8 h-8 flex justify-center items-center bg-oranges text-white" ><FaPlus /></button >

                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                         

                                    </span>
                                   
                                    
                                </div>
                            </div>
                        </div>

                          
                        <button className="px-6 py-3 bg-oranges text-white font-semibold rounded-md hover:bg-dark-orange transition-colors duration-300">Add To cart</button>

                    </div>
                    <div>
                        <Image src={data.image} alt='chair' width={400} height={500} />
                    </div>
                </div>

            </div>


            {/* Features product */}



            {/* features product section */}
            <Selling />


        </div>
    )
}

export default Shop