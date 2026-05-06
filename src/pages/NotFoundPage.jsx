import { Link } from "react-router-dom";
import Container from "../components/Container.jsx";
import SEO from "../components/SEO.jsx";

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found | NorthStar Plumbing" canonicalPath="/404" />
      <section className="bg-white">
        <Container className="py-20">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold text-brand-700">404</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Page not found
            </h1>
            <p className="mt-3 text-base leading-7 text-slate-600">
              The page you’re looking for doesn’t exist or may have moved.
            </p>
            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

