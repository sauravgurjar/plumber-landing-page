import { BadgeCheck, Clock, MapPin, ShieldCheck } from "lucide-react";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import { MotionSection } from "../components/Motion.jsx";
import SEO from "../components/SEO.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import { services, site, testimonials, trustPoints } from "../content/siteData.js";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Reliable Plumbing Services Across Canada | NorthStar Plumbing"
        description="Trusted, certified plumbers for leak repair, drain cleaning, pipe installation, and emergency plumbing across Canada."
        keywords="Plumbing Services Canada, Emergency Plumber Canada, Affordable Plumbing Canada"
        canonicalPath="/"
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <MotionSection>
                <Badge className="bg-white text-brand-800 ring-slate-200">
                  <BadgeCheck className="h-4 w-4 text-brand-700" />
                  Free Estimate
                </Badge>
                <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Reliable Plumbing Services Across Canada
                </h1>
                <p className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-slate-600">
                  Trustworthy, fast service from certified plumbers—clear communication, clean
                  workmanship, and durable fixes for your home.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href={site.phoneHref} size="lg">
                    Call Now
                  </Button>
                  <Button to="/contact?reason=quote" variant="secondary" size="lg">
                    Get Free Quote
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200">
                    <ShieldCheck className="h-4 w-4 text-brand-700" />
                    Licensed
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200">
                    <BadgeCheck className="h-4 w-4 text-brand-700" />
                    Insured
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200">
                    <Clock className="h-4 w-4 text-brand-700" />
                    24/7 Service
                  </span>
                </div>
              </MotionSection>
            </div>

            <div className="lg:col-span-5">
              <MotionSection className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold text-slate-900">Quick response, clear pricing</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tell us what’s going on and we’ll provide a straightforward quote with service
                  options. No surprises—just professional plumbing.
                </p>
                <div className="mt-5 grid gap-3">
                  {trustPoints.map(({ title, description, icon: Icon }) => (
                    <div key={title} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white ring-1 ring-inset ring-slate-200">
                        <Icon className="h-5 w-5 text-brand-700" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{title}</p>
                        <p className="mt-0.5 text-xs leading-5 text-slate-600">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionSection>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Services"
            title="Plumbing help for the problems homeowners actually face"
            description="From quick repairs to emergency response, we focus on reliable work and respectful service."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((s, idx) => (
              <MotionSection key={s.key} delay={idx * 0.06}>
                <ServiceCard icon={s.icon} title={s.title} description={s.description} />
              </MotionSection>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button to="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A professional experience you can feel good about"
            description="We’re built for homeowners who value quality, cleanliness, and clear communication."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {trustPoints.map(({ title, description, icon: Icon }, idx) => (
              <MotionSection
                key={title}
                delay={idx * 0.06}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-inset ring-brand-100">
                  <Icon className="h-6 w-6 text-brand-700" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </MotionSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by homeowners across Canada"
            description="Real feedback from customers who wanted the job done right, without stress."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t, idx) => (
              <MotionSection key={t.name} delay={idx * 0.06}>
                <TestimonialCard {...t} />
              </MotionSection>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button to="/reviews" variant="secondary">
              Read More Reviews
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-brand-700">
        <Container className="py-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold text-white/90">Need a plumber today?</p>
              <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Get a fast, professional estimate—no pressure.
              </h2>
              <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
                <MapPin className="h-4 w-4" />
                Serving major metro areas across Canada
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Button href={site.phoneHref} variant="dark" size="lg">
                Call {site.phoneDisplay}
              </Button>
              <Button to="/contact?reason=quote" variant="secondary" size="lg" className="ring-white/20">
                Get Free Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

