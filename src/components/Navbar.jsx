import React, { useState } from "react";
import { Menu, X, GraduationCap, Search } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/academics", label: "Academics" },
  { href: "/downloader", label: "Downloader" },
  { href: "/assignments", label: "Assignments" },
  { href: "/blog", label: "Blog" },
  { href: "/exams", label: "Exams" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-slate-900">VCET Study Portal</p>
            <p className="text-xs text-slate-500">Visvesvaraya College</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="rounded px-2 py-1 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {l.label}
            </Link>
          ))}
          <form
            role="search"
            className="relative hidden items-center md:flex"
            onSubmit={(e) => e.preventDefault()}
          >
            <Search className="pointer-events-none absolute left-3 h-4 w-4 text-slate-400" />
            <input
              type="search"
              placeholder="Search..."
              aria-label="Search site"
              className="w-52 rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-700 shadow-sm outline-none ring-blue-500 transition focus:ring-2"
            />
          </form>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="mb-3">
              <form role="search" onSubmit={(e) => e.preventDefault()} className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search..."
                  aria-label="Search site"
                  className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-700 shadow-sm outline-none ring-blue-500 transition focus:ring-2"
                />
              </form>
            </div>
            <div className="grid gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
