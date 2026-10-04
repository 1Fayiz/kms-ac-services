type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconAc({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <rect x="2.5" y="4" width="19" height="8" rx="2.2" />
      <path d="M5.5 8.5h13M6 15c0 1.6 1.2 1.6 1.2 3.2M11.4 15c0 1.6 1.2 1.6 1.2 3.2M16.8 15c0 1.6 1.2 1.6 1.2 3.2" />
    </svg>
  );
}

export function IconWasher({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <rect x="4" y="2.5" width="16" height="19" rx="2.4" />
      <path d="M4 7h16" />
      <circle cx="12" cy="14.5" r="4.3" />
      <path d="M8.4 12.6c1.4 1.3 2.4-1 3.8.2s2.4-1 3.5.2" />
      <circle cx="16.8" cy="4.8" r=".7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFridge({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <rect x="5" y="2.5" width="14" height="19" rx="2.4" />
      <path d="M5 10h14M8.2 5.6v2.2M8.2 12.4v2.6" />
    </svg>
  );
}

export function IconGas({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <path d="M12 2.6v18.8M12 6.6 8.6 4.4M12 6.6l3.4-2.2M12 17.4l-3.4 2.2M12 17.4l3.4 2.2" />
      <path d="m3.9 7.3 16.2 9.4M7.5 9.4 7 5.3M7.5 9.4l-3.9.9M16.5 14.6l.5 4.1M16.5 14.6l3.9-.9" />
    </svg>
  );
}

export function IconClean({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <path d="M8.5 13.5h7l-.9 6.2a1.6 1.6 0 0 1-1.6 1.4h-2a1.6 1.6 0 0 1-1.6-1.4Z" />
      <path d="M9.4 13.5V6.2a2.6 2.6 0 0 1 5.2 0v1.1" />
      <path d="M4.2 4.4v2.2M3.1 5.5h2.2M18.6 2.6v1.8M17.7 3.5h1.8" />
    </svg>
  );
}

export function IconAmc({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <path d="M12 2.6 4 6v6c0 4.5 3.3 8.2 8 9.4 4.7-1.2 8-4.9 8-9.4V6Z" />
      <path d="m8.8 11.8 2.3 2.4 4.1-4.6" />
    </svg>
  );
}

export function IconWhatsApp({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.06 8.06 0 0 1 2.37 5.73c0 4.48-3.64 8.12-8.13 8.12a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.81.82-3-.19-.31a8.07 8.07 0 0 1-1.24-4.32c0-4.48 3.65-8.12 8.15-8.12Zm-2.8 4.03c-.21-.47-.43-.48-.63-.49h-.54c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.34s1 2.72 1.14 2.9c.14.19 1.95 2.99 4.8 4.07 2.37.9 2.85.72 3.37.68.52-.05 1.67-.68 1.9-1.35.23-.66.23-1.23.17-1.35-.07-.11-.26-.19-.54-.33-.28-.14-1.67-.82-1.93-.91-.26-.1-.45-.14-.63.14-.19.28-.73.91-.89 1.1-.17.19-.33.21-.61.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.13-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.49-.07-.14-.62-1.53-.85-2.09Z" />
    </svg>
  );
}

export function IconPhone({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <path d="M6.3 3.5h3L10.6 7 8.8 8.4a12.4 12.4 0 0 0 6.8 6.8L17 13.4l3.5 1.3v3a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.3 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function IconPin({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <path d="M12 21.4s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </svg>
  );
}

export function IconClock({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.4 2" />
    </svg>
  );
}

export function IconMail({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <rect x="2.6" y="4.8" width="18.8" height="14.4" rx="2.2" />
      <path d="m3.4 6.6 8.6 6 8.6-6" />
    </svg>
  );
}

export function IconArrow({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconStar({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="m12 2.8 2.7 5.9 6.4.7-4.8 4.3 1.3 6.3L12 16.8 6.4 20l1.3-6.3-4.8-4.3 6.4-.7Z" />
    </svg>
  );
}

export const serviceIcons = {
  ac: IconAc,
  washer: IconWasher,
  fridge: IconFridge,
  gas: IconGas,
  clean: IconClean,
  amc: IconAmc,
};
