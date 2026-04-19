import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { twMerge } from 'tailwind-merge';

const MainLayout = ({ children, title }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const dashboardPath = user ? `/${user.role}` : '/login';

  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', path: dashboardPath },
    { icon: 'inbox', label: 'Messages', path: '/messages' },
    { icon: 'notifications', label: 'Alerts', path: '/notifications' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden pb-24 font-display transition-colors duration-500">
      {/* Decorative Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-accent/10 blur-[100px] rounded-full" />
      </div>

      {/* Sticky Header */}
      <header className="flex items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-4 border-b border-white/20 dark:border-white/10 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Link to={dashboardPath} className="p-2.5 hover:bg-primary/10 text-slate-600 dark:text-slate-400 hover:text-primary rounded-xl transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-xs font-bold tracking-widest text-slate-900 dark:text-white uppercase opacity-80">
            {title || 'EduCore LMS'}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/notifications" className="relative p-2 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900" />
          </Link>
          <button
            onClick={handleLogout}
            className="group relative w-10 h-10 rounded-xl overflow-hidden border-2 border-primary/20 hover:border-primary transition-all p-0.5"
          >
            <div className="w-full h-full rounded-[10px] bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white text-xs font-black uppercase">
                {user?.name?.charAt(0) || 'U'}
              </span>
            </div>
          </button>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 relative z-10">{children}</main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50">
        <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/30 dark:border-white/10 rounded-2xl px-6 py-3 shadow-2xl">
          <div className="flex items-center justify-between">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path === dashboardPath && location.pathname === dashboardPath);
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={twMerge(
                    'flex flex-col items-center gap-1.5 transition-all duration-300 relative group',
                    isActive ? 'text-primary scale-110' : 'text-slate-400 dark:text-slate-500 hover:text-primary'
                  )}
                >
                  <div className={twMerge('p-1 rounded-lg transition-colors', isActive && 'bg-primary/10')}>
                    <span className={twMerge('material-symbols-outlined text-2xl transition-all', isActive ? 'translate-y-[-2px]' : 'group-hover:translate-y-[-1px]')}>
                      {item.icon}
                    </span>
                  </div>
                  <span className={twMerge('text-[9px] tracking-wider uppercase', isActive ? 'font-black' : 'font-bold opacity-60')}>
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(99,102,241,1)]" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainLayout;
