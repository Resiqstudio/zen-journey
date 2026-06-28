import { NavLink, Link } from 'react-router-dom';
import { HeartPulse, Menu, Search, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/articles', label: 'Articles' },
  { to: '/diseases', label: 'Diseases' },
  { to: '/nutrition', label: 'Nutrition' },
  { to: '/fitness', label: 'Fitness' },
  { to: '/calculators', label: 'Calculators' },
  { to: '/admin', label: 'Admin' }
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-2xl bg-teal-600 p-2 text-white shadow-soft">
              <HeartPulse size={20} />
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-900">VitaCare</p>
              <p className="text-sm text-slate-500">Everyday health clarity</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'}`}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/search" className="rounded-full border border-slate-200 p-2 text-slate-600 hover:border-teal-500 hover:text-teal-600">
              <Search size={18} />
            </Link>
            <Link to="/auth" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Sign in</Link>
          </nav>
          <button className="rounded-full border border-slate-200 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={18} />
          </button>
        </div>
        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-teal-600' : 'text-slate-600'}`} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-teal-600" />
            <span>Evidence-based wellness guidance for everyday living.</span>
          </div>
          <div className="flex gap-4">
            <Link to="/articles" className="hover:text-teal-600">Articles</Link>
            <Link to="/search" className="hover:text-teal-600">Search</Link>
            <Link to="/auth" className="hover:text-teal-600">Access</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
