import type React from "react"
import {
  FiCheck,
  FiGithub,
  FiTwitter,
  FiSend,
  FiMusic,
  FiSearch,
  FiUsers,
  FiBookOpen,
  FiArrowRight,
} from "react-icons/fi"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-slate-200">
      <GradientBG />

      <main className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Header */}
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Conic brand mark */}
            <div
              aria-hidden="true"
              className="h-8 w-8 rounded-lg shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
              style={{
                background: "conic-gradient(from 180deg at 50% 50%, #0ea5e9, #0ea5e9 50%, #14b8a6 50%)",
              }}
            />
            <span className="sr-only">JioSaavn API</span>
            <div className="hidden items-center gap-2 text-sm md:flex">
              <Badge>Unofficial</Badge>
              <Badge>TS</Badge>
            </div>
          </div>

          <nav className="hidden items-center gap-4 md:flex">
            <a href="#features" className="text-sm text-slate-400 hover:text-white">
              Features
            </a>
            <a href="#docs" className="text-sm text-slate-400 hover:text-white">
              Docs
            </a>
            <a
              href="https://github.com/KEX001/Jiosaavan"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-400 hover:text-white"
            >
              GitHub
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mb-14 text-center md:mb-20 animate-in fade-in-0 slide-in-from-bottom-2 duration-500">
          <SectionLabel>
            <span className="h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
            Stable API
          </SectionLabel>

          <h1 className="text-balance bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            JioSaavn API
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-slate-400 md:mt-4 md:text-lg">
            Modern TypeScript wrapper for JioSaavn — clean, fast, and reliable music metadata access.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <GlassButton variant="ghost" as="a" href="#docs" ariaLabel="View documentation">
              <FiBookOpen className="h-4 w-4" aria-hidden="true" />
              View Docs
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </GlassButton>

            <GlassButton
              variant="ghost"
              as="a"
              href="https://github.com/KEX001/Jiosaavan"
              target="_blank"
              rel="noreferrer"
              ariaLabel="Open GitHub repository"
            >
              <FiGithub className="h-4 w-4" aria-hidden="true" />
              Open on GitHub
            </GlassButton>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          <GlassCard>
            <CardIcon className="bg-teal-500/15 text-teal-400">
              <FiMusic className="h-5 w-5" aria-hidden="true" />
            </CardIcon>
            <h3 className="mb-2 text-xl font-semibold">Core features</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <FiCheck className="mt-0.5 shrink-0 text-teal-400" />
                Rich music metadata
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="mt-0.5 shrink-0 text-teal-400" />
                TypeScript-first approach
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="mt-0.5 shrink-0 text-teal-400" />
                High-performance API
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="mt-0.5 shrink-0 text-teal-400" />
                Detailed documentation
              </li>
            </ul>
          </GlassCard>

          <a href="https://github.com/KEX001/Jiosaavan" target="_blank" rel="noreferrer" className="group">
            <GlassCard>
              <CardIcon className="bg-teal-500/15 text-teal-400">
                <FiGithub className="h-5 w-5" aria-hidden="true" />
              </CardIcon>
              <h3 className="mb-1 text-xl font-semibold">Open source</h3>
              <p className="mb-3 text-sm text-slate-400">Explore and contribute on GitHub.</p>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-sky-400 transition-transform group-hover:translate-x-0.5">
                View repository
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </div>
            </GlassCard>
          </a>

          <GlassCard>
            <CardIcon className="bg-teal-500/15 text-teal-400">
              <FiUsers className="h-5 w-5" aria-hidden="true" />
            </CardIcon>
            <h3 className="mb-1 text-xl font-semibold">Connect</h3>
            <p className="mb-3 text-sm text-slate-400">Reach out via these platforms:</p>
            <div className="flex items-center gap-4">
              <SocialLink href="https://github.com/kex001" label="GitHub profile">
                <FiGithub className="h-4 w-4" aria-hidden="true" />
              </SocialLink>
              <SocialLink href="https://twitter.com/kxunall" label="Twitter profile">
                <FiTwitter className="h-4 w-4" aria-hidden="true" />
              </SocialLink>
              <SocialLink href="https://t.me/ll_KEX_ll" label="Telegram">
                <FiSend className="h-4 w-4" aria-hidden="true" />
              </SocialLink>
            </div>
          </GlassCard>
        </section>

        {/* Docs */}
        <section id="docs" className="mt-16 md:mt-20">
          <GlassCard className="mx-auto max-w-4xl p-6 md:p-8">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="text-sm text-slate-400">https://jiosaavan-mu.vercel.app/</div>
              <div className="flex items-center gap-2 text-xs">
                <Badge>GET</Badge>
                <Badge>REST</Badge>
              </div>
            </div>

            <div className="grid gap-5 text-sm">
              <div>
                <div className="mb-2 text-xs uppercase tracking-wide text-teal-400">Search</div>
                <ul className="grid gap-1.5">
                  <DocRow verb="GET" path="/api/search" icon={<FiSearch />} />
                  <DocRow verb="GET" path="/api/search/songs" icon={<FiMusic />} />
                  <DocRow verb="GET" path="/api/search/albums" icon={<FiBookOpen />} />
                  <DocRow verb="GET" path="/api/search/artists" icon={<FiUsers />} />
                  <DocRow verb="GET" path="/api/search/playlists" icon={<FiGithub />} />
                </ul>
              </div>

              <div>
                <div className="mb-2 text-xs uppercase tracking-wide text-teal-400">Songs</div>
                <ul className="grid gap-1.5">
                  <DocRow verb="GET" path="/api/songs" icon={<FiMusic />} />
                  <DocRow verb="GET" path="/api/songs/:id" icon={<FiMusic />} />
                </ul>
              </div>

              <div>
                <div className="mb-2 text-xs uppercase tracking-wide text-teal-400">Artists</div>
                <ul className="grid gap-1.5">
                  <DocRow verb="GET" path="/api/artists" icon={<FiUsers />} />
                  <DocRow verb="GET" path="/api/artists/:id" icon={<FiUsers />} />
                  <DocRow verb="GET" path="/api/artists/:id/songs" icon={<FiMusic />} />
                  <DocRow verb="GET" path="/api/artists/:id/albums" icon={<FiBookOpen />} />
                </ul>
              </div>

              <div>
                <div className="mb-2 text-xs uppercase tracking-wide text-teal-400">Collections</div>
                <ul className="grid gap-1.5">
                  <DocRow verb="GET" path="/api/albums" icon={<FiBookOpen />} />
                  <DocRow verb="GET" path="/api/playlists" icon={<FiGithub />} />
                </ul>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Footer */}
        <footer className="mt-16 pb-4 text-center text-xs text-slate-400 md:mt-20">
          <div className="mx-auto max-w-6xl border-t border-white/10 pt-5">
            <p>© {new Date().getFullYear()} JioSaavn. Not affiliated with JioSaavn.</p>
            <p className="mt-2">Built by Kunal</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

/* --- UI helpers updated to support glass + gradient + react-icons --- */

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1">{children}</span>
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
      {children}
    </div>
  )
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors hover:border-white/15 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-px rounded-xl bg-gradient-to-b from-white/8 to-transparent"
      />
      {/* subtle, non-neon liquid glow */}
      <div className="pointer-events-none absolute -inset-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute left-0 top-0 h-56 w-56 -translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-tr from-sky-500/12 to-teal-500/12 blur-3xl" />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

function CardIcon({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-md ${className}`}>{children}</div>
}

function GlassButton({
  children,
  as = "button",
  href,
  target,
  rel,
  ariaLabel,
  variant = "solid",
}: {
  children: React.ReactNode
  as?: "a" | "button"
  href?: string
  target?: string
  rel?: string
  ariaLabel?: string
  variant?: "solid" | "ghost"
}) {
  const classBase =
    "group relative inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 font-semibold backdrop-blur-xl transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40 focus-visible:ring-offset-0"

  // Solid uses a soft blue→teal gradient; Ghost is transparent glass
  const solid =
    "bg-gradient-to-r from-sky-500 to-teal-500 text-slate-950 hover:brightness-95 shadow-[0_10px_40px_-10px_rgba(14,165,233,0.25)] active:translate-y-px"

  const ghost =
    "border border-white/15 bg-white/10 text-white hover:bg-white/15 active:translate-y-px shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_-12px_rgba(0,0,0,0.5)]"

  const classes = `${classBase} ${variant === "solid" ? solid : ghost}`

  const inner = (
    <>
      {/* top-edge glossy highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/12 to-white/[0.02] opacity-90"
      />
      {/* subtle inner ring for glass depth */}
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      {/* liquid color glow (muted blue→teal, non-neon) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/10 to-teal-500/10 blur-xl"
      />
      {/* droplet highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-3 left-3 h-12 w-12 rounded-full bg-white/12 blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  )

  if (as === "a") {
    return (
      <a href={href} target={target} rel={rel} aria-label={ariaLabel} className={classes}>
        {inner}
      </a>
    )
  }
  return (
    <button aria-label={ariaLabel} className={classes}>
      {inner}
    </button>
  )
}

function DocRow({
  verb,
  path,
  icon,
}: {
  verb: string
  path: string
  icon?: React.ReactNode
}) {
  return (
    <li className="flex items-center gap-2">
      <Verb>{verb}</Verb>
      <Path>
        <span className="mr-1 inline-flex items-center text-sky-400">{icon}</span>
        {path}
      </Path>
    </li>
  )
}

function Path({ children }: { children: React.ReactNode }) {
  return <code className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-1 text-[0.92em]">{children}</code>
}

function Verb({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-semibold text-teal-400">
      {children}
    </span>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group text-[length:inherit] text-current transition focus-visible:outline-none"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 group-focus-visible:ring-2 group-focus-visible:ring-sky-400/40">
        {children}
      </div>
    </a>
  )
}

function GradientBG() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-500/18 to-transparent blur-3xl" />
        <div className="absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-to-l from-teal-500/18 to-transparent blur-3xl" />
      </div>
    </>
  )
}
