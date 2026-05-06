import Container from "../components/Container.jsx";
import SEO from "../components/SEO.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import { MotionSection } from "../components/Motion.jsx";
import Button from "../components/Button.jsx";
import { site, testimonials } from "../content/siteData.js";

export default function ReviewsPage() {
  return (
    <>
      <SEO
        title="Customer Reviews | NorthStar Plumbing"
        description="Read verified-style customer testimonials for NorthStar Plumbing across Canada."
        keywords="Plumbing Services Canada, Emergency Plumber Canada, Affordable Plumbing Canada"
        canonicalPath="/reviews"
      />

      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Reviews"
            title="What homeowners say about our service"
            description="Our goal is simple: show up on time, keep your home clean, and fix the issue properly."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, idx) => (
              <MotionSection key={`${t.name}-${t.city}`} delay={idx * 0.05}>
                <TestimonialCard {...t} />
              </MotionSection>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold text-brand-700">Ready to get help?</p>
                <h2 className="mt-2 text-balance text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  Get a free quote for your plumbing issue.
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Call us or send a message—either way, you’ll get clear answers and a professional
                  plan.
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

