import { motion } from 'framer-motion';

interface SectionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  cta: string;
  href: string;
}

export default function SectionCard({ title, description, icon, cta, href }: SectionCardProps) {
  return (
    <motion.a href={href} whileHover={{ y: -6, scale: 1.01 }} className="block rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition">
      <div className="mb-4 inline-flex rounded-2xl bg-teal-50 p-3 text-teal-700">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-4 inline-flex text-sm font-semibold text-teal-600">{cta}</span>
    </motion.a>
  );
}
