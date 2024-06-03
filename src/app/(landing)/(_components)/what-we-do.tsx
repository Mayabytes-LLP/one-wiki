import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

const about = [
  {
    icon: "/assets/images/mission.png",
    title: "our Mission",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis velit sed nunc imperdiet eget. Consectetur aliquam egestas ullamcorper nec arcu, ullamcorper congue duis. Orci, quis turpis ipsum ut consectetur morbi ullamcorper in.",
  },
  {
    icon: "/assets/images/vision.png",
    title: "Our vision",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis velit sed nunc imperdiet eget. Consectetur aliquam egestas ullamcorper nec arcu, ullamcorper congue duis. Orci, quis turpis ipsum ut consectetur morbi ullamcorper in.",
  },
]

export default function WhatWeDo() {
  return (
    <section
      className={cn(
        "relative w-full",
        "bg-layer bg-cover bg-no-repeat",
        "py-0"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <h2
              className={cn(
                "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text",
                "mb-5 font-bold uppercase text-transparent",
                "text-8xl",
                "w-3/5"
              )}
            >
              What we do
            </h2>
            <p className="tetx-lg mb-8 w-3/4 pr-20 font-medium capitalize">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              quis velit sed nunc imperdiet eget. Consectetur aliquam egestas
              ullamcorper nec arcu, ullamcorper congue duis. Orci, quis turpis
              ipsum ut consectetur morbi ullamcorper in. Cras aliquam
              consectetur vulputate donec.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vitae quis velit sed nunc imperdiet
              eget. Consectetur aliquam egestas ullamcorper nec arcu,
              ullamcorper congue duis. Orci, quis turpis ipsum ut consectetur
              morbi ullamcorper in. Cras aliquam consectetur vulputate donec.
            </p>
            <Button
              asChild
              variant="default"
              size="default"
              className={cn(
                "relative  overflow-hidden !rounded-[10px] text-lg"
              )}
            >
              <Link href="#">Unlock your source now!</Link>
            </Button>
          </div>
          <div className="w-1/2">
            <div
              className={cn(
                "rounded-lg bg-secondary p-20",
                "flex flex-col items-center justify-center gap-20",
                "ml-auto w-5/6",
                "relative z-20 -mt-20"
              )}
            >
              {about.map((data, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={data.icon}
                    alt={data.title}
                    width={100}
                    height={50}
                    className="mx-auto mb-5"
                  />
                  <h3 className="mb-2 font-blackhawk text-5xl">{data.title}</h3>
                  <p className="text-xl capitalize">{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
