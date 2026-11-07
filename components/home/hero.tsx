import { Flame, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"

const trendingTags = ["Product Designer", "AI Engineering", "Dev-ops Engineer"]

function SearchBar() {
  return (
    <form className="mx-auto flex w-full max-w-2xl items-center gap-2 rounded-2xl border border-white/10 bg-neutral-900/80 p-2 shadow-2xl">
      <label className="flex min-w-0 flex-1 items-center gap-2.5 px-3">
        <Search className="size-4 shrink-0 text-neutral-500" />
        <input
          type="text"
          name="query"
          placeholder="Job title, skill or company"
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
        />
      </label>

      <span className="hidden h-6 w-px bg-white/10 sm:block" aria-hidden="true" />

      <label className="hidden min-w-0 flex-1 items-center gap-2.5 px-3 sm:flex">
        <MapPin className="size-4 shrink-0 text-neutral-500" />
        <input
          type="text"
          name="location"
          placeholder="Location or Remote"
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
        />
      </label>

      <Button
        type="submit"
        size="icon"
        aria-label="Search jobs"
        className="size-11 shrink-0 rounded-xl bg-indigo-500 text-white hover:bg-indigo-400"
      >
        <Search />
      </Button>
    </form>
  )
}

export function Hero() {
  return (
    <section className="px-4 pt-20 pb-10 text-white md:pt-28 md:pb-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs">
          <Flame className="size-3.5 text-orange-400" />
          <span className="font-semibold">50,000+</span>
          <span className="uppercase tracking-wider text-neutral-400">
            New jobs this month
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Find Your Dream Job Today
        </h1>

        {/* Subtext */}
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">
          HireLoop connects top talent with world-class companies. Browse thousands of
          curated opportunities and land your next role — faster.
        </p>

        {/* Search */}
        <div className="mt-8 w-full">
          <SearchBar />
        </div>

        {/* Trending tags */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="text-neutral-500">Trending Position:</span>
          {trendingTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs text-neutral-300 transition-colors hover:border-white/25 hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
