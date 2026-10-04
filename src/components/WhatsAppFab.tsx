import { site, waGeneral } from "@/lib/site";
import { IconPhone, IconWhatsApp } from "./Icons";

export default function WhatsAppFab() {
  return (
    <>
      <a
        href={waGeneral}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with KMS Home Appliances on WhatsApp"
        className="group fixed right-5 bottom-20 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-8px_rgba(37,211,102,0.7)] transition hover:scale-105 sm:bottom-6"
      >
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20"
        />
        <IconWhatsApp className="relative h-7 w-7" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-white/95 backdrop-blur-md sm:hidden">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-2 border-r border-line py-4 font-display text-[0.9rem] font-bold text-ink"
        >
          <IconPhone className="h-4 w-4 text-brand" />
          Call now
        </a>
        <a
          href={waGeneral}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 font-display text-[0.9rem] font-bold text-flame"
        >
          <IconWhatsApp className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
