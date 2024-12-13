import Image from 'next/image'
import sideimage from "../../../images/Side Image.png"
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const Signup = () => {
  return (
    <div>
      <div className='w-full h-auto flex justify-center items-center mt-[84px] pb-[100px]'>
        <div className='w-full h-auto lg:h-[850px] flex flex-col-reverse md:flex-row-reverse justify-around items-center gap-7'>

          <div className=' w-auto h-auto lg:w-[371px]  flex  flex-col justify-between gap-10'>
            <div>
              <h1 className='text-left text-[32px] font-[500] font-inter sm:text-[36px]'>Create an account</h1>
              <h1 className='font-poppin'>Enter your details below</h1>


            </div>
            <div className='flex flex-col gap-4'>
              <Input placeholder='Name' className='w-[280px] sm:w-[360px]' />
              <Input placeholder='Email or Phone Number' className='w-[280px] sm:w-[360px]' />
              <Input placeholder='Password' className='w-[280px] sm:w-[360px]' />
            </div>

            <div className='flex flex-col gap-4'>
              <button className="w-[280px] sm:w-[360px] h-[56px] text-[16px] text-white mt-4 border bg-oranges border-oranges rounded-[5px] hover:bg-transparent hover:text-black transition-all duration-500 font-poppin">Create Account</button>
              <button className="w-[280px] sm:w-[360px] h-[56px] text-[16px] text-black mt-4 border bg-transparent border-black rounded-[5px] hover:bg-oranges hover:text-white transition-all duration-500">Sign up with Google</button>
              <h2 className='font-poppin text-center mt-9'>Already have account? <Link href={"/Signup/login"}> <span className='font-poppin underline text-lg'> Login</span></Link></h2>
            </div>

          </div>
          <div>
            <Image src={sideimage} alt='sideimage' />
          </div>
        </div>

      </div>








    </div>
  )
}

export default Signup