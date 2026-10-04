export const site = {
  name: "KMS Home Appliances",
  shortName: "KMS",
  tagline: "Service & Maintenance",
  city: "Coimbatore",
  phoneDisplay: "+91 95444 00301",
  phoneHref: "tel:+919544400301",
  whatsappNumber: "919544400301",
  email: "service@kmshomeappliances.in",
  hours: "Monday – Sunday · 8:00 AM – 9:00 PM",
  url: "https://kms-ac-services.vercel.app",
} as const;

export function wa(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waGeneral = wa(
  `Hi KMS Home Appliances, I need an appliance service in Coimbatore. Could you share the details?`
);

export type Service = {
  id: string;
  title: string;
  blurb: string;
  points: string[];
  icon: "ac" | "washer" | "fridge" | "gas" | "clean" | "amc";
};

export const services: Service[] = [
  {
    id: "ac-repair",
    title: "AC Repair",
    blurb:
      "No cooling, water leaks, strange noise or a tripping unit — diagnosed and fixed at your door across Coimbatore.",
    points: ["Split, window & cassette", "PCB & compressor faults", "All major brands"],
    icon: "ac",
  },
  {
    id: "ac-service",
    title: "AC Service & Deep Cleaning",
    blurb:
      "Jet-spray coil and filter cleaning that brings back cooling, clears odour and cuts your monthly power bill.",
    points: ["Indoor + outdoor unit", "Drain line flush", "Anti-bacterial wash"],
    icon: "clean",
  },
  {
    id: "ac-gas",
    title: "AC Gas Filling",
    blurb:
      "Leak testing followed by accurate refrigerant top-up, so the cooling you pay for actually stays in the system.",
    points: ["Leak detection first", "R32 / R410A / R22", "Pressure tested"],
    icon: "gas",
  },
  {
    id: "washing-machine",
    title: "Washing Machine Repair",
    blurb:
      "Drum not spinning, water not draining, panel errors or heavy vibration — top load, front load and semi-automatic.",
    points: ["Front & top load", "Motor, belt & pump", "Error code fixes"],
    icon: "washer",
  },
  {
    id: "refrigerator",
    title: "Refrigerator Repair",
    blurb:
      "Fridge not cooling, over-freezing, leaking water or running non-stop — compressor, gas and thermostat work.",
    points: ["Single & double door", "Side-by-side units", "Gas charging"],
    icon: "fridge",
  },
  {
    id: "amc",
    title: "Installation & AMC",
    blurb:
      "New installs, shifting, and yearly maintenance contracts for homes, offices, hostels and shops in the city.",
    points: ["Install & uninstall", "AC shifting", "Yearly AMC plans"],
    icon: "amc",
  },
];

export const pricing = [
  { job: "AC general service / wet wash", from: "₹499", note: "per indoor unit" },
  { job: "AC gas top-up & leak check", from: "₹1,999", note: "gas type dependent" },
  { job: "Split AC installation", from: "₹1,499", note: "excl. material" },
  { job: "Washing machine repair visit", from: "₹349", note: "diagnosis charge" },
  { job: "Refrigerator repair visit", from: "₹349", note: "diagnosis charge" },
  { job: "Annual maintenance contract", from: "₹2,499", note: "per unit / year" },
];

export const areas = [
  "R.S. Puram",
  "Gandhipuram",
  "Peelamedu",
  "Saibaba Colony",
  "Singanallur",
  "Ramanathapuram",
  "Vadavalli",
  "Ganapathy",
  "Thudiyalur",
  "Kuniamuthur",
  "Saravanampatti",
  "Race Course",
  "Sundarapuram",
  "Podanur",
  "Kovaipudur",
  "Hopes College",
];

export const brands = [
  "Voltas",
  "LG",
  "Samsung",
  "Daikin",
  "Blue Star",
  "Whirlpool",
  "Godrej",
  "Hitachi",
  "IFB",
  "Panasonic",
  "Carrier",
  "Bosch",
  "Haier",
  "O General",
];

export const steps = [
  {
    title: "Send one WhatsApp",
    body: "Tell us the appliance, the problem and your area in Coimbatore. A photo of the unit helps us come prepared.",
  },
  {
    title: "Get a slot the same day",
    body: "We confirm a technician and a time window — usually within a few hours, no call-centre runaround.",
  },
  {
    title: "Doorstep diagnosis",
    body: "The technician checks the unit in front of you and explains exactly what is wrong before touching anything.",
  },
  {
    title: "You approve the price",
    body: "A clear quote for parts and labour. Nothing paid, nothing started until you say go ahead.",
  },
  {
    title: "Repair, test & warranty",
    body: "The fix is done on the spot where possible, tested with you watching, and backed by a written warranty.",
  },
];

export const reviews = [
  {
    quote:
      "Our split AC stopped cooling two days before guests arrived. Messaged at noon, technician was in Peelamedu by 4 and found a gas leak. Cooling back the same evening.",
    name: "Sathish Kumar",
    place: "Peelamedu · AC Repair",
  },
  {
    quote:
      "Front-load machine was throwing a drain error for weeks. The pump was choked, he cleaned and replaced it on the spot and showed me the old part. Fair bill.",
    name: "Revathi N.",
    place: "Saibaba Colony · Washing Machine",
  },
  {
    quote:
      "Took the AMC for four units at our office in Gandhipuram. Service happens on schedule without me chasing anyone, which is the whole point.",
    name: "Arun Prakash",
    place: "Gandhipuram · AMC",
  },
  {
    quote:
      "Double-door fridge was freezing everything in the lower tray. Thermostat issue, replaced with a genuine part and a six month warranty slip. Clean work.",
    name: "Fathima Rizwan",
    place: "Ramanathapuram · Refrigerator",
  },
  {
    quote:
      "Got three ACs wet-washed before summer. They covered the floor, carried the blower out, and the rooms are noticeably cooler now. Will call again.",
    name: "Dinesh Babu",
    place: "Vadavalli · AC Deep Cleaning",
  },
  {
    quote:
      "Shifted house within Coimbatore and needed the AC uninstalled and refitted. Priced it upfront on WhatsApp, no surprises on the day.",
    name: "Priya Lakshmi",
    place: "Saravanampatti · AC Shifting",
  },
];

export const faqs = [
  {
    q: "How soon can a technician reach me?",
    a: "For most of Coimbatore city we reach the same day, and often within two to four hours for a breakdown. Send a WhatsApp message with your area and we will confirm a time window straight away.",
  },
  {
    q: "Do you charge a visit fee?",
    a: "A diagnosis charge applies for repair visits and it is told to you before the technician is dispatched. If you go ahead with the repair, that amount is adjusted into the final bill.",
  },
  {
    q: "Which brands do you service?",
    a: "All major brands — Voltas, LG, Samsung, Daikin, Blue Star, Whirlpool, Godrej, Hitachi, IFB, Panasonic, Carrier, Bosch, Haier and O General among others, across ACs, washing machines and refrigerators.",
  },
  {
    q: "Is there a warranty on the work?",
    a: "Yes. Labour and any spare part we supply carry a written warranty, with the period noted on your bill depending on the job. Genuine or OEM-grade parts only.",
  },
  {
    q: "Do you only work in Coimbatore?",
    a: "Yes — we are a Coimbatore city operation. That is deliberate: staying local is how we keep same-day response times honest instead of promising a technician who is an hour away.",
  },
  {
    q: "How do I pay?",
    a: "Cash, UPI or card on completion. You get an itemised bill listing labour, parts and the warranty on each.",
  },
];
