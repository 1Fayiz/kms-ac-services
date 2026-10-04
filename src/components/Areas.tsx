import { areas, site, waGeneral } from "@/lib/site";
import SectionHead from "./SectionHead";
import { IconPin, IconWhatsApp } from "./Icons";

export default function Areas() {
  return (
    <section id="areas" className="bg-mist py-20 sm:py-28">
      <div className="u-wrap grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHead
            eyebrow="Where we work"
            title={
              <>
                Coimbatore city.{" "}
                <span className="text-brand">Nowhere else.</span>
              </>
            }
            body="We deliberately stay inside the city instead of stretching across the district. A short drive is the only reason a same-day slot is realistic."
          />

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-brand/15 bg-white p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-brand">
              <IconPin className="h-5 w-5" />
            </span>
            <p className="text-[0.9rem] leading-relaxed text-ink/65">
              Not sure if your street is covered? Send the location pin on WhatsApp to{" "}
              <strong className="font-semibold text-ink">{site.phoneDisplay}</strong> and we will
              tell you in a minute.
            </p>
          </div>

          <a
            href={waGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-flame px-6 py-3.5 font-display text-[0.92rem] font-bold text-white shadow-[0_14px_30px_-14px_rgba(245,124,31,0.9)] transition hover:bg-[#e06d12]"
          >
            <IconWhatsApp className="h-4 w-4" />
            Check my area
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-line bg-white p-8 sm:p-10">
            <p className="u-eyebrow text-ink/40">Neighbourhoods we cover daily</p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {areas.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-line bg-sand px-4 py-2 text-[0.85rem] font-semibold text-ink/70 transition hover:border-brand/40 hover:bg-mist hover:text-brand-dark"
                >
                  {a}
                </li>
              ))}
              <li className="rounded-full bg-ink px-4 py-2 text-[0.85rem] font-semibold text-white">
                + all of Coimbatore city
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
