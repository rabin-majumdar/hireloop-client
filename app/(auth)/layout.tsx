/**
 * Shared wrapper for auth pages. The navbar comes from the root layout, so this
 * wrapper only centers the auth card vertically in the remaining space.
 */
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-16">
      {children}
    </div>
  )
}
