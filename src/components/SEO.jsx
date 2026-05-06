import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, keywords, canonicalPath = "/" }) {
  const origin =
    typeof window !== "undefined" && window.location?.origin ? window.location.origin : "";
  const canonical = origin ? `${origin}${canonicalPath}` : undefined;

  return (
    <Helmet>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </Helmet>
  );
}

