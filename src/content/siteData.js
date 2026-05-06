import { Droplets, Flame, Hammer, ShieldCheck, Timer, Wrench } from "lucide-react";

export const site = {
  brand: "NorthStar Plumbing",
  phoneDisplay: "+1 (555) 012-3456",
  phoneHref: "tel:+1-555-012-3456",
  email: "help@northstarplumbing.ca",
  emailHref: "mailto:help@northstarplumbing.ca",
};

export const services = [
  {
    key: "leak-repair",
    title: "Leak Repair",
    description:
      "Fast diagnosis and durable fixes for faucets, toilets, and hidden pipe leaks—protecting your home from water damage.",
    icon: Droplets,
  },
  {
    key: "drain-cleaning",
    title: "Drain Cleaning",
    description:
      "Clear slow drains and stubborn clogs with professional tools and safe practices that help prevent repeat blockages.",
    icon: Wrench,
  },
  {
    key: "pipe-installation",
    title: "Pipe Installation",
    description:
      "Clean installations and upgrades for supply and drain lines, with attention to code compliance and long-term reliability.",
    icon: Hammer,
  },
  {
    key: "emergency-plumbing",
    title: "Emergency Plumbing",
    description:
      "24/7 support for urgent issues like burst pipes, flooding, or no hot water—rapid response across supported areas.",
    icon: Flame,
  },
];

export const trustPoints = [
  {
    title: "Licensed & Insured",
    description: "Professional, verified technicians for peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Response Times",
    description: "Clear scheduling and prompt arrivals—no all-day waits.",
    icon: Timer,
  },
  {
    title: "Upfront, Honest Pricing",
    description: "Transparent quotes and options before work begins.",
    icon: Wrench,
  },
];

export const testimonials = [
  {
    name: "Karen M.",
    city: "Mississauga, ON",
    rating: 5,
    quote:
      "They arrived on time, explained the repair clearly, and fixed the leak the same day. Professional from start to finish.",
  },
  {
    name: "David L.",
    city: "Calgary, AB",
    rating: 5,
    quote:
      "We had an emergency late at night. Quick response and no pressure—just a solid fix and helpful advice.",
  },
  {
    name: "Sophie T.",
    city: "Vancouver, BC",
    rating: 5,
    quote:
      "Drain issues resolved fast. The technician kept everything clean and walked me through how to avoid future clogs.",
  },
  {
    name: "Mark R.",
    city: "Ottawa, ON",
    rating: 5,
    quote: "Straightforward pricing and excellent workmanship. I’d hire them again without hesitation.",
  },
];

export const serviceAreas = [
  "Greater Toronto Area (ON)",
  "Ottawa–Gatineau (ON/QC)",
  "Greater Vancouver (BC)",
  "Calgary & Edmonton (AB)",
  "Winnipeg (MB)",
  "Halifax (NS)",
];

