import { reviews } from "@/lib/site";
import SectionHead from "./SectionHead";
import { IconStar } from "./Icons";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 sm:py-28">
      <div className="u-wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead
            eyebrow="Customer reviews"
            title={
              <>
                What Coimbatore says{" "}
                <span className="text-brand">after we leave</span>
              </>
            }
          />
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-sand px-5 py-3.5">
            <div className="flex text-amber">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-4 w-4" />
              ))}
            </div>
            <p className="text-[0.85rem] font-semibold text-ink">
              4.9 average
              <span className="ml-1.5 font-normal text-ink/45">· 600+ reviews</span>
            </p>
          </div>
        </div>

        <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="break-inside-avoid rounded-3xl border border-line bg-white p-7 transition-shadow duration-300 hover:shadow-[0_24px_50px_-30px_rgba(7,26,51,0.4)]"
            >
              <div className="flex text-amber">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-[0.9rem] w-[0.9rem]" />
                ))}
              </div>
              <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mist font-display text-[0.8rem] font-extrabold text-brand-dark">
                  {r.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <span>
                  <span className="block font-display text-[0.92rem] font-bold text-ink">
                    {r.name}
                  </span>
                  <span className="mt-0.5 block text-[0.78rem] text-ink/45">{r.place}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
