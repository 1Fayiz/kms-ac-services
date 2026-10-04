import { areas, services, site, waGeneral } from "@/lib/site";
import { IconPhone, IconWhatsApp } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-white">
      <div className="u-wrap grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink font-display text-[0.95rem] font-extrabold tracking-tight text-white">
              KMS
            </span>
            <span className="leading-none">
              <span className="block font-display text-[1.05rem] font-extrabold tracking-tight text-ink">
                Home Appliances
              </span>
              <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-flame">
                {site.tagline}
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-[0.9rem] leading-relaxed text-ink/55">
            Doorstep air conditioner, washing machine and refrigerator service across Coimbatore
            city — genuine parts, upfront pricing and a warranty on every job.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-flame px-5 py-3 text-[0.85rem] font-bold text-white transition hover:bg-[#e06d12]"
            >
              <IconWhatsApp className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-[0.85rem] font-bold text-ink transition hover:bg-sand"
            >
              <IconPhone className="h-4 w-4 text-brand" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="u-eyebrow text-ink/40">Services</p>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.id}>
                <a
                  href="#services"
                  className="text-[0.9rem] text-ink/60 transition hover:text-flame"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <p className="u-eyebrow text-ink/40">Areas covered in Coimbatore</p>
          <p className="mt-5 text-[0.9rem] leading-relaxed text-ink/55">
            {areas.join(" · ")} and the rest of Coimbatore city.
          </p>
          <p className="mt-6 text-[0.85rem] text-ink/45">
            {site.hours}
            <br />
            <a href={`mailto:${site.email}`} className="transition hover:text-flame">
              {site.email}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="u-wrap flex flex-col items-center justify-between gap-3 py-6 text-[0.8rem] text-ink/45 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Coimbatore, Tamil Nadu · Your appliance, our priority.</p>
        </div>
      </div>
    </footer>
  );
}
