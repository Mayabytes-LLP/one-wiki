import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer
      className={cn(
        "relative w-full bg-footer bg-cover bg-no-repeat",
        "pt-20 lg:pt-0"
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
        <div
          className={cn(
            "flex justify-end",
            "mb-20 lg:mb-28 xl:mb-36 2xl:mb-52"
          )}
        >
          <div className="w-full lg:w-3/5 2xl:w-3/4">
            <h2
              className={cn(
                "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text",
                "mb-5 font-bold uppercase text-transparent",
                "text-6xl lg:text-7xl xl:text-8xl"
              )}
            >
              Join
            </h2>
            <h3
              className={cn(
                "font-blackhawk leading-none text-secondary",
                "text-6xl lg:text-7xl xl:text-8xl 2xl:text-[150px]",
                "-mt-12 xl:-mt-16"
              )}
            >
              Will you join?
            </h3>
            <Button
              asChild
              variant="default"
              size="default"
              className={cn(
                "relative mt-5 overflow-hidden !rounded-[10px] text-lg",
                "text-base lg:text-lg"
              )}
            >
              <Link href="#">Get Started Today</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-end">
          <div className="flex w-1/2 flex-col justify-between">
            <Image
              src="/assets/images/logo.png"
              alt="Footer Logo"
              width={119}
              height={38}
              className="mb-10"
            />
            <div className="flex gap-5 lg:gap-20">
              <div className="w-fit">
                <ul>
                  <li className="mb-5">
                    <a
                      className={cn(
                        "capitalize opacity-80 transition-all duration-300 hover:opacity-100",
                        "lg:text-md text-base xl:text-lg"
                      )}
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className={cn(
                        "capitalize opacity-80 transition-all duration-300 hover:opacity-100",
                        "lg:text-md text-base xl:text-lg"
                      )}
                      href="#"
                    >
                      Sucess stories
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className={cn(
                        "capitalize opacity-80 transition-all duration-300 hover:opacity-100",
                        "lg:text-md text-base xl:text-lg"
                      )}
                      href="#"
                    >
                      Mentorship
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className={cn(
                        "capitalize opacity-80 transition-all duration-300 hover:opacity-100",
                        "lg:text-md text-base xl:text-lg"
                      )}
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
                      className={cn(
                        "capitalize opacity-80 transition-all duration-300 hover:opacity-100",
                        "lg:text-md text-base xl:text-lg"
                      )}
                      href="#"
                    >
                      facebook
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className={cn(
                        "capitalize opacity-80 transition-all duration-300 hover:opacity-100",
                        "lg:text-md text-base xl:text-lg"
                      )}
                      href="#"
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className={cn(
                        "capitalize opacity-80 transition-all duration-300 hover:opacity-100",
                        "lg:text-md text-base xl:text-lg"
                      )}
                      href="#"
                    >
                      instagram
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className={cn(
                        "capitalize opacity-80 transition-all duration-300 hover:opacity-100",
                        "lg:text-md text-base xl:text-lg"
                      )}
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
                      className={cn(
                        "capitalize opacity-80 transition-all duration-300 hover:opacity-100",
                        "lg:text-md text-base xl:text-lg"
                      )}
                      href="#"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className={cn(
                        "capitalize opacity-80 transition-all duration-300 hover:opacity-100",
                        "lg:text-md text-base xl:text-lg"
                      )}
                      href="#"
                    >
                      Terms & condition
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p
              className={cn(
                "mb-5 font-heading font-medium capitalize opacity-80",
                "lg:text-md text-base xl:text-lg"
              )}
            >
              © one wiki, Inc. All rights reserved.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="/assets/images/footer-img.png"
              alt="Footer Image"
              width={854}
              height={680}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
