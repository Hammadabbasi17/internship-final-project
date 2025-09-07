"use client"
import Image from "next/image"

import { FaStar } from "react-icons/fa"
import { useEffect, useState } from "react"
import Link from "next/link"

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
const Product = () => {
    const [data, setData] = useState<types[]>([]);
    const [loading, setLoading] = useState(true);
    // State to track how many products to display
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = await fetch("https://fakestoreapi.com/products");

                const users: types[] = await api.json();

                setData(users);
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    if (loading) {
        return <p className="text-center text-gray-600">Loading users...</p>;
    }

    // Determine which products to display
    const displayedProducts = showAll ? data : data.slice(0, 10);

    return (
        <div>

            <div className="mt-[120px] w-full  sm:h-[150px] flex items-center flex-col">
                <div className="w-[80%] flex flex-col sm:flex-row ">
                    <div className="flex gap-2 items-center">
                        <div className="w-[20px] h-[40px] sm:ml-[36px]  bg-oranges"></div>
                        <h2 className="font-poppin text-oranges">Our Products</h2>

                    </div>
                </div>

                <div className="flex w-[76%]  mt-4 gap-16 items-center  flex-col sm:flex-row">
                    <h1 className="font-inter font-[600] text-[24px] sm:text-[36px] text-black">Explore Our Products</h1>

                </div>


            </div>

            {/* Exlore our Product */}



            <div className="w-full h-auto  flex justify-center items-center  overflow-hidden" >
                <div className="w-full xl:w-[90%] h-auto ">



                    {/* Large box 1 start */}
                    <div className="flex flex-wrap   justify-evenly items-center w-full h-auto pb-12 pt-11 gap-8">
                  
                        {displayedProducts.map((items) => (
                         <Link key={items.id} href={`products/${items.id}`}>


                            <div  className="w-[270px] h-auto flex-col  text-black justify-between items-center ">

                                {/* small box 1 */}


                                <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                                    <Image src={items.image} alt="loading pic" width={300} height={300} className="w-[270px] h-[250px] overflow-hidden" />
                                </div>

                                <div className="">

                                    <h2 className="text-[16px] font-[600] font-poppin pt-3">{items.title}</h2>
                                    <div className="flex gap-2">
                                        <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">${items.price}</button>

                                    </div>
                                    <div className="flex text-[20px] mt-2  items-center">
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <h1 className="pl-2">{items.rating.rate}</h1>  ({items.rating.count})
                                    </div>
                                </div>





                            </div>

                        </Link>
                        ))}




                    </div>

                    {/* large box 2 end */}
                    {/* Add the "View All Products" button here */}
                    {!showAll && (
                        <div className="w-full flex justify-center mt-8 mb-12">
                            <button
                                onClick={() => setShowAll(true)}
                                className="px-6 py-3 bg-oranges text-white font-semibold rounded-md hover:bg-dark-orange transition-colors duration-300"
                            >
                                View All Products
                            </button>
                        </div>
                    )}




                </div>

            </div>










        </div>
    )
}

export default Product
























// "use client"
// import Image from "next/image"
// import Cart7 from "../../../../images/Cart (7).png"
// import Cart8 from "../../../../images/Cart 8.png"
// import Cart9 from "../../../../images/laptop.png"
// import Cart10 from "../../../../images/shampo.png"
// import Cart11 from "../../../../images/Cart.png"
// import Cart12 from "../../../../images/Cart (1).png"
// import Cart13 from "../../../../images/Cart (2).png"
// import Cart14 from "../../../../images/Cart (3).png"
// import { FaStar } from "react-icons/fa"
// import { useEffect, useState } from "react"

// interface types {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     image: string;
//     rating: {
//         rate: number;
//         count: number;
//     }

// }
// const Product = () => {
//     const [data, setData] = useState<types[]>([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const api = await fetch("https://fakestoreapi.com/products");

//                 const users: types[] = await api.json();

//                 setData(users);
//             } catch (error) {
//                 console.error("Error fetching user data:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, []);
//     if (loading) {
//         return <p className="text-center text-gray-600">Loading users...</p>;
//     }

//     return (
//         <div>

//             <div className="mt-[120px] w-full  sm:h-[150px] flex items-center flex-col">
//                 <div className="w-[80%] flex flex-col sm:flex-row ">
//                     <div className="flex gap-2 items-center">
//                         <div className="w-[20px] h-[40px] sm:ml-[36px]  bg-oranges"></div>
//                         <h2 className="font-poppin text-oranges">Our Products</h2>

//                     </div>
//                 </div>

//                 <div className="flex w-[76%]  mt-4 gap-16 items-center  flex-col sm:flex-row">
//                     <h1 className="font-inter font-[600] text-[24px] sm:text-[36px] text-black">Explore Our Products</h1>

//                 </div>


//             </div>

//             {/* Exlore our Product */}



//             <div className="w-full h-auto  flex justify-center items-center  overflow-hidden" >
//                 <div className="w-full xl:w-[90%] h-auto ">



//                     {/* Large box 1 start */}
//                     <div className="flex flex-wrap   justify-evenly items-center w-full h-auto pb-12 pt-11 gap-8">
//                         {data.map((items, index) => (


//                             <div key={index} className="w-[270px] h-auto flex-col  text-black justify-between items-center ">

//                                 {/* small box 1 */}


//                                 <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
//                                     <Image src={items.image} alt="loading pic" width={300} height={300} className="w-[270px] h-[250px] overflow-hidden" />
//                                 </div>

//                                 <div className="">

//                                     <h2 className="text-[16px] font-[600] font-poppin pt-3">{items.title}</h2>
//                                     <div className="flex gap-2">
//                                         <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">${items.price}</button>

//                                     </div>
//                                     <div className="flex text-[20px] mt-2  items-center">
//                                         <FaStar className="text-yellow-400" />
//                                         <FaStar className="text-yellow-400" />
//                                         <FaStar className="text-yellow-400" />
//                                         <FaStar className="text-yellow-400" />
//                                         <FaStar className="text-yellow-400" />
//                                         <h1 className="pl-2">{items.rating.rate}</h1>  ({items.rating.count})
//                                     </div>
//                                 </div>





//                             </div>


//                         ))}




//                     </div>

//                     {/* large box 2 end */}










//                 </div>

//             </div>










//         </div>
//     )
// }

// export default Product