import Image from 'next/image'
import sideimage from "../../../../images/Side Image.png"
import { Input } from '@/components/ui/input'


const page = () => {
    return (
        <>

            <div className='w-full h-auto flex justify-center items-center mt-[84px] pb-[100px]'>
                <div className='w-full h-auto lg:h-[850px] flex flex-col-reverse md:flex-row-reverse justify-around items-center gap-7'>

                    <div className=' w-auto h-auto lg:w-[371px]  flex  flex-col  justify-between gap-10'>
                        <div>
                            <h1 className='text-left text-[32px] font-[500] font-inter sm:text-[36px]'>Log in to Exclusive</h1>
                            <h1 className='font-poppin'>Enter your details below</h1>


                        </div>
                        <div className='flex flex-col gap-4'>
                            <Input placeholder='Email or Phone Number' type='email' className='w-[280px] sm:w-[360px]' />
                            <Input placeholder='Password' type='password' className='w-[280px] sm:w-[360px]' />

                        </div>

                        <div className='flex flex-col sm:flex-row gap-4 items-center sm:items-start'>
                            <button className="w-[143px]  h-[56px] text-[16px] text-white mt-4 border bg-oranges border-oranges rounded-[5px] hover:bg-transparent hover:text-black transition-all duration-500 font-poppin">Log In</button>
                            <button className="w-[143px]  h-[56px] text-[16px] mt-4 ">Forget Password?</button>


                        </div>

                    </div>
                    <div>
                        <Image src={sideimage} alt='sideimage' />
                    </div>
                </div>

            </div>







        </>
    )
}

export default page
