
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"














import Link from "next/link"
import { CiSearch } from "react-icons/ci"
import { FaRegHeart } from "react-icons/fa"
import { IoIosContact } from "react-icons/io"
import { LuMenu } from "react-icons/lu"
import { MdOutlineShoppingCart } from "react-icons/md"




const Navbar = () => {
    

    return (
        <div>

            <div className="w-full h-[48px] bg-black text-white font-poppin flex justify-center items-center">
                <h2 className="md:text-[14px] text-[11px] text-center">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  <span className="font-semibold pl-2 underline"> ShopNow</span></h2>
            </div>

            <div className="w-full flex justify-center items-center">


                <div className=" w-full xl:w-[80%] h-[134px]  flex justify-between items-center  ">
                    <Link href={"/"}><h1 className="text-[24px]  ml-[36px]  font-inter font-[700] ">Exclusive</h1></Link>

                    <ul className=" flex-col md:flex-row justify-center items-center gap-[32px] font-poppin hidden lg:flex">
                        <Link href={"/"}> <li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Home</li></Link>
                        <Link href={"/Contact"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]"  >Contact</li></Link>
                        <Link href={"/About"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >About</li></Link>
                        <Link href={"/Signup"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Sign Up</li></Link>

                    </ul>






                    <div className="hidden gap-9 justify-center items-center sm:flex ">
                        <form className="flex justify-center ">
                            <input className="w-[243px] h-[38px]  p-[10px] rounded-[4px] border-white border" type="search" placeholder="What are you looking for?" />


                            <CiSearch className="text-2xl ml-[-30px] mt-2 " />
                        </form>


                        <div className="flex gap-6 mr-[36px] text-3xl text-black">
                            <FaRegHeart />

                            <MdOutlineShoppingCart />
                        </div>
                    </div>
                </div>

                <div className="text-[40px] mr-4 lg:hidden ">
                    <Sheet>
                        <SheetTrigger><LuMenu className="mt-3" /></SheetTrigger>
                        <SheetContent className="mt-[48px]">
                            <ul className=" flex flex-col  mt-11 gap-[32px] font-poppin  h-[70%]">
                              
                                <Link href={"/"}> <li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Home</li></Link>
                                <Link href={"/Contact"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]"  >Contact</li></Link>
                                <Link href={"/About"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >About</li></Link>
                                <Link href={"/Signup"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Sign Up</li></Link>

                            </ul>





                          
                        </SheetContent>
                    </Sheet>



                </div>








            </div>

        </div>
    )
}

export default Navbar