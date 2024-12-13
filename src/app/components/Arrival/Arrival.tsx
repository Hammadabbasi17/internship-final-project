import Image from "next/image"
import Frame from "../../../../images/Frame 684.png"
import Frame1 from "../../../../images/Frame 685.png"
import Frame2 from "../../../../images/Frame 686.png"
import Frame3 from "../../../../images/Frame 687.png"

const Arrival = () => {
    return (
        <div>
            <div className="mt-[120px] w-full  sm:h-[150px] flex items-center flex-col">
                <div className="w-[80%] flex flex-col sm:flex-row ">
                    <div className="flex gap-2 items-center">
                        <div className="w-[20px] h-[40px] sm:ml-[36px]  bg-oranges"></div>
                        <h2 className="font-poppin text-oranges">Featured</h2>

                    </div>
                </div>

                <div className="flex w-[76%]  mt-4 gap-16 items-center  flex-col sm:flex-row">
                    <h1 className="font-inter font-[600] text-[24px] sm:text-[36px] text-black">New Arrival</h1>

                </div>


            </div>


               {/* New arrival section */}

               <div className="w-full h-auto mt-[40px] flex justify-center items-center flex-wrap pb-[50px]">
                <div className="w-full md:w-[76%] xl:h-[600px] h-auto flex xl:flex-row  gap-8 frame justify-center items-center">
                    <div className="md:w-[570px] h-[600px] ">
                        <Image src={Frame} alt="frame"/>
                    </div>
                    <div className="flex flex-col gap-8 justify-center items-center">
                        <Image src={Frame1} alt="frame1" />
                        <div className="flex gap-8 md:w-[570px] justify-center items-center frame2">
                        <Image src={Frame2} alt="frame2"/>
                        <Image src={Frame3} alt="frame3"/>
                        </div>


                    </div>

                </div>

               </div>





        </div>
    )
}

export default Arrival