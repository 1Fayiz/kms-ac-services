import { site, waGeneral } from "@/lib/site";
import {
  IconAc,
  IconArrow,
  IconFridge,
  IconPhone,
  IconStar,
  IconWasher,
  IconWhatsApp,
} from "./Icons";

const stats = [
  { value: "12+", label: "Years in the trade" },
  { value: "6,000+", label: "Jobs completed" },
  { value: "4.9", label: "Average rating" },
];

const quickServices = [
  { Icon: IconAc, label: "Air conditioner" },
  { Icon: IconWasher, label: "Washing machine" },
  { Icon: IconFridge, label: "Refrigerator" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-14 pb-20 sm:pt-20 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(56,168,240,0.16),transparent_62%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-40 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(245,124,31,0.12),transparent_62%)]"
      />

      <div className="u-wrap relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="animate-rise lg:col-span-7">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-brand/20 bg-mist px-4 py-2 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-brand-dark">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-flame" />
            </span>
            Coimbatore city · same-day slots
          </p>

          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.03em] text-ink sm:text-[3.4rem] lg:text-[4rem]">
            Appliance repair that{" "}
            <span className="relative inline-block">
              <span className="relative z-10">actually turns up</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-[0.04em] z-0 h-[0.3em] rounded-sm bg-amber/45"
              />
            </span>{" "}
            the same day.
          </h1>

          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink/65">
            {site.name} services air conditioners, washing machines and refrigerators across{" "}
            <strong className="font-semibold text-ink">Coimbatore</strong> — at your door, with
            genuine parts, an upfront price and a written warranty on every job.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-flame px-7 py-4 font-display text-[1rem] font-bold text-white shadow-[0_18px_40px_-16px_rgba(245,124,31,0.95)] transition hover:bg-[#e06d12]"
            >
              <IconWhatsApp className="h-5 w-5" />
              Book on WhatsApp
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-ink/15 bg-white px-7 py-4 font-display text-[1rem] font-bold text-ink transition hover:border-ink/35 hover:bg-sand"
            >
              <IconPhone className="h-5 w-5 text-brand" />
              {site.phoneDisplay}
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-7">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-[1.9rem] font-extrabold leading-none tracking-tight text-ink">
                  {s.value}
                </dt>
                <dd className="mt-2 text-[0.8rem] leading-snug font-medium text-ink/55">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="u-grain relative overflow-hidden rounded-[2rem] bg-ink p-7 text-white shadow-[0_40px_80px_-40px_rgba(7,26,51,0.75)] sm:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(56,168,240,0.38),transparent_65%)]"
            />
            <p className="u-eyebrow text-sky">What we fix</p>
            <h2 className="mt-3 font-display text-[1.6rem] leading-tight font-extrabold tracking-tight">
              One number for every appliance in the house.
            </h2>

            <ul className="mt-7 space-y-3">
              {quickServices.map(({ Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 backdrop-blur-sm transition hover:border-sky/40 hover:bg-white/[0.1]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky/15 text-sky">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-[1rem] font-bold">{label}</span>
                  <IconArrow className="ml-auto h-4 w-4 text-white/35" />
                </li>
              ))}
            </ul>

            <div className="mt-7 flex items-center gap-4 rounded-2xl bg-white/[0.06] px-4 py-4">
              <div className="flex text-amber">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="text-[0.82rem] leading-snug text-white/65">
                Rated <strong className="font-bold text-white">4.9/5</strong> by Coimbatore
                households &amp; offices
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-line bg-white px-5 py-4 shadow-[0_24px_50px_-24px_rgba(7,26,51,0.45)] sm:block lg:-left-10">
            <p className="font-display text-[1.5rem] font-extrabold leading-none text-ink">90 min</p>
            <p className="mt-1.5 text-[0.75rem] font-semibold tracking-wide text-ink/55">
              Average arrival time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
