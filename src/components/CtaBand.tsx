import { site, waGeneral } from "@/lib/site";
import { IconArrow, IconPhone, IconWhatsApp } from "./Icons";

export default function CtaBand() {
  return (
    <section className="bg-white pb-20 sm:pb-28">
      <div className="u-wrap">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-dark via-brand to-sky px-8 py-14 text-center sm:px-14 sm:py-16">
          <div
            aria-hidden
            className="u-grain pointer-events-none absolute inset-0 opacity-60"
          />
          <div className="relative">
            <p className="u-eyebrow text-white/70">Same-day slots in Coimbatore</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] leading-[1.1] font-extrabold tracking-[-0.025em] text-white sm:text-[2.6rem]">
              Stop living around a broken appliance.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-relaxed text-white/75">
              One message tells us the problem. We will tell you the price and the time — before
              anyone leaves the workshop.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={waGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 font-display text-[1rem] font-bold text-ink transition hover:bg-sand sm:w-auto"
              >
                <IconWhatsApp className="h-5 w-5 text-[#25D366]" />
                Book on WhatsApp
                <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/35 px-7 py-4 font-display text-[1rem] font-bold text-white transition hover:bg-white/10 sm:w-auto"
              >
                <IconPhone className="h-5 w-5" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
