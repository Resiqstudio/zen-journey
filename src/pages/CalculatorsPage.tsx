import { useMemo, useState } from 'react';
import Seo from '../components/Seo';

export default function CalculatorsPage() {
  const [height, setHeight] = useState('170');
  const [weight, setWeight] = useState('70');
  const bmi = useMemo(() => {
    const parsedHeight = Number(height) / 100;
    const parsedWeight = Number(weight);
    if (!parsedHeight || !parsedWeight) return 0;
    return (parsedWeight / (parsedHeight * parsedHeight)).toFixed(1);
  }, [height, weight]);

  const bmiCategory = Number(bmi) < 18.5 ? 'Underweight' : Number(bmi) < 25 ? 'Healthy' : Number(bmi) < 30 ? 'Overweight' : 'Obese';

  return (
    <>
      <Seo title="Calculators" description="Use simple calculators to estimate BMI and review everyday wellness metrics." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Wellness calculators</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Quick tools for practical health planning.</h1>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <label className="mb-2 block text-sm font-semibold text-slate-700">Height (cm)</label>
            <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" type="number" value={height} onChange={(event) => setHeight(event.target.value)} />
            <label className="mb-2 mt-4 block text-sm font-semibold text-slate-700">Weight (kg)</label>
            <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" type="number" value={weight} onChange={(event) => setWeight(event.target.value)} />
          </div>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-teal-600 to-emerald-400 p-8 text-white shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-teal-100">BMI result</p>
            <p className="mt-4 text-6xl font-semibold">{bmi}</p>
            <p className="mt-3 text-lg">Category: {bmiCategory}</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-teal-50">BMI is a screening tool and not a diagnosis. Pair it with professional guidance and regular checkups for a more complete picture.</p>
          </div>
        </div>
      </section>
    </>
  );
}
