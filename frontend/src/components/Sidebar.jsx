import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Sidebar = ({ links = [] }) => {
  const location = useLocation();

  return (
    <aside className="w-full md:w-64 md:min-h-[calc(100vh-72px)] border-r border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
      <nav className="p-4 space-y-2">
        {links.map((link) => {
          const isActive =
            location.pathname === link.to ||
            (link.matchPrefix && location.pathname.startsWith(link.matchPrefix));

          return (
            <Link
              key={link.label}
              to={link.to}
              className={twMerge(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              )}
            >
              {link.icon && <span className="material-symbols-outlined text-[18px]">{link.icon}</span>}
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
