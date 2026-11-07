import type { ReactNode } from "react"

type AuthCardProps = {
  title: string
  subtitle: string
  /** Bottom line of the card, e.g. a link to the opposite auth page. */
  footer: ReactNode
  children: ReactNode
}

/**
 * Common dark card shell shared by the auth pages (sign-in, sign-up). The page
 * passes its heading, forms, and footer link through props/slots.
 */
export function AuthCard({ title, subtitle, footer, children }: AuthCardProps) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-neutral-900/70 p-8">
      <h1 className="text-center text-2xl font-semibold text-white">{title}</h1>
      <p className="mt-2 text-center text-sm text-neutral-400">{subtitle}</p>

      <div className="mt-8">{children}</div>

      <p className="mt-8 text-center text-sm text-neutral-400">{footer}</p>
    </div>
  )
}
