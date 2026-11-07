"use client"

import { useState } from "react"

import { authClient } from "@/lib/auth-client"

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 5.04c1.7 0 3.22.59 4.42 1.73l3.3-3.3C17.68 1.23 15.06 0 12 0 7.42 0 3.55 2.58 1.7 6.35l3.86 3C6.44 6.68 8.98 5.04 12 5.04z"
      />
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.79-.07-1.55-.2-2.27H12v4.51h6.45c-.28 1.48-1.1 2.73-2.35 3.57l3.72 2.89c2.18-2.02 3.68-5 3.68-8.7z"
      />
      <path
        fill="#FBBC05"
        d="M5.56 14.65a7.2 7.2 0 0 1 0-4.6l-3.86-3a11.97 11.97 0 0 0 0 10.6l3.86-3z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.06 0 5.68-1.01 7.58-2.73l-3.72-2.89c-1.04.7-2.36 1.12-3.86 1.12-3.02 0-5.56-1.64-6.44-4.32l-3.86 3C3.55 21.42 7.42 24 12 24z"
      />
    </svg>
  )
}

export function SocialButtons() {
  const [loading, setLoading] = useState(false)

  async function handleGoogle() {
    setLoading(true)
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    })
    // better-auth redirects the browser to Google; the loading state persists
    // until the navigation leaves this page.
  }

  return (
    <button
      type="button"
      onClick={handleGoogle}
      disabled={loading}
      className="flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white transition-colors hover:bg-white/5 disabled:pointer-events-none disabled:opacity-60"
    >
      <GoogleIcon />
      {loading ? "Redirecting..." : "Continue with Google"}
    </button>
  )
}
