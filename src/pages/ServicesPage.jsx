import Container from "../components/Container.jsx";
import SEO from "../components/SEO.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { MotionSection } from "../components/Motion.jsx";
import Button from "../components/Button.jsx";
import { services, site } from "../content/siteData.js";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Plumbing Services Canada | Leak Repair, Drains, Emergency | NorthStar Plumbing"
        description="Leak repair, drain cleaning, pipe installation, and 24/7 emergency plumbing services across Canada."
        keywords="Plumbing Services Canada, Emergency Plumber Canada, Affordable Plumbing Canada"
        canonicalPath="/services"
      />

      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Services"
            title="Professional plumbing services for your home"
            description="We focus on clean workmanship, dependable materials, and clear communication—so you feel confident in the repair."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {services.map((s, idx) => (
              <MotionSection key={s.key} delay={idx * 0.06}>
                <ServiceCard icon={s.icon} title={s.title} description={s.description} />
              </MotionSection>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold text-brand-700">Not sure what you need?</p>
                <h2 className="mt-2 text-balance text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  Describe the issue and we’ll recommend the right service.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  We’ll ask a few questions, provide options, and confirm pricing before any work
                  begins.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button href={site.phoneHref} size="lg">
                  Call Now
                </Button>
                <Button to="/contact?reason=quote" variant="secondary" size="lg">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

