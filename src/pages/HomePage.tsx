import { motion } from 'framer-motion';
import { Activity, Apple, Dumbbell, HeartPulse, Search, Sparkles, Stethoscope } from 'lucide-react';
import Seo from '../components/Seo';
import SectionCard from '../components/SectionCard';
import { articles } from '../data';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <Seo title="Home" description="VitaCare brings together articles, disease insights, nutrition, fitness, and calculators in one guided wellness hub." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-800">
              <Sparkles size={16} /> Trusted wellbeing guidance
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Support your health with a calmer, clearer plan.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Explore evidence-based nutrition, fitness, disease education, and personal calculators designed to make everyday wellness feel manageable.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/articles" className="rounded-full bg-teal-600 px-6 py-3 font-semibold text-white shadow-soft">Read articles</Link>
              <Link to="/search" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700">Search content</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="rounded-[2rem] bg-gradient-to-br from-teal-600 to-emerald-400 p-8 text-white shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-teal-100">Today’s focus</p>
                <h2 className="mt-2 text-2xl font-semibold">Balanced living dashboard</h2>
              </div>
              <div className="rounded-2xl bg-white/20 p-3"><HeartPulse size={24} /></div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">
                <p className="text-sm text-teal-50">Articles</p>
                <p className="mt-2 text-3xl font-semibold">{articles.length}</p>
              </div>
              <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">
                <p className="text-sm text-teal-50">Quick checks</p>
                <p className="mt-2 text-3xl font-semibold">5</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <SectionCard title="Articles" description="Read health-focused stories that make daily habits easier to adopt." icon={<Stethoscope size={20} />} cta="Open articles" href="/articles" />
          <SectionCard title="Disease library" description="Learn the basics of common conditions and how to reduce risk through daily choices." icon={<Activity size={20} />} cta="Explore conditions" href="/diseases" />
          <SectionCard title="Nutrition" description="Get practical nutrition guidance and simple meal ideas for sustainable wellness." icon={<Apple size={20} />} cta="View nutrition tips" href="/nutrition" />
          <SectionCard title="Fitness" description="Follow approachable routines for mobility, strength, and heart health." icon={<Dumbbell size={20} />} cta="Try workouts" href="/fitness" />
          <SectionCard title="Calculators" description="Estimate body metrics and health goals with simple interactive tools." icon={<Search size={20} />} cta="Use calculators" href="/calculators" />
          <SectionCard title="Admin" description="Manage content, oversee article workflows, and maintain the library with ease." icon={<Sparkles size={20} />} cta="Go to admin" href="/admin" />
        </div>
      </section>
    </>
  );
}
