import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

import Globe2 from "./common/globe-2"
import Star from "./common/stars"

export default function LevelUp() {
  return (
    <>
      <section
        className={cn(
          "relative w-full bg-levelup bg-cover bg-top",
          "pt-20 lg:pt-40 xl:pt-64",
          "-mt-8 lg:-mt-16",
          "px-8"
        )}
      >
        <div
          className={cn(
            "h-full w-full",
            "absolute bottom-0 left-0 right-0 top-0",
            "z-10 bg-opacity"
          )}
        ></div>
        <div className={cn("flex items-end", "ml-auto", "w-full xl:w-11/12")}>
          <div className="relative w-1/2">
            <Image
              src="/assets/images/man-2.png"
              alt="Man"
              width={894}
              height={986}
            />
            <div
              className={cn(
                "h-96 w-3/4",
                "bg-gradient-to-t from-gray-900 to-transparent",
                "absolute bottom-0 left-0 right-0",
                "hidden lg:block"
              )}
            ></div>
          </div>
          <div className={cn("w-1/2", "relative z-30")}>
            <h2
              className={cn(
                "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text",
                "mb-5 font-bold uppercase text-transparent",
                "text-6xl lg:text-7xl xl:text-8xl"
              )}
            >
              Level UP
              <span
                className={cn(
                  "block font-blackhawk text-secondary",
                  "text-6xl lg:text-7xl xl:text-9xl"
                )}
              >
                Your game
              </span>
            </h2>
            <p
              className={cn(
                "font-medium capitalize",
                "lg:pr-20",
                "w-full lg:w-3/4",
                "text-base lg:text-lg",
                "mb-4 lg:mb-8"
              )}
            >
              Are you tired of barely scraping by knowing that so much more is
              waiting for you? At Ryno Inc, we're dedicated to helping you
              finally achieve your income and lifestyle goals.
            </p>
            <p
              className={cn(
                "font-medium capitalize",
                "lg:pr-20",
                "w-full lg:w-3/4",
                "text-base lg:text-lg",
                "mb-4 lg:mb-8"
              )}
            >
              Our proprietary Digital Asset Expansion System allows you to earn
              your desired income with total time freedom!
            </p>
            <Button
              asChild
              variant="default"
              size="default"
              className={cn(
                "relative overflow-hidden !rounded-[10px]",
                "text-base lg:text-lg",
                "mb-8"
              )}
            >
              <Link href="#">Get Started Today</Link>
            </Button>
          </div>
        </div>

        <Star className="absolute right-24 top-96" />
        <Star
          className={cn(
            "absolute",
            "top-1/2 -translate-y-1/2",
            "left-80 -translate-x-1/2 lg:left-1/2"
          )}
        />
        <Star className={cn("absolute", "lg:bottom-10", "left-1/2")} />
        <Star className={cn("absolute", "bottom-10", "left-36")} />
        <Star className={cn("absolute", "bottom-28", "left-44")} />

        <Globe2
          className={cn("absolute -bottom-60 right-0 z-50", "hidden lg:block")}
        />
      </section>
    </>
  )
}
