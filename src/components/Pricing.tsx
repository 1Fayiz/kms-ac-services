import { pricing, waGeneral } from "@/lib/site";
import SectionHead from "./SectionHead";
import { IconArrow, IconWhatsApp } from "./Icons";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-sand py-20 sm:py-28">
      <div className="u-wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHead
            eyebrow="Transparent rates"
            title={
              <>
                What it costs, <span className="text-brand">before you call</span>
              </>
            }
            body="Indicative starting prices for Coimbatore. The final figure depends on the fault and the parts, and you always approve it in writing first."
          />
          <a
            href={waGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 font-display text-[0.92rem] font-bold text-white transition hover:bg-ink-2"
          >
            <IconWhatsApp className="h-4 w-4 text-sky" />
            Get an exact quote
            <IconArrow className="h-4 w-4" />
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-3xl border border-line bg-white">
            {pricing.map((p, i) => (
              <div
                key={p.job}
                className={`flex items-center justify-between gap-6 px-6 py-5 sm:px-8 ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <div>
                  <p className="font-display text-[1rem] font-bold text-ink">{p.job}</p>
                  <p className="mt-1 text-[0.8rem] text-ink/45">{p.note}</p>
                </div>
                <p className="shrink-0 text-right">
                  <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-flame">
                    From
                  </span>
                  <span className="font-display text-[1.35rem] font-extrabold tracking-tight text-ink tabular-nums">
                    {p.from}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 px-2 text-[0.8rem] leading-relaxed text-ink/45">
            Diagnosis charge is adjusted into the bill when you go ahead with the repair. GST
            applicable where relevant.
          </p>
        </div>
      </div>
    </section>
  );
}
