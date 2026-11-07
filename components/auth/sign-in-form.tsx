"use client"

import { useState } from "react"

import { authClient } from "@/lib/auth-client"

const fieldClasses =
  "w-full rounded-lg border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"

export function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setLoading(true)

    const { error: signInError } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    })

    if (signInError) {
      setError(signInError.message ?? "Failed to sign in. Please try again.")
      setLoading(false)
    }
    // On success better-auth redirects the browser to the callbackURL.
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-neutral-300">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-1.5 block text-sm text-neutral-300">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="••••••••"
          className={fieldClasses}
        />
      </div>

      {error && (
        <p
          role="alert"
          className="rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm text-red-400"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-indigo-500 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-400 disabled:pointer-events-none disabled:opacity-60"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  )
}
