import { useMemo, useState } from 'react';
import Seo from '../components/Seo';
import { articles, diseases, nutritionTips, workouts } from '../data';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const q = query.toLowerCase();
    const allItems = [
      ...articles.map((article) => ({ type: 'article', title: article.title, preview: article.excerpt, link: `/articles/${article.slug}` })),
      ...diseases.map((disease) => ({ type: 'disease', title: disease.name, preview: disease.definition, link: `/diseases/${disease.slug}` })),
      ...nutritionTips.map((tip) => ({ type: 'nutrition', title: tip.title, preview: tip.description, link: '/nutrition' })),
      ...workouts.map((workout) => ({ type: 'fitness', title: workout.title, preview: workout.focus, link: '/fitness' }))
    ];
    if (!q) return allItems.slice(0, 8);
    return allItems.filter((item) => item.title.toLowerCase().includes(q) || item.preview.toLowerCase().includes(q) || item.type.includes(q));
  }, [query]);

  return (
    <>
      <Seo title="Search" description="Search articles, diseases, nutrition tips, and fitness plans on VitaCare." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Search center</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Find the right resource quickly.</h1>
          <input className="mt-6 w-full rounded-2xl border border-slate-300 px-4 py-4 text-lg shadow-sm" placeholder="Search for articles, topics, diseases, or fitness plans" value={query} onChange={(event) => setQuery(event.target.value)} />
        </div>
        <div className="mt-10 grid gap-4">
          {results.map((result) => (
            <div key={`${result.type}-${result.title}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">{result.type}</p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900">{result.title}</h2>
              <p className="mt-2 text-slate-600">{result.preview}</p>
              <a href={result.link} className="mt-4 inline-flex text-sm font-semibold text-teal-600">Open resource</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
