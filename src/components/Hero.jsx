import React from "react";
import { ArrowRight, BookOpenCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            VCET — Visvesvaraya College of Engineering & Technology
          </h1>
          <p className="mt-4 max-w-prose text-slate-600">
            A modern, mobile-first study portal for notes, assignments, textbooks, and tutorial videos. Fast, accessible, and available anywhere.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Explore Academics <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/downloader"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-4 py-2.5 text-blue-700 shadow-sm transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <BookOpenCheck className="h-4 w-4" /> Downloader
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <img
              alt="Students studying with laptops and books"
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1470&auto=format&fit=crop"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
