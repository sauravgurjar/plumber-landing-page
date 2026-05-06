import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 focus-visible:outline-brand-700 shadow-sm",
  secondary:
    "bg-white text-brand-800 ring-1 ring-inset ring-brand-200 hover:bg-brand-50 focus-visible:outline-brand-700",
  dark: "bg-slate-900 text-white hover:bg-slate-800 focus-visible:outline-slate-900 shadow-sm",
  ghost: "bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:outline-slate-900",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

function classes(variant, size, className) {
  return [
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export default function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
  ariaLabel,
}) {
  const classNames = classes(variant, size, className);

  if (to) {
    return (
      <Link className={classNames} to={to} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={classNames}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classNames}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

