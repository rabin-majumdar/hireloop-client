import { Hero } from "@/components/home/hero"
import { JobDiscovery } from "@/components/home/job-discovery"
import { Showcase } from "@/components/home/showcase"
import { StatsSection } from "@/components/home/stats-section"

export default function Page() {
  return (
    <main>
      <Showcase>
        <Hero />
        <StatsSection />
      </Showcase>
      <JobDiscovery />
    </main>
  )
}
