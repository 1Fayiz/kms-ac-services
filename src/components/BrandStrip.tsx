import { brands } from "@/lib/site";

export default function BrandStrip() {
  const loop = [...brands, ...brands];
  return (
    <section className="border-y border-line bg-sand py-7">
      <div className="u-wrap">
        <p className="text-center text-[0.72rem] font-bold uppercase tracking-[0.2em] text-ink/40">
          Servicing every major brand
        </p>
      </div>
      <div
        className="group relative mt-6 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused]">
          {loop.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="font-display text-[1.15rem] font-bold tracking-tight whitespace-nowrap text-ink/35 transition-colors hover:text-ink"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
