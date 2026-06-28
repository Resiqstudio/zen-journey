import { useState } from 'react';
import Seo from '../components/Seo';

export default function AuthPage() {
  const [mode, setMode] = useState<'sign-in' | 'sign-up'>('sign-in');

  return (
    <>
      <Seo title="Authentication" description="Sign in or create an account on VitaCare." />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">Secure access</p>
            <h1 className="mt-3 text-3xl font-semibold">Your wellbeing account keeps everything organized.</h1>
            <p className="mt-4 text-slate-300">Save your preferences, track your routines, and return to content that matters most.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="flex gap-3">
              <button className={`rounded-full px-4 py-2 text-sm font-semibold ${mode === 'sign-in' ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700'}`} onClick={() => setMode('sign-in')}>Sign in</button>
              <button className={`rounded-full px-4 py-2 text-sm font-semibold ${mode === 'sign-up' ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700'}`} onClick={() => setMode('sign-up')}>Create account</button>
            </div>
            <form className="mt-6 space-y-4">
              <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Email address" />
              <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Password" type="password" />
              <button className="w-full rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white">{mode === 'sign-in' ? 'Continue' : 'Create account'}</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
