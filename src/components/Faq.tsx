import { faqs, waGeneral } from "@/lib/site";
import SectionHead from "./SectionHead";
import { IconWhatsApp } from "./Icons";

export default function Faq() {
  return (
    <section id="faq" className="bg-sand py-20 sm:py-28">
      <div className="u-wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHead
            eyebrow="FAQ"
            title={
              <>
                Questions we get{" "}
                <span className="text-brand">every week</span>
              </>
            }
          />
          <div className="mt-8 rounded-3xl border border-line bg-white p-6">
            <p className="font-display text-[1.05rem] font-bold text-ink">
              Still not answered?
            </p>
            <p className="mt-2 text-[0.88rem] leading-relaxed text-ink/55">
              Message us and a real technician replies — not a bot.
            </p>
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-display text-[0.88rem] font-bold text-white transition hover:bg-ink-2"
            >
              <IconWhatsApp className="h-4 w-4 text-sky" />
              Ask on WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="overflow-hidden rounded-3xl border border-line bg-white">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className={`group px-6 sm:px-8 ${i !== 0 ? "border-t border-line" : ""}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-[1.02rem] font-bold text-ink transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden
                    className="relative grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-ink/50 transition group-open:border-flame group-open:bg-flame group-open:text-white"
                  >
                    <span className="absolute h-[1.5px] w-3 bg-current" />
                    <span className="absolute h-3 w-[1.5px] bg-current transition-transform group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="-mt-1 pb-6 pr-10 text-[0.93rem] leading-relaxed text-ink/60">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
