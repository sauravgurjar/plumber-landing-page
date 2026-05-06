import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import SEO from "../components/SEO.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { MotionSection } from "../components/Motion.jsx";
import { serviceAreas, site } from "../content/siteData.js";

function Input({ label, id, type = "text", value, onChange, autoComplete, required }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-900">
        {label}
        {required ? <span className="text-brand-700"> *</span> : null}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-brand-300 focus:ring-4 focus:ring-brand-100"
      />
    </label>
  );
}

function Textarea({ label, id, value, onChange, required }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-900">
        {label}
        {required ? <span className="text-brand-700"> *</span> : null}
      </span>
      <textarea
        id={id}
        name={id}
        rows={5}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-brand-300 focus:ring-4 focus:ring-brand-100"
      />
    </label>
  );
}

export default function ContactPage() {
  const [params] = useSearchParams();
  const reason = params.get("reason");

  const defaultMessage = useMemo(() => {
    if (reason === "quote") return "Hi—I'd like a free quote. The issue is:";
    return "";
  }, [reason]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: defaultMessage,
  });
  const [status, setStatus] = useState({ type: "idle", text: "" });

  function onChange(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setStatus({
      type: "success",
      text: "Thanks! Your message is ready to be handled. (Form submission is a placeholder.)",
    });
  }

  return (
    <>
      <SEO
        title="Contact a Plumber | Free Quote | NorthStar Plumbing"
        description="Contact NorthStar Plumbing for a free quote. Serving major metro areas across Canada with 24/7 emergency plumbing support."
        keywords="Plumbing Services Canada, Emergency Plumber Canada, Affordable Plumbing Canada"
        canonicalPath="/contact"
      />

      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Contact"
            title="Get a free quote from a certified plumber"
            description="Tell us what’s going on. We’ll follow up with options, pricing, and next steps."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <MotionSection className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <form onSubmit={onSubmit} className="space-y-5" aria-label="Contact form">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input
                      label="Name"
                      id="name"
                      value={form.name}
                      onChange={onChange("name")}
                      autoComplete="name"
                      required
                    />
                    <Input
                      label="Email"
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={onChange("email")}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <Input
                    label="Phone"
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange("phone")}
                    autoComplete="tel"
                    required
                  />

                  <Textarea
                    label="Message"
                    id="message"
                    value={form.message}
                    onChange={onChange("message")}
                    required
                  />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit" size="lg">
                      Send Message
                    </Button>
                    <p className="text-xs leading-5 text-slate-500">
                      By submitting, you agree to be contacted about your request.
                    </p>
                  </div>

                  {status.type !== "idle" ? (
                    <div
                      className={[
                        "rounded-2xl px-4 py-3 text-sm",
                        status.type === "success"
                          ? "bg-emerald-50 text-emerald-800 ring-1 ring-inset ring-emerald-200"
                          : "bg-amber-50 text-amber-900 ring-1 ring-inset ring-amber-200",
                      ].join(" ")}
                      role="status"
                    >
                      {status.text}
                    </div>
                  ) : null}
                </form>
              </div>
            </MotionSection>

            <MotionSection className="lg:col-span-5" delay={0.06}>
              <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-slate-900">Prefer to talk?</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Call our team for urgent issues or quick questions. We’ll help you decide the
                    best next step.
                  </p>
                  <div className="mt-4 grid gap-3 text-sm">
                    <a
                      className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 font-semibold text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 transition"
                      href={site.phoneHref}
                    >
                      <PhoneCall className="h-4 w-4 text-brand-700" />
                      {site.phoneDisplay}
                    </a>
                    <a
                      className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 font-semibold text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 transition"
                      href={site.emailHref}
                    >
                      <Mail className="h-4 w-4 text-brand-700" />
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-inset ring-brand-100">
                      <MapPin className="h-5 w-5 text-brand-700" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Service Areas</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        We support homeowners in major metro areas across Canada.
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                    {serviceAreas.map((a) => (
                      <li key={a} className="rounded-xl bg-slate-50 px-3 py-2">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-bold text-slate-900">Map</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Google Maps embed placeholder. Replace with your business location(s).
                  </p>
                  <div className="mt-4 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-sm font-semibold text-slate-500">Map Embed</span>
                    </div>
                  </div>
                </div>
              </div>
            </MotionSection>
          </div>
        </Container>
      </section>
    </>
  );
}

