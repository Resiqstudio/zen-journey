import { Link } from 'react-router-dom';

interface DiseaseCardProps {
  disease: {
    id: number;
    slug: string;
    name: string;
    definition: string;
    category: string;
    tags: string[];
  };
}

export default function DiseaseCard({ disease }: DiseaseCardProps) {
  return (
    <Link to={`/diseases/${disease.slug}`} className="block rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-slate-900">{disease.name}</h3>
        <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">{disease.category}</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{disease.definition}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {disease.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-500">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
