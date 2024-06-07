import Image from "next/image"

import { cn } from "@/lib/utils"

import Star from "./common/stars"

const products = [
  { image: "/assets/images/mentorship.png", title: "MILLIONAIRE MENTORSHIP" },
  { image: "/assets/images/unlock.png", title: "UNLOCK TRUE SUCCESS" },
]

export default function Control() {
  return (
    <section
      className={cn(
        "relative w-full bg-control bg-cover bg-center bg-no-repeat",
        "pb-20 xl:pb-80",
        "pt-20 xl:pt-40"
      )}
    >
      <div
        className={cn(
          "h-full w-full",
          "absolute bottom-0 left-0 right-0 top-0",
          "z-20 bg-opacity"
        )}
      ></div>
      <div className="container relative z-20">
        <div
          className={cn(
            "mx-auto text-center",
            "w-11/12 2xl:w-4/5",
            "mb-20 2xl:mb-40"
          )}
        >
          <h2
            className={cn(
              "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text",
              "mb-5 font-bold uppercase text-transparent",
              "text-7xl xl:text-8xl"
            )}
          >
            Take Control of Your Life Right Now
            <span
              className={cn(
                "block font-blackhawk text-secondary",
                "text-7xl xl:text-9xl"
              )}
            >
              unlock now
            </span>
          </h2>
        </div>
        <div className="flex items-center text-center">
          {products.map((data, index) => (
            <div className="w-1/2">
              <div className="group relative" key={index}>
                <Image
                  src={data.image}
                  alt={data.title}
                  width={405}
                  height={517}
                  className="mx-auto mb-10"
                />
                <h4
                  className={cn(
                    "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text",
                    "font-heading font-bold uppercase",
                    "text-2xl xl:text-3xl"
                  )}
                >
                  {data.title}
                </h4>
                <Image
                  src="/assets/images/box.png"
                  alt="Box"
                  width={633}
                  height={648}
                  className={cn(
                    "mx-auto",
                    "absolute -bottom-28 left-0 right-0",
                    "-z-10 rotate-180 transition-all duration-300",
                    "opacity-0 group-hover:opacity-100"
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Star className="absolute left-28 top-44" />
      <Star className="absolute right-80 top-32" />
      <Star className="absolute left-1/2 top-96 -translate-x-1/2" />
      <Star className="absolute right-36 top-[590px]" />
      <Star className="absolute left-44 top-1/2 -translate-y-1/2" />
      <Star className="absolute bottom-12 left-44" />
      <Star className="absolute bottom-60 left-1/2 -translate-x-1/2" />
      <Star className="absolute bottom-10 right-20" />
    </section>
  )
}
