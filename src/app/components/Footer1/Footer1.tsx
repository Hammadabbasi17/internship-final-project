import React from 'react'
import { GrDeliver } from 'react-icons/gr'
import { LuShieldCheck } from 'react-icons/lu'
import { PiHeadphonesLight } from 'react-icons/pi'

const Footer1 = () => {
    return (
        <div className='w-full h-[700px] sm:h-[300px] flex flex-wrap justify-evenly items-center sm:mt-[80px] mt-16 '>
            <div className='w-[249px] h-[180px] flex flex-col justify-between items-center '>
                <GrDeliver className='w-[80px] h-[80px] border rounded-[50%] bg-slate-500 text-white text-[30px]'/>
                <h1 className='font-poppin sm:text-[20px] font-[600]'>FREE AND FAST DELIVERY</h1>
                <h1 className='font-poppin text-center'>Free delivery for all orders over $140</h1>

            </div>
            <div className='w-[249px] h-[180px] flex flex-col justify-between items-center'>
                <PiHeadphonesLight className='w-[80px] h-[80px] border rounded-[50%] bg-slate-500 text-white'/>
                <h1 className='font-poppin sm:text-[20px] font-[600]'>24/7 CUSTOMER SERVICE</h1>
                <h1 className='font-poppin text-center'>Friendly 24/7 customer support</h1>

            </div>

            <div className='w-[249px] h-[180px] flex flex-col justify-between items-center'>
                <LuShieldCheck className='w-[80px] h-[80px] border rounded-[50%] bg-slate-500 text-white'/>
                <h1 className='font-poppin sm:text-[18px] font-[600]'>MONEY BACK GUARANTEE</h1>
                <h1 className='font-poppin text-center'>We reurn money within 30 days</h1>

            </div>

        </div>
    )
}

export default Footer1