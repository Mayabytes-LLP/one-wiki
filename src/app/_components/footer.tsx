import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className={cn("bg-footer relative w-full bg-cover bg-no-repeat")}>
      <div
        className={cn(
          "h-full w-full",
          "absolute bottom-0 left-0 right-0 top-0",
          "z-10 bg-opacity"
        )}
      ></div>
      <div className="container relative z-20">
        <div className={cn("flex justify-end", "mb-36 2xl:mb-52")}>
          <div className="w-3/5 2xl:w-3/4">
            <h2
              className={cn(
                "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text",
                "mb-5 font-bold uppercase text-transparent",
                "text-8xl"
              )}
            >
              Join
            </h2>
            <h3
              className={cn(
                "-mt-16 font-blackhawk leading-none text-secondary",
                "text-8xl 2xl:text-[150px]"
              )}
            >
              Will you join?
            </h3>
            <Button
              asChild
              variant="default"
              size="default"
              className={cn(
                "relative mt-5 overflow-hidden !rounded-[10px] text-lg"
              )}
            >
              <Link href="#">Get Started Today</Link>
            </Button>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-1/2 flex-col justify-between">
            <Image
              src="/assets/images/logo.png"
              alt="Footer Logo"
              width={119}
              height={38}
              className="mb-10"
            />
            <div className="flex gap-20">
              <div className="w-fit">
                <ul>
                  <li className="mb-5">
                    <a
                      className="text-lg capitalize opacity-80 transition-all duration-300 hover:opacity-100"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="text-lg capitalize opacity-80 transition-all duration-300 hover:opacity-100"
                      href="#"
                    >
                      Sucess stories
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="text-lg capitalize opacity-80 transition-all duration-300 hover:opacity-100"
                      href="#"
                    >
                      Mentorship
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="text-lg capitalize opacity-80 transition-all duration-300 hover:opacity-100"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-fit">
                <ul>
                  <li className="mb-5">
                    <a
                      className="text-lg capitalize opacity-80 transition-all duration-300 hover:opacity-100"
                      href="#"
                    >
                      facebook
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="text-lg capitalize opacity-80 transition-all duration-300 hover:opacity-100"
                      href="#"
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="text-lg capitalize opacity-80 transition-all duration-300 hover:opacity-100"
                      href="#"
                    >
                      instagram
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="text-lg capitalize opacity-80 transition-all duration-300 hover:opacity-100"
                      href="#"
                    >
                      linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-fit">
                <ul>
                  <li className="mb-5">
                    <a
                      className="text-lg capitalize opacity-80 transition-all duration-300 hover:opacity-100"
                      href="#"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="text-lg capitalize opacity-80 transition-all duration-300 hover:opacity-100"
                      href="#"
                    >
                      Terms & condition
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mb-5 font-heading text-lg font-medium capitalize opacity-80">
              © one wiki, Inc. All rights reserved.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="/assets/images/footer-img.png"
              alt="Footer Logo"
              width={854}
              height={680}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
