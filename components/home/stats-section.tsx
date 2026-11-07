import Image from "next/image"

import { Briefcase, Building2, Star, Users, type LucideIcon } from "lucide-react"

type Stat = {
  icon: LucideIcon
  value: string
  label: string
}

const stats: Stat[] = [
  { icon: Briefcase, value: "50K", label: "Active Jobs" },
  { icon: Building2, value: "12K", label: "Companies" },
  { icon: Users, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
]

function Globe() {
  return (
    <div className="relative aspect-[5/2] w-full overflow-hidden md:aspect-[12/5]">
      <Image
        src="/images/globe.png"
        alt=""
        priority
        width={1440}
        height={1882}
        className="h-auto w-full -translate-y-[42%]"
      />

      {/* Blend the image edges into the dark page background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-neutral-950 to-transparent"
        aria-hidden="true"
      />

      {/* Tagline sits just above the planet */}
      <p className="absolute inset-x-0 top-[22%] px-8 text-center text-2xl font-medium leading-snug md:text-3xl">
        Assisting over 15,000 job seekers find their dream positions.
      </p>

      {/* Fade the planet bottom into the page background so the cards sit closer */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-b from-transparent to-neutral-950"
        aria-hidden="true"
      />
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="pb-12 text-white md:pb-16">
      <Globe />

      {/* Stat cards */}
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 px-4 md:grid-cols-4 md:gap-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex h-28 flex-col justify-between rounded-xl border border-white/10 bg-neutral-900/80 p-4 md:h-32 md:p-5"
          >
            <Icon className="size-4 text-neutral-400" aria-hidden="true" />
            <div>
              <div className="text-2xl font-semibold md:text-3xl">{value}</div>
              <div className="mt-1 text-xs text-neutral-400 md:text-sm">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
