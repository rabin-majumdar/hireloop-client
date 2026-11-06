"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
]

function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="HireLoop"
        width={132}
        height={36}
        priority
        className="h-9 w-auto"
      />
    </Link>
  )
}

function DesktopNavLinks() {
  return (
    <ul className="hidden items-center md:flex">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="rounded-full px-3.5 py-1.5 text-sm text-neutral-300 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function DesktopActions() {
  return (
    <div className="hidden items-center gap-2 md:flex">
      <span className="h-5 w-px bg-white/15" aria-hidden="true" />
      <Link
        href="/sign-in"
        className="rounded-full px-3.5 py-1.5 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
      >
        Sign In
      </Link>
      <Button
        nativeButton={false}
        className="rounded-full bg-indigo-500 px-5 text-white hover:bg-indigo-400"
        size="lg"
        render={<Link href="/get-started" />}
      >
        Get Started
      </Button>
    </div>
  )
}

function MobileActions({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex flex-col gap-2 md:hidden">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onNavigate}
          className="rounded-lg px-3 py-2 text-sm text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
        >
          {link.label}
        </Link>
      ))}
      <span className="my-1 h-px bg-white/10" aria-hidden="true" />
      <Link
        href="/sign-in"
        onClick={onNavigate}
        className="rounded-lg px-3 py-2 text-sm font-medium text-indigo-400 transition-colors hover:bg-white/5"
      >
        Sign In
      </Link>
      <Button
        nativeButton={false}
        className="rounded-full bg-indigo-500 text-white hover:bg-indigo-400"
        size="lg"
        render={<Link href="/get-started" />}
      >
        <span className="flex w-full items-center justify-center">Get Started</span>
      </Button>
    </div>
  )
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto container flex items-center justify-between rounded-xl border border-white/10 bg-neutral-950/90 px-4 py-2.5 shadow-lg backdrop-blur sm:px-6">
        <Logo />

        {/* Desktop — সব কন্টেন্ট এক পাশে */}
        <div className="flex items-center gap-2">
          <DesktopNavLinks />
          <DesktopActions />
        </div>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="text-neutral-200 hover:bg-white/10 hover:text-white md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-neutral-950/95 p-3 shadow-lg backdrop-blur md:hidden">
          <MobileActions onNavigate={() => setIsMenuOpen(false)} />
        </div>
      )}
    </header>
  )
}
