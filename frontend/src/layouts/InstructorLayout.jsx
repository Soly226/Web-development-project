import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { twMerge } from 'tailwind-merge';

const navItems = [
  { icon: 'dashboard', label: 'Dashboard', path: '/instructor' },
  { icon: 'add_circle', label: 'Create', path: '/instructor/create' },
  { icon: 'assignment', label: 'Assignments', path: '/instructor/assignments' },
  { icon: 'forum', label: 'Stream', path: '/instructor/stream' },
  { icon: 'person', label: 'Profile', path: '/instructor/profile' },
];

const InstructorLayout = ({ children, title }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => {
    if (path === '/instructor') return location.pathname === '/instructor';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden pb-28 font-display transition-colors duration-500">
      {/* Ambient Background Orbs specific to Instructor (e.g. amber/primary) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-15%] right-[-5%] w-[45%] h-[45%] bg-amber-500/10 blur-[140px] rounded-full" />
        <div className="absolute top-[40%] left-[-10%] w-[35%] h-[35%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[5%] right-[20%] w-[30%] h-[30%] bg-emerald-500/5 blur-[100px] rounded-full" />
      </div>

      {/* Sticky Header */}
      <header className="flex items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl px-5 py-3.5 border-b border-white/20 dark:border-white/10 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-md shadow-amber-500/30">
            <span className="material-symbols-outlined text-white text-base" style={{ fontVariationSettings: "'FILL' 1" }}>draw</span>
          </div>
          <h1 className="text-xs font-black tracking-widest text-slate-900 dark:text-white uppercase opacity-80">
            {title || 'Instructor Workspace'}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/messages" className="relative p-2 text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-colors rounded-xl hover:bg-amber-500/10">
            <span className="material-symbols-outlined text-xl">mail</span>
          </Link>
          <Link to="/notifications" className="relative p-2 text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-colors rounded-xl hover:bg-amber-500/10">
            <span className="material-symbols-outlined text-xl">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900" />
          </Link>
          <Link
            to="/instructor/profile"
            className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-black shadow-md hover:brightness-110 transition-all border-2 border-amber-500/20 hover:border-amber-500"
          >
            {user?.name?.charAt(0) || 'I'}
          </Link>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 relative z-10">{children}</main>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[94%] max-w-md z-50">
        <nav className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-white/30 dark:border-white/10 rounded-2xl px-4 py-2.5 shadow-2xl shadow-slate-900/20">
          <div className="flex items-center justify-between">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={twMerge(
                    'flex flex-col items-center gap-1 transition-all duration-300 relative group px-2',
                    active ? 'text-amber-500 scale-105' : 'text-slate-400 dark:text-slate-500 hover:text-amber-500'
                  )}
                >
                  <div className={twMerge('p-1.5 rounded-xl transition-all', active && 'bg-amber-500/10')}>
                    <span
                      className={twMerge('material-symbols-outlined text-[22px] transition-all', active ? 'translate-y-[-2px]' : 'group-hover:translate-y-[-1px]')}
                      style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <span className={twMerge('text-[9px] tracking-widest uppercase', active ? 'font-black' : 'font-semibold opacity-50')}>
                    {item.label}
                  </span>
                  {active && <span className="absolute -bottom-1 w-1 h-1 bg-amber-500 rounded-full shadow-[0_0_6px_rgba(245,158,11,1)]" />}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default InstructorLayout;
