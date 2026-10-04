import { steps } from "@/lib/site";
import SectionHead from "./SectionHead";

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-28">
      <div className="u-wrap">
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              From one message to a{" "}
              <span className="text-brand">working appliance</span>
            </>
          }
          body="No app, no account, no twenty-field enquiry form. Five steps, start to finish."
        />

        <ol className="mt-14 space-y-0">
          {steps.map((s, i) => (
            <li key={s.title} className="group relative flex gap-6 sm:gap-10">
              <div className="flex flex-col items-center">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-line bg-white font-display text-[0.95rem] font-extrabold text-ink transition-colors duration-300 group-hover:border-flame group-hover:bg-flame group-hover:text-white">
                  {i + 1}
                </span>
                {i !== steps.length - 1 && (
                  <span className="w-[2px] flex-1 bg-line" aria-hidden />
                )}
              </div>
              <div className={i !== steps.length - 1 ? "pb-10" : ""}>
                <h3 className="font-display text-[1.25rem] leading-snug font-extrabold tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-2.5 max-w-xl text-[0.95rem] leading-relaxed text-ink/60">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
