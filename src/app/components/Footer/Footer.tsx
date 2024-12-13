import { Input } from "@/components/ui/input"
import Image from "next/image"
import arrow from "../../../../images/arrow.png"
import rcode from "../../../../images/Qr Code@2x.png"
import google from "../../../../images/GooglePlay.png"
import appstore from "../../../../images/download-appstore.png"
import React from 'react'
import { GrFacebookOption } from "react-icons/gr"
import { IoLogoInstagram } from "react-icons/io"
import { RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri"

const Footer = () => {
    return (
        <div >
            <div className="w-full h-[1500px] lg:h-[440px] mt-[150px] flex justify-center items-center bg-black text-white">
                <div className="flex lg:flex-row flex-col lg:justify-around justify-center items-center lg:items-start  w-[90%] gap-8 lg:gap-0 ">

                    <div className="w-[217px] flex  flex-col justify-center lg:justify-start gap-6 ">
                        <h1 className='font-inter font-[700] text-[24px] text-center lg:text-left'>Exclusive</h1>
                        <h1 className='font-poppin text-center text-[20px] font-[500] lg:text-left'>Subscribe</h1>
                        <h3 className=" text-center lg:text-left font-poppin">Get 10% off your first order</h3>
                        <div className="flex  items-center">
                            <Input type="email" placeholder="Enter your email" />
                            <Image src={arrow} alt="arrow" className="ml-[-31px]" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 w-[175px]">

                        <h2 className="text-[24px] font-[700] text-center lg:text-left font-inter">Support</h2>
                        <h3 className=" text-center lg:text-left font-poppin">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h3>
                        <h3 className=" text-center lg:text-left font-poppin">exclusive@gmail.com</h3>
                        <h3 className=" text-center lg:text-left font-poppin">+88015-88888-9999</h3>
                        {/* <h3 className=" text-center lg:text-left">Design</h3>
                    <h3 className=" text-center lg:text-left">Programming</h3> */}
                    </div>










                    <div className="flex flex-col gap-6 w-[123px]">
                        <h2 className="text-[24px] font-[700] text-center lg:text-left font-inter">Account</h2>
                        <h3 className=" text-center lg:text-left font-poppin">My Account</h3>
                        <h3 className=" text-center lg:text-left font-poppin">Login / Register</h3>
                        <h3 className=" text-center lg:text-left font-poppin">Cart</h3>
                        <h3 className=" text-center lg:text-left font-poppin">Wishlist</h3>
                        <h3 className=" text-center lg:text-left font-poppin">Shop</h3>
                    </div>







                    <div className="flex flex-col gap-6 w-[120px]">

                        <h2 className="text-[24px] font-[700] text-center lg:text-left font-inter">Quick Link</h2>
                        <h3 className=" text-center lg:text-left font-poppin">Privacy Policy</h3>
                        <h3 className=" text-center lg:text-left font-poppin">Terms Of Use</h3>
                        <h3 className=" text-center lg:text-left font-poppin">FAQ</h3>
                        <h3 className=" text-center lg:text-left font-poppin">Contact</h3>

                    </div>




                    <div className="flex flex-col gap-6 w-[198px]">

                        <h2 className="text-[24px] font-[700] text-center lg:text-left font-inter">Download App</h2>
                        <h3 className=" text-center lg:text-left font-poppin">Save $3 with App New User Only</h3>
                        <div className="w-[198px] h-[84px]  flex gap-2">
                            <div className="w-[80px] h-[80px] bg-slate-400">
                                <Image src={rcode} alt="code" />
                            </div>
                            <div>
                                <div className="mb-2">
                                    <Image src={google} alt="google" />
                                </div>
                                <div>
                                    <Image src={appstore} alt="appstore" />
                                </div>
                            </div>

                        </div>

                        <div className="flex gap-6">
                            <GrFacebookOption className="text-[24px]" />

                            <RiTwitterFill className="text-[24px]" />
                            <IoLogoInstagram className="text-[24px]" />
                            <RiLinkedinBoxFill className="text-[24px]" />


                        </div>

                    </div>
















                </div>
            </div>
            <div className="w-full h-auto  flex justify-center items-center bg-black text-white ">
                <div className="pb-8  items-center  border-black">
                    
                   <h2 className="text-neutral-700">Copyright Rimel 2022. All right reserved</h2>

                   

                </div>

            </div>
        </div>

    )
}

export default Footer