import { useState } from 'react';
import Seo from '../components/Seo';
import { articles, diseaseCategories, diseases, nutritionTips, workouts } from '../data';

export default function AdminPage() {
  const [selectedSection, setSelectedSection] = useState('articles');

  const sections = [
    { key: 'articles', label: 'Articles', items: articles },
    { key: 'diseases', label: 'Diseases', items: diseases },
    { key: 'categories', label: 'Disease Categories', items: diseaseCategories },
    { key: 'nutrition', label: 'Nutrition', items: nutritionTips },
    { key: 'fitness', label: 'Fitness', items: workouts }
  ];

  return (
    <>
      <Seo title="Admin" description="Manage the VitaCare content dashboard." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Admin dashboard</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">Operate the wellness platform with confidence.</h1>
          </div>
          <div className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">Live content overview</div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
            {sections.map((section) => (
              <button key={section.key} className={`mb-2 block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold ${selectedSection === section.key ? 'bg-teal-600 text-white' : 'bg-slate-50 text-slate-700'}`} onClick={() => setSelectedSection(section.key)}>
                {section.label}
              </button>
            ))}
          </aside>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-slate-900">{sections.find((section) => section.key === selectedSection)?.label}</h2>
              <div className="flex gap-2">
                <button className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">Bulk import</button>
                <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Add new</button>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {sections.find((section) => section.key === selectedSection)?.items.map((item, index) => {
                const typedItem = item as { title?: string; name?: string; excerpt?: string; description?: string; focus?: string; tag?: string };
                const title = typedItem.title ?? typedItem.name ?? 'Item';
                const description = typedItem.excerpt ?? typedItem.description ?? typedItem.focus ?? typedItem.tag ?? 'Content';
                return (
                  <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-900">{title}</p>
                        <p className="mt-1 text-sm text-slate-600">{description}</p>
                      </div>
                      <button className="text-sm font-semibold text-teal-600">Edit</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
