"use client"

import { forwardRef, HTMLAttributes, RefObject, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ScrollTo from "@/components/ui/scrollTo"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import useEvent from "@/components/hooks/useEvents"

const navItems = [
  { label: "About", href: "#", scrollTo: "about" },
  { label: "Sucess stories", href: "#", scrollTo: "sucess_stories" },
  { label: "Mentorship", href: "#", scrollTo: "mentorship" },
  { label: "Contact Us", href: "#", scrollTo: "contact-us" },
]

const Header = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    const logoRef = useRef(null)

    const isInView = useInView(logoRef as RefObject<Element>, {
      once: true,
    })

    return (
      <motion.header
        ref={ref}
        initial={{ opacity: 1 }}
        animate={{ opacity: isInView ? 1 : 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={cn(
          "container mx-auto w-full",
          "flex items-center justify-between",
          "absolute left-0 right-0 top-5 z-50"
        )}
      >
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          width={119}
          height={38}
        />
        <NavigationMenu className={cn("hidden lg:block")}>
          <NavigationMenuList className={cn("gap-10")}>
            {navItems.map(({ label, href, scrollTo }) => (
              <NavigationMenuItem key={scrollTo}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink asChild>
                    <ScrollTo
                      elementId={scrollTo}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "!bg-transparent p-0 font-heading"
                      )}
                    >
                      {label}
                    </ScrollTo>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            {children}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-5">
          <Button
            asChild
            variant="default"
            size="default"
            className={cn(
              "relative  overflow-hidden !rounded-[10px] text-base lg:text-lg",
              "hidden sm:block"
            )}
          >
            <Link href="#">Unlock your source now!</Link>
          </Button>
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger className="" asChild>
                <Button
                  variant="default"
                  className={cn("w-14 !p-0", "h-11 lg:h-14")}
                >
                  <Menu className="text-white" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex w-full flex-col gap-6">
                  <Link href="#" ref={logoRef}>
                    <Image
                      alt="logo"
                      src="/assets/images/logo.png"
                      width={119}
                      height={38}
                    />
                  </Link>
                  <ul className={cn("first:*pt-0 last:*pb-0 grid *:py-2")}>
                    {navItems.map(({ label, href, scrollTo }) => (
                      <li key={scrollTo}>
                        <ScrollTo
                          elementId={label}
                          variant="link"
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "px-5 font-bold uppercase text-neutral-500"
                          )}
                        >
                          {label}
                        </ScrollTo>
                      </li>
                    ))}
                    {children}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    )
  }
)
Header.displayName = "Header"

export default Header
