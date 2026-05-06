export default function Card({ children, className = "" }) {
  return (
    <div
      className={[
        "rounded-2xl border border-slate-200 bg-white shadow-sm",
        "transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-soft",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

