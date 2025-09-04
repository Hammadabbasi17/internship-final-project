'use client'
import image from "../../../../images/Frame 560.png"
import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel" // Your custom carousel file

import Image from "next/image"

const images = [
  image,
   image,
   image,
   image,
   image,
]

export default function AutoPlayCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      // If at end, go to first slide, else next
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 3000) // 3 seconds per slide

    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="flex justify-center items-center">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true, // Optional: loops to start
        }}
        className="w-full sm:max-w-[500px] md:max-w-[670px] lg:max-w-[892px]"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1 lg:w-[892px] lg:h-[344px] bg-slate-100">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={892}
                  height={344}
                  className="w-full h-full object-cover"
                />
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















// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"




// import Image from "next/image"


// import images from "../../../../images/Frame 560.png"

// import React from 'react'

// const Header = () => {
//     return (
//         <div className="flex justify-center items-center  ">


//             <Carousel className="w-full sm:max-w-[500px] md:max-w-[670px] md:max-h-[400px] lg:max-w-[892px]  border-none ">
//                 <CarouselContent  >
                    
//                     {Array.from({ length: 5 }).map((_, index) => (
//                         <CarouselItem key={index}>
//                             <div className="p-1  lg:w-[892px] lg:h-[344px] bg-slate-100">
                                
//                                     <Image src={images} alt="pic" className="" />
                                
                            
//                             </div>
//                         </CarouselItem>
//                     ))}
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//         </div>
//     )
// }

// export default Header