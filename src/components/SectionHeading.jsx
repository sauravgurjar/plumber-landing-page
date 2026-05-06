export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-brand-700">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty text-base leading-7 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

