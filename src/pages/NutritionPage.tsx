import Seo from '../components/Seo';
import { nutritionTips } from '../data';

export default function NutritionPage() {
  return (
    <>
      <Seo title="Nutrition" description="Explore practical nutrition tips that support energy, recovery, and healthy habits." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Nutrition section</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Fuel your day with balance in mind.</h1>
          <p className="mt-4 text-lg text-slate-600">Simple strategies can make meals feel more nourishing, practical, and sustainable.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {nutritionTips.map((tip) => (
            <div key={tip.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold text-teal-600">{tip.tag}</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">{tip.title}</h2>
              <p className="mt-3 text-slate-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
