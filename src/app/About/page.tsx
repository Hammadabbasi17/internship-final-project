import Image from 'next/image'
import story from "../../../images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
import { RxMobile } from 'react-icons/rx'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { PiWatchThin } from 'react-icons/pi'
import { CiCamera } from 'react-icons/ci'

import Man1 from "../../../images/Frame 874.png"
import Women1 from "../../../images/Frame 875.png"
import Man2 from "../../../images/Frame 876.png"

import { RiLinkedinBoxFill, RiTwitterFill } from 'react-icons/ri'
import { IoLogoInstagram } from 'react-icons/io'


const About = () => {
  return (
    <div>
      <div className='w-full h-auto flex justify-around items-center flex-wrap gap-8 mt-[100px] pb-8'>

        <div className='w-[526px] h-auto sm:h-[336px] pl-6 '>
          <h1 className='font-inter font-[600] text-[30px] sm:text-[56px]'>Our Story</h1>
          <h2 className='font-poppin mt-8 text-left'>Launced in 2015, Exclusive is South Asia premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </h2>
          <h2 className='font-poppin mt-7 text-left'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</h2>
        </div>
        <div className='w-[705px] h-[609px] flex justify-center items-center'>
          <Image src={story} alt='Frame' />

        </div>


      </div>


      {/* section about */}

      <div className='w-full h-auto flex justify-center items-center pb-20 mt-8 sm:mt-[120px]'>
        <div className='w-full sm:w-[76%] flex justify-center sm:justify-between items-center flex-wrap h-auto md:h-[500px] xl:h-auto gap-4'>
          <div className='w-[240px] lg:w-[270px] h-[230px] border border-gray-500 rounded-[4px] flex flex-col justify-evenly items-center bg-transparent hover:bg-oranges transition-all duration-500 delay-75 hover:text-white'>
            <RxMobile className='w-[56px] h-[56px]' />
            <div>
              <h1 className='font-inter text-[32px] font-[700] text-center'>10.5k </h1>
              <h1 className='font-poppin'>Sallers active our site</h1>
            </div>
          </div>
          <div className='w-[240px] lg:w-[270px] h-[230px] border border-gray-500 rounded-[4px] flex flex-col justify-evenly items-center bg-transparent hover:bg-oranges transition-all duration-500 delay-75 hover:text-white'>
            <HiOutlineComputerDesktop className='w-[56px] h-[56px]' />

            <div>
              <h1 className='font-inter text-[32px] font-[700] text-center'>10.5k </h1>
              <h1 className='font-poppin'>Sallers active our site</h1>
            </div>

          </div>
          <div className='w-[240px] lg:w-[270px] h-[230px] border border-gray-500 rounded-[4px] flex flex-col justify-evenly items-center bg-transparent hover:bg-oranges transition-all duration-500 delay-75 hover:text-white'>
            <PiWatchThin className='w-[56px] h-[56px]' />
            <div>
              <h1 className='font-inter text-[32px] font-[700] text-center'>10.5k </h1>
              <h1 className='font-poppin'>Sallers active our site</h1>
            </div>
          </div>
          <div className='w-[240px] lg:w-[270px] h-[230px] border border-gray-500 rounded-[4px] flex flex-col justify-evenly items-center bg-oranges hover:bg-transparent transition-all duration-500 delay-75 text-white hover:text-black'>
            <CiCamera className='w-[56px] h-[56px]' />
            <div>
              <h1 className='font-inter text-[32px] font-[700] text-center'>10.5k </h1>
              <h1 className='font-poppin'>Sallers active our site</h1>
            </div>

          </div>


        </div>

      </div>



      {/* character */}

      <div className="w-full h-auto  flex justify-center items-center  overflow-hidden mt-[70px]" >
        <div className="w-full 2xl:w-[80%] h-auto  ">



          {/* Large box 1 start */}
          <div className="flex flex-wrap   justify-evenly items-center w-full h-auto gap-11">
            {/* box one */}





            {/* box one end */}




            {/* box two start */}

            <div className="w-[270px] xl:w-[370px]  h-[564px]  flex-col  text-black justify-between items-center">



              <div className="w-[270px] xl:w-[370px] h-[430px] flex justify-center items-center">
                <Image src={Man1} alt="Man1" />
              </div>

              <div className="">

                <h2 className="text-[32px] font-[500] font-inter pt-3">Tom Cruise</h2>
                <h2 className='font-poppin'>Founder & Chairman</h2>

                <div className="flex gap-6 pt-3">
                  <RiTwitterFill className="text-[24px]" />
                  <IoLogoInstagram className="text-[24px]" />
                  <RiLinkedinBoxFill className="text-[24px]" />

                </div>
              </div>

            </div>





            {/* box two end */}


            {/* box three start */}

            <div className="w-[270px] xl:w-[370px]  h-[564px]  flex-col  text-black justify-between items-center">



              <div className="w-[270px] xl:w-[370px] h-[430px] flex justify-center items-center">
                <Image src={Women1} alt="Women1" />
              </div>

              <div className="">

                <h2 className="text-[32px] font-[500] font-inter pt-3">Emma Watson</h2>
                <h2 className='font-poppin'>Managing Director</h2>

                <div className="flex gap-6 pt-3">
                  <RiTwitterFill className="text-[24px]" />
                  <IoLogoInstagram className="text-[24px]" />
                  <RiLinkedinBoxFill className="text-[24px]" />

                </div>
              </div>

            </div>
            {/* box three end */}



            {/* box four start */}
            <div className="w-[270px] xl:w-[370px]  h-[564px]  flex-col  text-black justify-between items-center">



              <div className="w-[270px] xl:w-[370px] h-[430px] flex justify-center items-center">
                <Image src={Man2} alt="Man2" />
              </div>

              <div className="">

                <h2 className="text-[32px] font-[500] font-inter pt-3">Will Smith</h2>
                <h2 className='font-poppin'>Product Designer</h2>

                <div className="flex gap-6 pt-3">
                  <RiTwitterFill className="text-[24px]" />
                  <IoLogoInstagram className="text-[24px]" />
                  <RiLinkedinBoxFill className="text-[24px]" />

                </div>
              </div>

            </div>
            {/* box four end */}


          </div>

          {/* large box 1 end */}










        </div>

      </div>










    </div>
  )
}

export default About
