import Image from "next/image";
import Frame from "../../images/Frame 600.png"
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Remote from "../../images/Frame 570.png"
import Keyboard from "../../images/Frame 570 (1).png"
import Led from "../../images/Frame 570 (2).png"
import Chair from "../../images/chair.png"
import { FaStar } from "react-icons/fa";
import Categories from "./components/Categories/Categories";
import Selling from "./components/Selling/Selling";
import Product from "./components/Product/Product";
import Arrival from "./components/Arrival/Arrival";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mt-[120px] w-full  sm:h-[150px] flex items-center flex-col">
        <div className="w-[80%] flex flex-col sm:flex-row ">
          <div className="flex gap-2 items-center">
            <div className="w-[20px] h-[40px] sm:ml-[36px]  bg-oranges"></div>
            <h2 className="font-poppin text-oranges">Today&quot;s</h2>

          </div>
        </div>

        <div className="flex w-[76%]  mt-4 gap-16 items-center  flex-col sm:flex-row">
          <h1 className="font-inter font-[600] text-[36px] text-black">Flash Sales</h1>
          <div className="justify-center items-center flex gap-6 sm:gap-8 flex-shrink">
            <h1 className="w-[40px] sm:w-[48px] h-auto ">Days <span className="text-[28px] sm:text-[32px] font-[700] font-inter ">03<span className="pl-4">:</span></span></h1>
            <h1 className="w-[40px] sm:w-[48px] h-auto ">Hours <span className="text-[28px] sm:text-[32px] font-[700] font-inter ">23<span className="pl-4">:</span></span></h1>
            <h1 className="w-[40px] sm:w-[48px] h-auto ">Minutes <span className="text-[28px] sm:text-[32px] font-[700] font-inter ">19<span className="pl-4">:</span></span></h1>
            <h1 className="w-[40px] sm:w-[48px] h-auto ">Seconds <span className="text-[28px] sm:text-[32px] font-[700] font-inter ">56</span></h1>
          </div>
        </div>


      </div>
      {/* Flash section */}

      <div className="w-full h-auto  flex justify-center items-center  overflow-hidden mt-[40px]" >
        <div className="w-full xl:w-[80%] h-auto ">



          {/* Large box 1 start */}
          <div className="flex flex-wrap   justify-evenly items-center w-full h-[1800px] sm:h-[800px] lg:h-[500px]">
            {/* box one */}
            <div className="w-[270px] h-[350px]  flex-col  text-black justify-between items-center">






              {/* small box 1 */}


              <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                <Image src={Remote} alt="Remote" />
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

            <div className="w-[270px]  h-[350px]  flex-col  text-black justify-between items-center">



              <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                <Image src={Keyboard} alt="Keyboard" />
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

            <div className="w-[270px]  h-[350px]  flex-col  text-black justify-between items-center">



              <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                <Image src={Led} alt="Led" />
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
            <div className="w-[270px]  h-[350px]  flex-col  text-black justify-between items-center">



              <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                <Image src={Chair} alt="Chair" />
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

          {/* large box 1 end */}










        </div>

      </div>

      {/* courses section cpmpleted */}









      <div className="w-full h-[100px] mt-[40px] flex justify-center items-center">
        <button className="w-[220px] sm:w-[234px] h-[56px]  bg-oranges text-[14px] text-white  border-[1px] border-oranges rounded-[5px] hover:bg-transparent hover:text-black transition-all duration-[0.5s]">View All Products</button>
      </div>



      <Categories />
      <Selling />


      <div className="w-full h-auto flex justify-center items-center mt-[100px] pb-9">
        <div className="w-[90%] sm:w-auto">
          <div className="">
            <Image src={Frame} alt="Frame" />

          </div>

        </div>

      </div>


      {/* Product list section */}
      <Product />
      <div className="w-full h-[100px] mt-[40px] flex justify-center items-center">
        <button className="w-[220px] sm:w-[234px] h-[56px]  bg-oranges text-[14px] text-white  border-[1px] border-oranges rounded-[5px] hover:bg-transparent hover:text-black transition-all duration-[0.5s]">View All Products</button>
      </div>






      {/* New Arrival section */}
      <Arrival/>
    </div>

  );
}
