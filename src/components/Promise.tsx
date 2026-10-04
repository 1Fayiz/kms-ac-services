import SectionHead from "./SectionHead";

const promises = [
  {
    k: "01",
    t: "The price you hear is the price you pay",
    d: "You get a full quote — parts and labour itemised — before a single screw comes out. No revised figure at the end, no invented extras.",
  },
  {
    k: "02",
    t: "Genuine parts, or we tell you plainly",
    d: "We fit original or OEM-grade spares and hand you the old part. If only a compatible part is available, you hear it before we fit it.",
  },
  {
    k: "03",
    t: "Technicians who live in this city",
    d: "Our team is based in Coimbatore, not routed from a call centre. That is how a same-day promise stays a promise and not a maybe.",
  },
  {
    k: "04",
    t: "Written warranty on every repair",
    d: "Labour and parts are covered in writing on your bill. If the same fault returns inside that window, we come back at no charge.",
  },
];

export default function Promise() {
  return (
    <section className="u-grain relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(56,168,240,0.16),transparent_68%)]"
      />
      <div className="u-wrap relative">
        <SectionHead
          tone="dark"
          align="center"
          eyebrow="Why KMS"
          title={
            <>
              Four things we will not{" "}
              <span className="text-amber">bend on</span>
            </>
          }
          body="Appliance repair has a reputation problem. These are the rules we built the business around."
        />

        <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {promises.map((p) => (
            <div key={p.k} className="flex gap-6">
              <span className="font-display text-[2.4rem] leading-none font-extrabold tracking-tight text-white/12">
                {p.k}
              </span>
              <div className="border-l border-white/10 pl-6">
                <h3 className="font-display text-[1.2rem] leading-snug font-extrabold text-white">
                  {p.t}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-white/55">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
