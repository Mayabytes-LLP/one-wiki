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
      <div
        className={cn(
          "container relative",
          "text-center",
          "py-10 md:py-20 lg:py-60 xl:py-96"
        )}
      >
        <div className="w-afull relative z-20 mx-auto sm:w-4/5">
          <h2
            className={cn(
              "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text",
              "font-bold uppercase text-transparent",
              "text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            )}
          >
            Lifestyle Upgrade
          </h2>
          <h3 className="mb-5 font-blackhawk text-5xl text-secondary">
            It's YOUR Turn
          </h3>
          <p
            className={cn(
              "mx-auto mb-5 font-medium capitalize",
              "w-full lg:w-3/4 xl:w-3/5",
              "text-base lg:text-lg"
            )}
          >
            How does the Digital Asset Expansion System work? Leveraging
            Artificial Intelligence, along with our proprietary method means you
            work smarter, not harder; all while getting paid the BIG bucks!
          </p>
          <p
            className={cn(
              "mx-auto mb-10 font-medium capitalize",
              "w-full lg:w-3/4 xl:w-3/5",
              "text-base lg:text-lg"
            )}
          >
            Free up your time by using the Digital Asset Expansion System
            starting today.
          </p>
          <Button
            asChild
            variant="default"
            size="default"
            className={cn(
              "relative overflow-hidden !rounded-[10px]",
              "text-base lg:text-lg"
            )}
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
              "-z-10",
              "hidden lg:block"
            )}
          />
        </div>
        <Circle2
          className={cn("absolute left-40 top-10 z-10", "hidden xl:block")}
        />
      </div>

      <Star
        className={cn("absolute", "top-24", "md:left-36", "hidden md:block")}
      />
      <Star
        className={cn("absolute", "top-20", "right-12", "hidden md:block")}
      />
      <Star
        className={cn("absolute", "top-1/2", "md:left-36", "hidden md:block")}
      />
      <Star
        className={cn("absolute", "top-48", "right-96", "hidden md:block")}
      />
      <Star
        className={cn("absolute", "bottom-96", "left-96", "hidden md:block")}
      />
      <Star
        className={cn("absolute", "bottom-56", "left-28", "hidden md:block")}
      />
      <Star
        className={cn("absolute", "bottom-20", "left-20", "hidden md:block")}
      />
      <Star
        className={cn(
          "absolute",
          "bottom-3",
          "left-1/2 -translate-x-1/2",
          "hidden md:block"
        )}
      />
      <Star
        className={cn("absolute", "bottom-64", "right-80", "hidden md:block")}
      />
      <Star
        className={cn("absolute", "bottom-28", "right-20", "hidden md:block")}
      />
    </section>
  )
}
