import { cn } from "@/lib/utils"

import Globe4 from "./common/globe-4"
import Globe5 from "./common/globe-5"
import TestimonialSlider from "./slider/testimonial-slider"

export default function Result() {
  return (
    <section
      className={cn(
        "bg-result bg-cover bg-center",
        "text-center",
        "relative w-full",
        "pb-10 md:pb-20 xl:pb-60",
        "pt-10 md:pt-20 lg:pt-0"
      )}
    >
      <div
        className={cn(
          "h-full w-full",
          "absolute bottom-0 left-0 right-0 top-0",
          "z-10 bg-opacity"
        )}
      ></div>
      <div className="container relative z-20">
        <h2
          className={cn(
            "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text",
            "mb-5 font-bold uppercase text-transparent",
            "text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          )}
        >
          AMAZING RESULTS
        </h2>
        <h3
          className={cn(
            "font-blackhawk text-secondary",
            "text-5xl leading-none md:text-6xl lg:text-7xl xl:text-[150px]",
            "-mt-8 sm:-mt-10 xl:-mt-16"
          )}
        >
          Will You Be Next?
        </h3>

        <TestimonialSlider className="mt-10 xl:mt-28" />
      </div>
      <Globe4
        className={cn("absolute -bottom-64 right-0 z-0", "hidden lg:block")}
      />
      <Globe5
        className={cn("absolute -bottom-96 left-0 z-0", "hidden lg:block")}
      />
    </section>
  )
}
