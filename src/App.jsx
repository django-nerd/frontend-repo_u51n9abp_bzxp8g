import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />

        <section className="bg-blue-50/60 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Quick links</h3>
              <p className="mt-1 text-sm text-slate-600">
                Jump straight to the most-used sections of the portal.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  to="/academics"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Academics
                </Link>
                <Link
                  to="/downloader"
                  className="rounded-lg border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Downloader
                </Link>
                <Link
                  to="/assignments"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Assignments
                </Link>
              </div>
              <div className="mt-6 rounded-lg bg-blue-50 p-4 text-sm text-blue-900">
                <p className="font-medium">How to edit this page</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Change the hero text or buttons inside the Hero component.</li>
                  <li>Update features in the FeatureGrid component by editing its array.</li>
                  <li>Add new quick links in this section as needed.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
