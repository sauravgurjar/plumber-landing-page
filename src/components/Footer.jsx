import { NavLink } from "react-router-dom";
import { BadgeCheck, Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import Container from "./Container.jsx";
import logo from "../assets/logo.svg";

const links = [
  { label: "Services", to: "/services" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="NorthStar Plumbing" className="h-9 w-auto" />
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              Clean, dependable plumbing services for homeowners across Canada. Licensed and
              insured, with fast response times and straightforward pricing.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200">
                <BadgeCheck className="h-4 w-4 text-brand-700" />
                Licensed & Insured
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200">
                <Clock className="h-4 w-4 text-brand-700" />
                24/7 Service
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-slate-900">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            <ul className="mt-3 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <PhoneCall className="mt-0.5 h-4 w-4 text-brand-700" />
                <a className="hover:text-slate-900 transition-colors" href="tel:+1-555-012-3456">
                  +1 (555) 012-3456
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-brand-700" />
                <a
                  className="hover:text-slate-900 transition-colors"
                  href="mailto:help@northstarplumbing.ca"
                >
                  help@northstarplumbing.ca
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-700" />
                <span>Serving major metro areas across Canada</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NorthStar Plumbing. All rights reserved.</p>
          <p>Emergency response times may vary by region.</p>
        </div>
      </Container>
    </footer>
  );
}

