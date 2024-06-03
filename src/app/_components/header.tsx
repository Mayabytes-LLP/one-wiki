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
          "absolute left-0 right-0 top-5 z-30"
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
                        "!bg-transparent font-heading"
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
        <Button
          asChild
          variant="default"
          size="default"
          className={cn("relative  overflow-hidden !rounded-[10px] text-lg")}
        >
          <Link href="#">Unlock your source now!</Link>
        </Button>
      </motion.header>
    )
  }
)
Header.displayName = "Header"

export default Header
