import Banner from "./(_components)/banner"
import Circle from "./(_components)/common/circle"
import LevelUp from "./(_components)/level-up"
import WhatWeDo from "./(_components)/what-we-do"

export default function Home() {
  return (
    <main className="min-h-screen font-body">
      <div className="relative">
        <Circle className="absolute left-20 right-20 top-80" />
        <Banner />
        <WhatWeDo />
      </div>
      <LevelUp />
    </main>
  )
}
