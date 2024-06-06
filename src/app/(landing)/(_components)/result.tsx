import { cn } from "@/lib/utils"

import TestimonialSlider from "./slider/testimonial-slider"

export default function Result() {
  return (
    <section
      className={cn(
        "bg-result bg-cover bg-center",
        "text-center",
        "relative w-full",
        "pb-60"
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
            "text-8xl"
          )}
        >
          AMAZING RESULTS
        </h2>
        <h3 className="-mt-16 font-blackhawk text-[150px] leading-none text-secondary">
          Will You Be Next?
        </h3>

        <TestimonialSlider className="mt-28" />
      </div>
    </section>
  )
}
