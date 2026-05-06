import Card from "./Card.jsx";

export default function ServiceCard({ icon: Icon, title, description, className = "" }) {
  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-inset ring-brand-100">
          <Icon className="h-6 w-6 text-brand-700" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>
    </Card>
  );
}

