"use client";

import { useState } from "react";
import { services, site, wa } from "@/lib/site";
import SectionHead from "./SectionHead";
import { IconClock, IconMail, IconPhone, IconPin, IconWhatsApp } from "./Icons";

const fieldClass =
  "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-[0.95rem] text-white placeholder:text-white/35 outline-none transition focus:border-sky focus:bg-white/10";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [service, setService] = useState(services[0].title);
  const [message, setMessage] = useState("");

  const text = [
    `Hi ${site.name}, I would like to book a service.`,
    ``,
    `Name: ${name || "-"}`,
    `Phone: ${phone || "-"}`,
    `Area in Coimbatore: ${area || "-"}`,
    `Service needed: ${service}`,
    `Details: ${message || "-"}`,
  ].join("\n");

  const details = [
    { Icon: IconPhone, label: "Call us", value: site.phoneDisplay, href: site.phoneHref },
    {
      Icon: IconWhatsApp,
      label: "WhatsApp",
      value: site.phoneDisplay,
      href: wa(`Hi ${site.name}, I need an appliance service in Coimbatore.`),
    },
    { Icon: IconMail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { Icon: IconPin, label: "Service area", value: "Coimbatore city, Tamil Nadu" },
  ];

  return (
    <section id="contact" className="u-grain relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(245,124,31,0.18),transparent_64%)]"
      />
      <div className="u-wrap relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHead
            tone="dark"
            eyebrow="Contact"
            title={
              <>
                Tell us what&apos;s{" "}
                <span className="text-amber">not working</span>
              </>
            }
            body="Message, call, or fill the form and we will open WhatsApp with your details already typed out."
          />

          <ul className="mt-10 space-y-5">
            {details.map(({ Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.07] text-sky">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white/40">
                      {label}
                    </span>
                    <span className="mt-1 block font-display text-[1rem] font-bold text-white">
                      {value}
                    </span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 transition hover:opacity-80"
                    >
                      {inner}
                    </a>
                  ) : (
                    <span className="flex items-center gap-4">{inner}</span>
                  )}
                </li>
              );
            })}
          </ul>

          <p className="mt-9 flex items-center gap-2.5 border-t border-white/10 pt-7 text-[0.88rem] text-white/50">
            <IconClock className="h-4 w-4 text-sky" />
            {site.hours}
          </p>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(wa(text), "_blank", "noopener,noreferrer");
            }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9"
          >
            <h3 className="font-display text-[1.35rem] font-extrabold tracking-tight text-white">
              Request a callback
            </h3>
            <p className="mt-2 text-[0.9rem] text-white/50">
              Nothing is stored on this site — the form simply opens WhatsApp for you.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[0.78rem] font-semibold text-white/60">
                  Your name
                </span>
                <input
                  className={fieldClass}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[0.78rem] font-semibold text-white/60">
                  Phone number
                </span>
                <input
                  className={fieldClass}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile"
                  inputMode="tel"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[0.78rem] font-semibold text-white/60">
                  Area in Coimbatore
                </span>
                <input
                  className={fieldClass}
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="e.g. Peelamedu"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[0.78rem] font-semibold text-white/60">
                  Service needed
                </span>
                <select
                  className={`${fieldClass} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat`}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff88' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                  }}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.title} className="bg-ink text-white">
                      {s.title}
                    </option>
                  ))}
                  <option value="Something else" className="bg-ink text-white">
                    Something else
                  </option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-[0.78rem] font-semibold text-white/60">
                  What is the problem?
                </span>
                <textarea
                  className={`${fieldClass} min-h-28 resize-y`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Brand, model and what it is doing — or not doing."
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-flame px-7 py-4 font-display text-[1rem] font-bold text-white shadow-[0_18px_40px_-16px_rgba(245,124,31,0.95)] transition hover:bg-[#e06d12] sm:w-auto"
            >
              <IconWhatsApp className="h-5 w-5" />
              Send on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
