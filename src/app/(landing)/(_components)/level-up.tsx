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
          "bg-levelup relative -mt-16 w-full bg-cover bg-top pt-64"
        )}
      >
        <div
          className={cn(
            "h-full w-full",
            "absolute bottom-0 left-0 right-0 top-0",
            "z-10 bg-opacity"
          )}
        ></div>
        <div className={cn("flex items-center", "ml-auto w-11/12")}>
          <div className="relative w-1/2">
            <Image
              src="/assets/images/man-2.png"
              alt="Man"
              width={894}
              height={986}
            />
            <div
              className={cn(
                "mx-auto h-96 w-[700px]",
                "bg-gradient-to-t from-gray-900 to-transparent",
                "absolute bottom-0 left-0 right-0"
              )}
            ></div>
          </div>
          <div className={cn("w-1/2", "relative z-30")}>
            <h2
              className={cn(
                "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text",
                "mb-5 font-bold uppercase text-transparent",
                "text-8xl"
              )}
            >
              Level UP
              <span className="block font-blackhawk text-9xl text-secondary">
                Your game
              </span>
            </h2>
            <p className="tetx-lg mb-8 w-3/4 pr-20 font-medium capitalize">
              Are you tired of barely scraping by knowing that so much more is
              waiting for you? At Ryno Inc, we're dedicated to helping you
              finally achieve your income and lifestyle goals.
            </p>
            <p className="tetx-lg mb-8 w-3/4 pr-20 font-medium capitalize">
              Our proprietary Digital Asset Expansion System allows you to earn
              your desired income with total time freedom!
            </p>
            <Button
              asChild
              variant="default"
              size="default"
              className={cn(
                "relative  overflow-hidden !rounded-[10px] text-lg"
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
            "left-1/2 -translate-x-1/2"
          )}
        />
        <Star className={cn("absolute", "bottom-10", "left-1/2")} />
        <Star className={cn("absolute", "bottom-10", "left-36")} />
        <Star className={cn("absolute", "bottom-28", "left-44")} />

        <Globe2 className="absolute -bottom-60 right-0" />
      </section>
    </>
  )
}
