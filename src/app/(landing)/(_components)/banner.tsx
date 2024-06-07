import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import Line from "./common/line"
import Star from "./common/stars"

const socialLinks = [
  { title: "Facebook", link: "#" },
  { title: "Twitter", link: "#" },
  { title: "Instagram", link: "#" },
  { title: "Linkedin", link: "#" },
]

export default function Banner() {
  return (
    <section
      className={cn(
        "relative w-full",
        "bg-banner bg-cover bg-top bg-no-repeat",
        "pt-5 md:pt-20 2xl:pt-48"
      )}
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
          "container relative z-30",
          "flex flex-col items-center justify-end",
          "mt-28 lg:mt-40"
        )}
      >
        <h1
          className={cn(
            "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text text-transparent",
            "text-7xl md:text-8xl lg:text-9xl 2xl:text-[190px]",
            "text-center font-heading font-bold leading-none"
          )}
        >
          AMPLIFY YOUR
          <span
            className={cn(
              "block font-blackhawk uppercase leading-none text-secondary",
              "text-8xl lg:text-9xl 2xl:text-[238px]",
              "-mt-10 lg:-mt-20"
            )}
          >
            Dream
          </span>
        </h1>
        <Image
          src="/assets/images/box.png"
          alt="Box"
          width={633}
          height={648}
          className={cn(
            "mx-auto",
            "absolute left-0 right-0",
            "-z-10",
            "-top-16 2xl:-top-28",
            "hidden md:block"
          )}
        />
        <Image
          src="/assets/images/man.png"
          alt="Man"
          width={1248}
          height={580}
          className="mx-auto"
        />
        <div
          className={cn(
            "flex items-center justify-between",
            "absolute left-8 right-8",
            "bottom-16 lg:bottom-32"
          )}
        >
          <div className="flex w-fit items-center gap-5 lg:gap-10">
            {socialLinks.map((data, index) => (
              <Link
                key={index}
                className={cn(
                  "font-heading font-bold capitalize",
                  "text-white hover:text-secondary",
                  "transition-all duration-300",
                  "text-base lg:text-lg"
                )}
                href={data.link}
              >
                {data.title}
              </Link>
            ))}
          </div>
          <div className="w-fit">
            <Link href="#">
              <Image
                src="/assets/images/scroll.png"
                alt="Man"
                width={114}
                height={43}
                className="relative z-10"
              />
            </Link>
          </div>
        </div>
      </div>
      <Star className={cn("absolute left-24 top-16 z-10", "hidden md:block")} />
      <Star
        className={cn("absolute right-36 top-24 z-10", "hidden md:block")}
      />
      <Star className={cn("absolute left-24 top-80 z-10", "hidden md:block")} />
      <Star
        className={cn("absolute bottom-80 left-44 z-10", "hidden md:block")}
      />
      <Star
        className={cn("absolute bottom-44 right-96 z-10", "hidden md:block")}
      />
    </section>
  )
}
