"use client";

import { useEffect, useState } from "react";
import { site, waGeneral } from "@/lib/site";
import { IconClock, IconPhone, IconWhatsApp } from "./Icons";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "How it works" },
  { href: "#areas", label: "Coverage" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="hidden bg-ink text-white/70 md:block">
        <div className="u-wrap flex h-10 items-center justify-between text-[0.8rem]">
          <p className="flex items-center gap-2">
            <IconClock className="h-4 w-4 text-sky" />
            {site.hours}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/50">Coimbatore city only</span>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 font-semibold text-white transition hover:text-amber"
            >
              <IconPhone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          stuck
            ? "border-line/80 bg-white/90 shadow-[0_8px_30px_-18px_rgba(7,26,51,0.5)] backdrop-blur-md"
            : "border-transparent bg-white"
        }`}
      >
        <div className="u-wrap flex h-[4.5rem] items-center justify-between gap-3">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-2.5 sm:gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink font-display text-[0.88rem] font-extrabold tracking-tight text-white sm:h-11 sm:w-11 sm:text-[0.95rem]">
              KMS
            </span>
            <span className="leading-none">
              <span className="block font-display text-[0.98rem] font-extrabold tracking-tight whitespace-nowrap text-ink sm:text-[1.05rem]">
                Home Appliances
              </span>
              <span className="mt-1 hidden text-[0.6rem] font-semibold uppercase tracking-[0.14em] whitespace-nowrap text-flame sm:block sm:text-[0.68rem] sm:tracking-[0.2em]">
                {site.tagline}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative text-[0.9rem] font-medium text-ink/70 transition hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-flame after:transition-all hover:after:w-full"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-line px-4 py-2.5 text-[0.85rem] font-semibold text-ink transition hover:border-ink/30 hover:bg-sand sm:flex"
            >
              <IconPhone className="h-4 w-4 text-brand" />
              Call
            </a>
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-flame px-4 py-2.5 text-[0.85rem] font-bold whitespace-nowrap text-white shadow-[0_10px_24px_-10px_rgba(245,124,31,0.9)] transition hover:bg-[#e06d12] sm:px-5"
            >
              <IconWhatsApp className="h-4 w-4" />
              <span className="sm:hidden">Book</span>
              <span className="hidden sm:inline">Book now</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line text-ink lg:hidden"
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 block h-[2px] w-5 bg-current transition-all ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-[2px] w-5 bg-current transition-all ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[2px] w-5 bg-current transition-all ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-line bg-white lg:hidden">
            <nav className="u-wrap flex flex-col py-2">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/70 py-4 font-display text-lg font-semibold text-ink last:border-0"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={site.phoneHref}
                onClick={() => setOpen(false)}
                className="mt-3 mb-4 flex items-center justify-center gap-2 rounded-full border border-ink/15 py-3.5 font-bold text-ink"
              >
                <IconPhone className="h-4 w-4 text-brand" />
                {site.phoneDisplay}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
