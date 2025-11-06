import React from "react";
import { Book, FileDown, GraduationCap, Video } from "lucide-react";

const features = [
  {
    title: "Subject Notes",
    desc: "Curated notes organized by subject, unit, and topic.",
    icon: Book,
  },
  {
    title: "Assignments",
    desc: "Track and access assignment briefs and due dates.",
    icon: FileDown,
  },
  {
    title: "Textbooks",
    desc: "Quick links to recommended textbooks and references.",
    icon: GraduationCap,
  },
  {
    title: "Tutorial Videos",
    desc: "Embedded videos that clarify tough concepts.",
    icon: Video,
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-bold text-slate-900 md:text-3xl">Everything you need to study smarter</h2>
        <p className="mt-2 text-center text-slate-600">Organized resources with smooth navigation and search.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 inline-flex rounded-lg bg-blue-50 p-2 text-blue-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
