import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-600">
            Copyright © {year} Made by <span className="font-semibold">C₹IXPY</span> and <span className="font-semibold">Varun Bhatt</span>
          </p>
          <p className="text-xs text-slate-500">Built with ❤️ for VCET</p>
        </div>
      </div>
    </footer>
  );
}
