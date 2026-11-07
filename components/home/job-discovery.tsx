import Link from "next/link"
import { ArrowRight, Clock, Euro, MapPin, type LucideIcon } from "lucide-react"

type Badge = {
  icon: LucideIcon
  label: string
}

type Job = {
  title: string
  description: string
  badges: Badge[]
}

const jobs: Job[] = Array.from({ length: 6 }, () => ({
  title: "Frontend Developer",
  description:
    "Showcase your commitment to diversity and inclusion by highlighting initiatives",
  badges: [
    { icon: MapPin, label: "New York, USA" },
    { icon: Clock, label: "Hybrid" },
    { icon: Euro, label: "€25 - €40/hour" },
  ],
}))

function Badge({ icon: Icon, label }: Badge) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-neutral-950/70 px-3 py-1 text-xs text-neutral-300">
      <Icon className="size-3 text-fuchsia-400" aria-hidden="true" />
      {label}
    </span>
  )
}

function JobCard({ job }: { job: Job }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-white/10 bg-neutral-900/70 p-6">
      <h3 className="text-lg font-semibold text-white">{job.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
        {job.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.badges.map((badge) => (
          <Badge key={badge.label} icon={badge.icon} label={badge.label} />
        ))}
      </div>

      <div className="mt-auto pt-6">
        <Link
          href="/jobs"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-300 transition-colors hover:text-white"
        >
          Apply Now
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}

export function JobDiscovery() {
  return (
    <section className="px-4 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow label — small indigo squares flanking the text */}
        <p className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-indigo-400">
          <span className="size-1.5 bg-indigo-500" aria-hidden="true" />
          Smart Job Discovery
          <span className="size-1.5 bg-indigo-500" aria-hidden="true" />
        </p>

        <h2 className="mx-auto mt-4 max-w-md text-center text-3xl font-semibold leading-tight md:text-4xl">
          The roles you&apos;d never find by searching
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        <div className="mt-10 md:mt-14 justify-center flex">
          <Link
            href="/jobs"
            className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
          >
            View all job open
          </Link>
        </div>
      </div>
    </section>
  )
}
