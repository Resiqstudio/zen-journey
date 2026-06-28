import Seo from '../components/Seo';
import { workouts } from '../data';

export default function FitnessPage() {
  return (
    <>
      <Seo title="Fitness" description="Discover approachable fitness plans for mobility, strength, and heart health." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Fitness section</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Move with intention and stay consistent.</h1>
          <p className="mt-4 text-lg text-slate-600">Whether you want mobility, strength, or a light cardio boost, these plans are easy to fit into a busy week.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {workouts.map((workout) => (
            <div key={workout.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>{workout.duration}</span>
                <span>{workout.intensity}</span>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">{workout.title}</h2>
              <p className="mt-2 text-sm text-teal-600">Focus: {workout.focus}</p>
              <ul className="mt-4 list-disc pl-5 text-sm text-slate-600">
                {workout.steps.map((step) => <li key={step}>{step}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
