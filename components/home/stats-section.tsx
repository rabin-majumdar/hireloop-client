"use client"

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

export function StatsSection() {
  return (
    <section className="bg-transparent px-4 pt-24 text-white md:pt-36">
      {/* Tagline — sits over the planet, between the hero and the stat cards */}
      <div className="container mx-auto px-6">
        <p className="mx-auto max-w-xl text-center text-2xl font-medium leading-snug md:text-3xl">
          Assisting over 15,000 job seekers find their dream positions.
        </p>
      </div>

      {/* Stat cards */}
      <div className="container mx-auto mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-4">
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
