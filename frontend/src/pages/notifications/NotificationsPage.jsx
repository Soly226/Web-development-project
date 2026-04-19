import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { twMerge } from 'tailwind-merge';

/* ─────────────────────────────────────────────
   Mock Data
───────────────────────────────────────────── */
const mockNotifications = [
  // Today
  {
    id: 1,
    group: 'Today',
    type: 'success',
    icon: 'check_circle',
    title: 'Assignment Graded',
    body: 'Your submission for "Data Structures — Lab 3" received a grade of 92/100.',
    time: '2 min ago',
    read: false,
    tag: 'Grades',
  },
  {
    id: 2,
    group: 'Today',
    type: 'info',
    icon: 'notifications_active',
    title: 'New Announcement',
    body: 'Prof. Chen posted a new announcement in Advanced React 2024: "Midterm topics released".',
    time: '14 min ago',
    read: false,
    tag: 'Course',
  },
  {
    id: 3,
    group: 'Today',
    type: 'warning',
    icon: 'alarm',
    title: 'Deadline Approaching',
    body: 'Assignment #4 "API Integration" is due in 6 hours. Don\'t forget to submit!',
    time: '1h ago',
    read: false,
    tag: 'Deadline',
  },
  {
    id: 4,
    group: 'Today',
    type: 'info',
    icon: 'mark_email_unread',
    title: 'New Message',
    body: 'Sarah Johnson sent you a message: "Can you share your notes from today\'s lecture?"',
    time: '1h ago',
    read: false,
    tag: 'Messages',
  },
  {
    id: 5,
    group: 'Today',
    type: 'success',
    icon: 'verified',
    title: 'Enrollment Approved',
    body: 'Your enrollment request for "Machine Learning Fundamentals" has been approved.',
    time: '3h ago',
    read: true,
    tag: 'Enrollment',
  },
  // Earlier
  {
    id: 6,
    group: 'Earlier',
    type: 'info',
    icon: 'group_add',
    title: 'Study Group Invite',
    body: 'Yassin Khalil has invited you to join "React 101 Study Group".',
    time: 'Yesterday, 4:30 PM',
    read: true,
    tag: 'Social',
  },
  {
    id: 7,
    group: 'Earlier',
    type: 'warning',
    icon: 'update',
    title: 'Schedule Change',
    body: 'Dr. Hassan\'s office hours have been moved to Thursday 3:00 PM in Room 204.',
    time: 'Yesterday, 11:00 AM',
    read: true,
    tag: 'Course',
  },
  {
    id: 8,
    group: 'Earlier',
    type: 'success',
    icon: 'emoji_events',
    title: 'Achievement Unlocked',
    body: 'You earned the "7-Day Streak" badge! Keep up the momentum.',
    time: '2 days ago',
    read: true,
    tag: 'Achievement',
  },
  {
    id: 9,
    group: 'Earlier',
    type: 'danger',
    icon: 'report',
    title: 'Missed Deadline',
    body: 'You missed the deadline for "Database Quiz #2". Contact your instructor for late submission.',
    time: '3 days ago',
    read: true,
    tag: 'Grades',
  },
  {
    id: 10,
    group: 'Earlier',
    type: 'info',
    icon: 'school',
    title: 'Course Material Added',
    body: 'New lecture slides for "Week 8 — State Management" have been uploaded to Advanced React 2024.',
    time: '4 days ago',
    read: true,
    tag: 'Course',
  },
];

const typeConfig = {
  success: {
    bg: 'bg-emerald-500/10 dark:bg-emerald-900/20',
    border: 'border-emerald-500/20',
    icon: 'text-emerald-500',
    dot: 'bg-emerald-500',
  },
  info: {
    bg: 'bg-primary/10 dark:bg-primary/20',
    border: 'border-primary/20',
    icon: 'text-primary',
    dot: 'bg-primary',
  },
  warning: {
    bg: 'bg-amber-500/10 dark:bg-amber-900/20',
    border: 'border-amber-500/20',
    icon: 'text-amber-500',
    dot: 'bg-amber-500',
  },
  danger: {
    bg: 'bg-rose-500/10 dark:bg-rose-900/20',
    border: 'border-rose-500/20',
    icon: 'text-rose-500',
    dot: 'bg-rose-500',
  },
};

const FILTERS = ['All', 'Unread', 'Grades', 'Course', 'Deadline', 'Messages', 'Social'];

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */
const NotificationItem = ({ notif, onRead, onDismiss }) => {
  const cfg = typeConfig[notif.type] || typeConfig.info;

  return (
    <div
      className={twMerge(
        'group relative flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-pointer',
        cfg.bg,
        cfg.border,
        !notif.read && 'shadow-md',
        notif.read && 'opacity-75 hover:opacity-100'
      )}
      onClick={() => onRead(notif.id)}
    >
      {/* Unread Dot */}
      {!notif.read && (
        <span className={twMerge('absolute top-4 right-4 w-2 h-2 rounded-full shadow-md animate-pulse', cfg.dot)} />
      )}

      {/* Icon */}
      <div className={twMerge('w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center glass border', cfg.border)}>
        <span className={twMerge('material-symbols-outlined text-2xl', cfg.icon)} style={{ fontVariationSettings: notif.read ? "'FILL' 0" : "'FILL' 1" }}>
          {notif.icon}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pr-4">
        <div className="flex items-center gap-2 flex-wrap mb-0.5">
          <p className={twMerge('text-sm font-bold', notif.read ? 'text-slate-700 dark:text-slate-300' : 'text-slate-900 dark:text-white')}>
            {notif.title}
          </p>
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
            {notif.tag}
          </span>
        </div>
        <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
          {notif.body}
        </p>
        <p className="text-[10px] text-slate-400 font-semibold mt-1.5 flex items-center gap-1">
          <span className="material-symbols-outlined text-xs">schedule</span>
          {notif.time}
        </p>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onDismiss(notif.id); }}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 transition-all"
        title="Dismiss"
      >
        <span className="material-symbols-outlined text-base">close</span>
      </button>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [activeFilter, setActiveFilter] = useState('All');

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const markRead = (id) =>
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));

  const dismiss = (id) =>
    setNotifications((prev) => prev.filter((n) => n.id !== id));

  const filtered = notifications.filter((n) => {
    if (activeFilter === 'Unread') return !n.read;
    if (activeFilter !== 'All') return n.tag === activeFilter;
    return true;
  });

  const groups = ['Today', 'Earlier'];

  return (
    <MainLayout title="Notifications">
      <div className="p-5 max-w-3xl mx-auto flex flex-col gap-6">

        {/* ── Header Row ── */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-slate-900 dark:text-white font-extrabold text-2xl tracking-tight">Notifications</h2>
            <p className="text-slate-500 text-sm mt-0.5">
              {unreadCount > 0 ? (
                <><span className="text-primary font-bold">{unreadCount}</span> unread notifications</>
              ) : (
                'All caught up!'
              )}
            </p>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent transition-colors px-3 py-2 hover:bg-primary/10 rounded-xl"
            >
              <span className="material-symbols-outlined text-base">done_all</span>
              Mark all read
            </button>
          )}
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={twMerge(
                'flex-shrink-0 text-xs font-bold px-4 py-2 rounded-xl transition-all',
                activeFilter === f
                  ? 'bg-gradient-to-br from-primary to-accent text-white shadow-md shadow-primary/20'
                  : 'glass text-slate-600 dark:text-slate-400 hover:text-primary border border-white/20 dark:border-white/10'
              )}
            >
              {f}
              {f === 'Unread' && unreadCount > 0 && (
                <span className="ml-1.5 bg-white/30 text-white rounded-full px-1.5 py-0.5 text-[10px] font-black">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Notification Groups ── */}
        {filtered.length > 0 ? (
          groups.map((group) => {
            const groupItems = filtered.filter((n) => n.group === group);
            if (groupItems.length === 0) return null;
            return (
              <div key={group} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xs font-black uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                    {group}
                  </h3>
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700/50" />
                </div>
                <div className="flex flex-col gap-2.5">
                  {groupItems.map((notif) => (
                    <NotificationItem
                      key={notif.id}
                      notif={notif}
                      onRead={markRead}
                      onDismiss={dismiss}
                    />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          /* ── Empty State ── */
          <div className="flex flex-col items-center justify-center py-24 text-center gap-5">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  notifications_off
                </span>
              </div>
            </div>
            <div>
              <p className="text-slate-900 dark:text-white font-bold text-xl">All Clear!</p>
              <p className="text-slate-500 text-sm mt-1.5 max-w-xs mx-auto leading-relaxed">
                {activeFilter === 'Unread'
                  ? "You've read all your notifications. Great job staying on top of things!"
                  : `No notifications match the "${activeFilter}" filter.`}
              </p>
            </div>
            {activeFilter !== 'All' && (
              <button
                onClick={() => setActiveFilter('All')}
                className="text-sm font-bold text-primary hover:text-accent transition-colors"
              >
                View all notifications →
              </button>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default NotificationsPage;
