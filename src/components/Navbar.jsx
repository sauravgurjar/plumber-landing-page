import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, PhoneCall, X } from "lucide-react";
import Container from "./Container.jsx";
import Button from "./Button.jsx";
import logo from "../assets/logo.svg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
          isActive ? "bg-brand-50 text-brand-800" : "text-slate-700 hover:bg-slate-100",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const quoteTo = useMemo(() => "/contact?reason=quote", []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="NorthStar Plumbing" className="h-8 w-auto" />
            <span className="sr-only">NorthStar Plumbing</span>
          </NavLink>
        </div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavItem key={item.to} to={item.to}>
              {item.label}
            </NavItem>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            href="tel:+1-555-012-3456"
            variant="ghost"
            size="sm"
            ariaLabel="Call NorthStar Plumbing"
          >
            <PhoneCall className="h-4 w-4" />
            Call Now
          </Button>
          <Button to={quoteTo} size="sm">
            Get Free Quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2 text-slate-900 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="py-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavItem key={item.to} to={item.to} onClick={() => setOpen(false)}>
                  {item.label}
                </NavItem>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Button href="tel:+1-555-012-3456" variant="secondary" size="sm">
                <PhoneCall className="h-4 w-4" />
                Call Now
              </Button>
              <Button to={quoteTo} size="sm">
                Get Free Quote
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

