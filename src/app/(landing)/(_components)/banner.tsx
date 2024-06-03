import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

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
        "bg-banner bg-cover bg-bottom bg-no-repeat",
        "min-h-screen"
      )}
    >
      <div
        className={cn(
          "min-h-screen w-full",
          "absolute bottom-0 left-0 right-0 top-0",
          "bg-opacity"
        )}
      ></div>
      <div
        className={cn(
          "container relative",
          "flex flex-col items-center justify-end",
          "z-10 min-h-screen"
        )}
      >
        <h1
          className={cn(
            "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text text-transparent",
            "text-9xl",
            "text-center font-heading font-bold leading-none"
          )}
        >
          AMPLIFY YOUR
          <span
            className={cn(
              "block font-blackhawk uppercase leading-none text-secondary",
              "text-9xl",
              "-mt-20"
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
          className={cn("mx-auto", "absolute left-0 right-0 top-40", "-z-10")}
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
            "absolute bottom-28 left-8 right-8"
          )}
        >
          <div className="flex w-fit items-center gap-10">
            {socialLinks.map((data, index) => (
              <Link
                key={index}
                className={cn(
                  "font-heading font-bold capitalize",
                  "text-white hover:text-secondary",
                  "transition-all duration-300",
                  "text-lg"
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
    </section>
  )
}
