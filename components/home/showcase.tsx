import Image from "next/image"
import type { ReactNode } from "react"

/**
 * Wraps the home page sections and paints the globe image as one continuous
 * background behind them. The image is anchored to the bottom of the block and
 * shifted slightly past the bottom edge, so the planet's lower half runs off
 * the page (the same trick the Figma design uses). The tagline is positioned
 * by percentage inside the image box, which keeps it locked to the planet's
 * edge at every screen size.
 */
export function Showcase({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      {/* Planet background — anchored to the bottom of the section */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="container relative">
          <Image
            src="/images/globe.png"
            alt=""
            width={1440}
            height={1882}
            className="block h-auto w-full translate-y-[28%]"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Darken the top area above the arc so navbar/hero stay readable */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-72 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-transparent md:h-[420px]"
        aria-hidden="true"
      />

      {/* Sections sit above the background */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
