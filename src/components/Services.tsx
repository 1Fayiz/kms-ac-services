import { services, wa } from "@/lib/site";
import SectionHead from "./SectionHead";
import { IconArrow, serviceIcons } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="u-wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead
            eyebrow="What we do"
            title={
              <>
                Six services, <span className="text-brand">one WhatsApp away</span>
              </>
            }
            body="Pick what is giving you trouble. Every job starts with a free phone diagnosis and ends with a warranty slip."
          />
          <p className="shrink-0 text-[0.85rem] font-medium text-ink/45 md:text-right">
            Residential · Office
            <br />
            Shops · Hostels
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon];
            return (
              <article
                key={s.id}
                className="group relative flex flex-col bg-white p-8 transition-colors duration-300 hover:bg-sand"
              >
                <span className="absolute top-7 right-7 font-display text-[0.8rem] font-bold tabular-nums text-ink/15">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mist text-brand transition-colors duration-300 group-hover:bg-ink group-hover:text-sky">
                  <Icon className="h-7 w-7" />
                </span>

                <h3 className="mt-6 font-display text-[1.3rem] font-extrabold tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.93rem] leading-relaxed text-ink/60">{s.blurb}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-line bg-white px-3 py-1.5 text-[0.75rem] font-semibold text-ink/55"
                    >
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href={wa(
                    `Hi KMS Home Appliances, I need ${s.title} in Coimbatore. When can a technician visit?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 font-display text-[0.9rem] font-bold text-flame transition-colors group-hover:text-ink"
                >
                  Book this service
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
