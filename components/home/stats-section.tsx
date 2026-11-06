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
    <div className="relative mx-auto h-[380px] w-full max-w-3xl md:h-[480px]">
      <Image
        src="/images/globe.png"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover object-top"
        priority
      />

      {/* Tagline */}
      <p className="absolute inset-0 flex items-center justify-center px-8 text-center text-2xl font-medium leading-snug md:text-3xl">
        Assisting over 15,000 job seekers find their dream positions.
      </p>

      {/* Fade globe bottom into page background */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent"
        aria-hidden="true"
      />
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="overflow-hidden bg-neutral-950 px-4 pt-2 pb-12 text-white md:pb-16">
      <Globe />

      {/* Stat cards */}
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
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
