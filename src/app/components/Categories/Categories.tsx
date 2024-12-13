
import { RxMobile } from "react-icons/rx";
import React from 'react'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { PiHeadphonesLight, PiWatchThin } from 'react-icons/pi'
import { CiCamera } from 'react-icons/ci'
import { VscGame } from 'react-icons/vsc'

const Categories = () => {
    return (
        <div>
            <div className="mt-[120px] w-full  sm:h-[150px] flex items-center flex-col">
                <div className="w-[80%] flex flex-col sm:flex-row ">
                    <div className="flex gap-2 items-center">
                        <div className="w-[20px] h-[40px] sm:ml-[36px]  bg-oranges"></div>
                        <h2 className="font-poppin text-oranges">Categories&quot;s</h2>

                    </div>
                </div>

                <div className="flex w-[76%]  mt-4 gap-16 items-center  flex-col sm:flex-row">
                    <h1 className="font-inter font-[600] text-[24px] sm:text-[36px] text-black">Browse By Category</h1>

                </div>


            </div>


            <div className='w-full h-auto flex justify-center items-center pb-20 mt-8 sm:mt-0'>
                <div className='w-full sm:w-[76%] flex justify-center sm:justify-between items-center flex-wrap h-[500px] xl:h-auto gap-4 cat'>
                    <div className='w-[170px] h-[145px] border border-gray-500 rounded-[4px] flex flex-col justify-evenly items-center bg-transparent hover:bg-oranges transition-all duration-500 delay-75 hover:text-white'>
                        <RxMobile className='w-[56px] h-[56px]' />

                        <h1 className='font-poppin'>Phones</h1>

                    </div>
                    <div className='w-[170px] h-[145px] border border-gray-500 rounded-[4px] flex flex-col justify-evenly items-center bg-transparent hover:bg-oranges transition-all duration-500 delay-75 hover:text-white'>
                        <HiOutlineComputerDesktop className='w-[56px] h-[56px]' />

                        <h1 className='font-poppin'>Computers</h1>

                    </div>
                    <div className='w-[170px] h-[145px] border border-gray-500 rounded-[4px] flex flex-col justify-evenly items-center bg-transparent hover:bg-oranges transition-all duration-500 delay-75 hover:text-white'>
                        <PiWatchThin className='w-[56px] h-[56px]' />
                        <h1 className='font-poppin'>SmartWatch</h1>

                    </div>
                    <div className='w-[170px] h-[145px] border border-gray-500 rounded-[4px] flex flex-col justify-evenly items-center bg-oranges hover:bg-transparent transition-all duration-500 delay-75 text-white hover:text-black'>
                        <CiCamera className='w-[56px] h-[56px]' />
                        <h1 className='font-poppin'>Camera</h1>

                    </div>
                    <div className='w-[170px] h-[145px] border border-gray-500 rounded-[4px] flex flex-col justify-evenly items-center bg-transparent hover:bg-oranges transition-all duration-500 delay-75 hover:text-white'>
                        <PiHeadphonesLight className='w-[56px] h-[56px]' />
                        <h1 className='font-poppin'>HeadPhones</h1>

                    </div>
                    <div className='w-[170px] h-[145px] border border-gray-500 rounded-[4px] flex flex-col justify-evenly items-center bg-transparent hover:bg-oranges transition-all duration-500 delay-75 hover:text-white'>
                        <VscGame className='w-[56px] h-[56px]' />
                        <h1 className='font-poppin'>Phones</h1>

                    </div>

                </div>

            </div>




        </div>
    )
}

export default Categories