import { Star } from "lucide-react";

export default function StarRating({ value = 5, className = "" }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {stars.map((n) => (
        <Star
          key={n}
          className={n <= value ? "h-4 w-4 fill-amber-400 text-amber-400" : "h-4 w-4 text-slate-300"}
        />
      ))}
    </div>
  );
}

