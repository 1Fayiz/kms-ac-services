type Props = {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

export default function SectionHead({
  eyebrow,
  title,
  body,
  tone = "light",
  align = "left",
}: Props) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`u-eyebrow ${dark ? "text-sky" : "text-flame"}`}>{eyebrow}</p>
      <h2
        className={`mt-3 font-display text-[2rem] leading-[1.1] font-extrabold tracking-[-0.025em] sm:text-[2.6rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-4 text-[1.02rem] leading-relaxed ${
            dark ? "text-white/60" : "text-ink/60"
          }`}
        >
          {body}
        </p>
      )}
    </div>
  );
}
