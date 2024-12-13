import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"




import Image from "next/image"


import images from "../../../../images/Frame 560.png"

import React from 'react'

const Header = () => {
    return (
        <div className="flex justify-center items-center  ">




          












            <Carousel className="w-full sm:max-w-[500px] md:max-w-[670px] md:max-h-[400px] lg:max-w-[892px]  border-none ">
                <CarouselContent  >
                    
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1  lg:w-[892px] lg:h-[344px] bg-slate-100">
                                
                                    <Image src={images} alt="pic" className="" />
                                
                            
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Header