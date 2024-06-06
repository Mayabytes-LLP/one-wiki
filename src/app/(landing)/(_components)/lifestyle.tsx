import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

import Circle from "./common/circle"
import Circle2 from "./common/circle-2"
import Globe3 from "./common/globe-3"
import Star from "./common/stars"

export default function LifeStyle() {
  return (
    <section
      className={cn("relative w-full", "bg-layer bg-cover bg-no-repeat")}
    >
      <div
        className={cn(
          "h-full w-full",
          "absolute bottom-0 left-0 right-0 top-0",
          "z-20 bg-opacity"
        )}
      ></div>
      <div className={cn("container relative", "text-center", "py-96")}>
        <div className="relative z-20 mx-auto w-4/5">
          <h2
            className={cn(
              "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text",
              "font-bold uppercase text-transparent",
              "text-8xl"
            )}
          >
            Lifestyle Upgrade
          </h2>
          <h3 className="mb-5 font-blackhawk text-5xl text-secondary">
            It's YOUR Turn
          </h3>
          <p className="tetx-lg mx-auto mb-5 w-3/5 font-medium capitalize">
            How does the Digital Asset Expansion System work? Leveraging
            Artificial Intelligence, along with our proprietary method means you
            work smarter, not harder; all while getting paid the BIG bucks!
          </p>
          <p className="tetx-lg mx-auto mb-10 w-3/5 font-medium capitalize">
            Free up your time by using the Digital Asset Expansion System
            starting today.
          </p>
          <Button
            asChild
            variant="default"
            size="default"
            className={cn("relative  overflow-hidden !rounded-[10px] text-lg")}
          >
            <Link href="#">Get Started Today</Link>
          </Button>

          <Image
            src="/assets/images/box.png"
            alt="Box"
            width={633}
            height={648}
            className={cn(
              "mx-auto",
              "absolute -top-28 left-0 right-0",
              "-z-10"
            )}
          />
        </div>
        <Circle2 className="absolute left-40 top-10 z-10" />
      </div>

      <Star className={cn("absolute", "top-24", "left-36")} />
      <Star className={cn("absolute", "top-20", "right-12")} />
      <Star className={cn("absolute", "top-1/2", "left-36")} />
      <Star className={cn("absolute", "top-48", "right-96")} />
      <Star className={cn("absolute", "bottom-96", "left-96")} />
      <Star className={cn("absolute", "bottom-56", "left-28")} />
      <Star className={cn("absolute", "bottom-20", "left-20")} />
      <Star
        className={cn("absolute", "bottom-3", "left-1/2 -translate-x-1/2")}
      />
      <Star className={cn("absolute", "bottom-64", "right-80")} />
      <Star className={cn("absolute", "bottom-28", "right-20")} />
    </section>
  )
}
