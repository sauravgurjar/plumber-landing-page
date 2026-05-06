import Card from "./Card.jsx";
import StarRating from "./StarRating.jsx";

export default function TestimonialCard({ name, city, rating = 5, quote }) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{city}</p>
        </div>
        <StarRating value={rating} />
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">“{quote}”</p>
    </Card>
  );
}

