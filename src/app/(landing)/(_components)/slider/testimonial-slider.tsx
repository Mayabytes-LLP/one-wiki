import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Comma from "./comma"

const items = [
  {
    image: "/assets/images/testimonial-1.png",
    name: "Rick Alger",
    designation: "Happy customer",
    review:
      "Working with Ryan has put tens of thousands of dollars in my pocket with just some upfront set up. Getting paid from work I did years ago is the best.",
  },
  {
    image: "/assets/images/testimonial-1.png",
    name: "Rick Alger",
    designation: "Happy customer",
    review:
      "Working with Ryan has put tens of thousands of dollars in my pocket with just some upfront set up. Getting paid from work I did years ago is the best.",
  },
  {
    image: "/assets/images/testimonial-1.png",
    name: "Rick Alger",
    designation: "Happy customer",
    review:
      "Working with Ryan has put tens of thousands of dollars in my pocket with just some upfront set up. Getting paid from work I did years ago is the best.",
  },
  {
    image: "/assets/images/testimonial-1.png",
    name: "Rick Alger",
    designation: "Happy customer",
    review:
      "Working with Ryan has put tens of thousands of dollars in my pocket with just some upfront set up. Getting paid from work I did years ago is the best.",
  },
  {
    image: "/assets/images/testimonial-1.png",
    name: "Rick Alger",
    designation: "Happy customer",
    review:
      "Working with Ryan has put tens of thousands of dollars in my pocket with just some upfront set up. Getting paid from work I did years ago is the best.",
  },
]
export default function TestimonialSlider({
  className = "className",
}: {
  className: string
}) {
  return (
    <Carousel className={className}>
      <CarouselContent>
        {items.map((item, i) => {
          return (
            <CarouselItem key={i} className="basis-full">
              <div className={cn("mx-auto w-3/4 px-10")}>
                <Comma className="mx-auto mb-12 xl:mb-24" />
                <p
                  className={cn(
                    "font-medium capitalize tracking-wide",
                    "text-2xl xl:text-3xl"
                  )}
                >
                  {item.review}
                </p>
                <div
                  className={cn(
                    "mx-auto flex w-fit items-center gap-5",
                    "mt-12 xl:mt-28"
                  )}
                >
                  <div className="h-28 w-28 overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt="sliderImage"
                      height={112}
                      width={112}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h5
                      className={cn(
                        "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text",
                        "font-heading font-bold uppercase",
                        "text-3xl"
                      )}
                    >
                      {item.name}
                    </h5>
                    <h6 className="text-lg font-medium capitalize">
                      {item.designation}
                    </h6>
                  </div>
                </div>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselNext className="right-0 h-16 w-16 rounded-sm border-white bg-transparent text-white" />
      <CarouselPrevious className="left-0 h-16 w-16 rounded-sm border-white bg-transparent text-white" />
    </Carousel>
  )
}
