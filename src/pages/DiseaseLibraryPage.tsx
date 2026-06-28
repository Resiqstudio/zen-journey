import { useMemo, useState } from 'react';
import Seo from '../components/Seo';
import DiseaseCard from '../components/DiseaseCard';
import { diseaseCategories, diseases } from '../data';
import { filterDiseases, paginateDiseases } from '../lib/knowledge';

export default function DiseaseLibraryPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [letter, setLetter] = useState('All');
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filteredDiseases = useMemo(() => filterDiseases(diseases, query, category, letter), [category, letter, query]);
  const paginated = useMemo(() => paginateDiseases(filteredDiseases, page, perPage), [filteredDiseases, page]);

  const alphabet = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  return (
    <>
      <Seo title="Disease Library" description="Explore a scalable medical knowledge library with filters, browsing, and disease detail pages." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Medical knowledge library</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">A scalable disease library built for growth.</h1>
          <p className="mt-4 text-lg text-slate-600">Browse by category, alphabet, or keyword while keeping the experience consistent and educational.</p>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
            <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} className="rounded-2xl border border-slate-300 px-4 py-3" placeholder="Search diseases, symptoms, or categories" />
            <select value={category} onChange={(event) => { setCategory(event.target.value); setPage(1); }} className="rounded-2xl border border-slate-300 px-4 py-3">
              <option value="All">All categories</option>
              {diseaseCategories.map((item) => <option key={item.id} value={item.name}>{item.name}</option>)}
            </select>
            <select value={letter} onChange={(event) => { setLetter(event.target.value); setPage(1); }} className="rounded-2xl border border-slate-300 px-4 py-3">
              {alphabet.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {alphabet.map((value) => (
              <button key={value} className={`rounded-full px-3 py-1 text-sm ${letter === value ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600'}`} onClick={() => { setLetter(value); setPage(1); }}>
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {paginated.items.map((disease) => (
            <DiseaseCard key={disease.id} disease={disease} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
          <p className="text-sm text-slate-500">Showing {paginated.items.length} of {filteredDiseases.length} disease entries</p>
          <div className="flex items-center gap-2">
            <button className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700" onClick={() => setPage((value) => Math.max(1, value - 1))}>Previous</button>
            <span className="text-sm font-semibold text-slate-700">Page {page} / {paginated.totalPages}</span>
            <button className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700" onClick={() => setPage((value) => Math.min(paginated.totalPages, value + 1))}>Next</button>
          </div>
        </div>
      </section>
    </>
  );
}
