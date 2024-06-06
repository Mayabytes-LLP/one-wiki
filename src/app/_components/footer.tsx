import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className={cn("bg-footer")}>
      <div className="container">
        <div className="mb-52 flex justify-end">
          <div className="w-3/4">
            <h2
              className={cn(
                "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text",
                "mb-5 font-bold uppercase text-transparent",
                "text-8xl"
              )}
            >
              Join
            </h2>
            <h3 className="-mt-16 font-blackhawk text-[150px] leading-none text-secondary">
              Will you join?
            </h3>
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
