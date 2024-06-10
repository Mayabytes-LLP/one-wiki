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
              <div className={cn("mx-auto px-10", "w-11/12 md:w-3/4")}>
                <Comma className="mx-auto mb-10 md:mb-12 xl:mb-24" />
                <p
                  className={cn(
                    "font-medium capitalize tracking-wide",
                    "text-base lg:text-2xl xl:text-3xl"
                  )}
                >
                  {item.review}
                </p>
                <div
                  className={cn(
                    "mx-auto flex w-fit items-center gap-5",
                    "mt-10 md:mt-12 xl:mt-28",
                    "flex-wrap sm:flex-nowrap"
                  )}
                >
                  <div
                    className={cn(
                      "overflow-hidden rounded-xl",
                      "mx-auto h-20 w-20 lg:h-28 lg:w-28"
                    )}
                  >
                    <Image
                      src={item.image}
                      alt="sliderImage"
                      height={112}
                      width={112}
                      className="mx-auto object-cover"
                    />
                  </div>
                  <div className="w-full text-center sm:w-fit sm:text-left">
                    <h5
                      className={cn(
                        "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text",
                        "font-heading font-bold uppercase",
                        "text-xl lg:text-3xl"
                      )}
                    >
                      {item.name}
                    </h5>
                    <h6 className="text-base font-medium capitalize lg:text-lg">
                      {item.designation}
                    </h6>
                  </div>
                </div>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselNext
        className={cn(
          "right-0 rounded-sm border-white bg-transparent text-white",
          "h-8 w-8 lg:h-16 lg:w-16"
        )}
      />
      <CarouselPrevious
        className={cn(
          "left-0 rounded-sm border-white bg-transparent text-white",
          "h-8 w-8 lg:h-16 lg:w-16"
        )}
      />
    </Carousel>
  )
}
