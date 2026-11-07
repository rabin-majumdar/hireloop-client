import Link from "next/link"

import { AuthCard } from "@/components/auth/auth-card"
import { SignInForm } from "@/components/auth/sign-in-form"
import { SocialButtons } from "@/components/auth/social-buttons"

export const metadata = {
  title: "Sign In | HireLoop",
}

export default function SignInPage() {
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to continue your job search."
      footer={
        <>
          New to HireLoop?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            Create an account
          </Link>
        </>
      }
    >
      <SignInForm />

      <div
        className="my-6 flex items-center gap-3"
        role="separator"
        aria-label="Or continue with"
      >
        <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
        <span className="text-xs uppercase tracking-wider text-neutral-500">or</span>
        <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
      </div>

      <SocialButtons />
    </AuthCard>
  )
}
