import Image from "next/image"
import Cart7 from "../../../../images/Cart (7).png"
import Cart8 from "../../../../images/Cart 8.png"
import Cart9 from "../../../../images/laptop.png"
import Cart10 from "../../../../images/shampo.png"
import Cart11 from "../../../../images/Cart.png"
import Cart12 from "../../../../images/Cart (1).png"
import Cart13 from "../../../../images/Cart (2).png"
import Cart14 from "../../../../images/Cart (3).png"
import { FaStar } from "react-icons/fa"

const Product = () => {
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
                <div className="w-full xl:w-[80%] h-auto ">



                    {/* Large box 1 start */}
                    <div className="flex flex-wrap   justify-evenly items-center w-full h-auto pb-12 pt-11 gap-8">
                        {/* box one */}
                        <div className="w-[270px] h-auto flex-col  text-black justify-between items-center ">






                            {/* small box 1 */}


                            <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                                <Image src={Cart7} alt="Cart7" />
                            </div>

                            <div className="">

                                <h2 className="text-[16px] font-[600] font-poppin pt-3">HAVIT HV-G92 Gamepad</h2>
                                <div className="flex gap-2">
                                    <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                </div>
                                <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div>
                            </div>





                        </div>




                        {/* box one end */}




                        {/* box two start */}

                        <div className="w-[270px]  h-auto  flex-col  text-black justify-between items-center">



                            <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                                <Image src={Cart8} alt="Cart8" />
                            </div>

                            <div className="">

                                <h2 className="text-[16px] font-[600] font-poppin pt-3">AK-900 Wired Keyboard</h2>
                                <div className="flex gap-2">
                                    <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                </div>
                                <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div>
                            </div>

                        </div>





                        {/* box two end */}


                        {/* box three start */}

                        <div className="w-[270px]  h-auto flex-col  text-black justify-between items-center">



                            <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                                <Image src={Cart9} alt="Cart9" />
                            </div>

                            <div className="">

                                <h2 className="text-[16px] font-[600] font-poppin pt-3">IPS LCD Gaming Monitor</h2>
                                <div className="flex gap-2">
                                    <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                </div>
                                <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div>
                            </div>

                        </div>
                        {/* box three end */}



                        {/* box four start */}
                        <div className="w-[270px]  h-auto  flex-col  text-black justify-between items-center">



                            <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                                <Image src={Cart10} alt="Cart10" />
                            </div>

                            <div className="">

                                <h2 className="text-[16px] font-[600] font-poppin pt-3">S-Series Comfort Chair </h2>
                                <div className="flex gap-2">
                                    <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                </div>
                                <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div>
                            </div>

                        </div>
                        {/* box four end */}


                    

                       {/* large box 1 end */}

                   
                      {/* Large box 2 start */}
                    
                        {/* box one */}
                        <div className="w-[270px] h-auto flex-col  text-black justify-between items-center">






                            {/* small box 1 */}


                            <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                                <Image src={Cart11} alt="Cart11" />
                            </div>

                            <div className="">

                                <h2 className="text-[16px] font-[600] font-poppin pt-3">HAVIT HV-G92 Gamepad</h2>
                                <div className="flex gap-2">
                                    <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                </div>
                                <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div>
                            </div>





                        </div>




                        {/* box one end */}




                        {/* box two start */}

                        <div className="w-[270px]  h-auto  flex-col  text-black justify-between items-center">



                            <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                                <Image src={Cart12} alt="Cart12" />
                            </div>

                            <div className="">

                                <h2 className="text-[16px] font-[600] font-poppin pt-3">AK-900 Wired Keyboard</h2>
                                <div className="flex gap-2">
                                    <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                </div>
                                <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div>
                            </div>

                        </div>





                        {/* box two end */}


                        {/* box three start */}

                        <div className="w-[270px]  h-auto flex-col  text-black justify-between items-center">



                            <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                                <Image src={Cart13} alt="Cart13" />
                            </div>

                            <div className="">

                                <h2 className="text-[16px] font-[600] font-poppin pt-3">IPS LCD Gaming Monitor</h2>
                                <div className="flex gap-2">
                                    <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                </div>
                                <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div>
                            </div>

                        </div>
                        {/* box three end */}



                        {/* box four start */}
                        <div className="w-[270px]  h-auto  flex-col  text-black justify-between items-center">



                            <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                                <Image src={Cart14} alt="Cart14" />
                            </div>

                            <div className="">

                                <h2 className="text-[16px] font-[600] font-poppin pt-3">S-Series Comfort Chair </h2>
                                <div className="flex gap-2">
                                    <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                </div>
                                <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div>
                            </div>

                        </div>
                        {/* box four end */}


                    </div>

                    {/* large box 2 end */}










                </div>

            </div>










        </div>
    )
}

export default Product