import React, { useState } from 'react';

export default function AcademicCalendarView() {
  const [currentMonth, setCurrentMonth] = useState('October');
  const [currentYear] = useState(2026);

  const events = [
    {
      id: 1,
      title: 'Web Development Final Project',
      time: '10:00 AM',
      location: 'Online Submission',
      type: 'primary',
      date: 5
    },
    {
      id: 2,
      title: 'UI/UX Design Workshop',
      time: '02:30 PM',
      location: 'Design Lab B204',
      type: 'purple',
      date: 6
    },
    {
      id: 3,
      title: 'Marketing Analytics Quiz',
      time: 'Tomorrow',
      location: '',
      type: 'emerald',
      date: 8
    }
  ];

  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  const nextMonth = () => {
    // Logic to move to next month
  };

  const prevMonth = () => {
    // Logic to move to prev month
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-white dark:bg-slate-900 shadow-xl overflow-x-hidden">
      {/* Top Navigation */}
      <header className="flex items-center bg-white dark:bg-slate-900 p-4 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-10">
        <div className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer text-slate-600 dark:text-slate-400">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h1 className="flex-1 text-center text-lg font-bold tracking-tight text-slate-900 dark:text-white">Calendar</h1>
        <div className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer text-slate-600 dark:text-slate-400">
          <span className="material-symbols-outlined">search</span>
        </div>
      </header>

      {/* Month Selector */}
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          {currentMonth} {currentYear}
        </h2>
        <div className="flex gap-1">
          <button
            onClick={prevMonth}
            className="flex size-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
          <button
            onClick={nextMonth}
            className="flex size-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <main className="flex-1 px-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-2 border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-7 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div
                key={day}
                className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center py-2"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-px bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden">
            {/* Previous month days (27-30) */}
            {[27, 28, 29, 30].map((day) => (
              <div
                key={`prev-${day}`}
                className="h-14 bg-white dark:bg-slate-900 flex flex-col items-center justify-center text-slate-300 dark:text-slate-600 text-sm"
              >
                {day}
              </div>
            ))}
            {/* Current month days */}
            {[1, 2, 3].map((day) => (
              <div
                key={`curr-${day}`}
                className="h-14 bg-white dark:bg-slate-900 flex flex-col items-center justify-center text-slate-800 dark:text-slate-200 text-sm"
              >
                {day}
              </div>
            ))}

            {/* Week 2 */}
            {[4, 5, 6, 7, 8, 9, 10].map((day) => {
              const hasEvent = events.some((e) => e.date === day);
              const isSelected = day === 5;

              return (
                <div
                  key={`week2-${day}`}
                  className={`h-14 flex flex-col items-center justify-center text-sm font-bold rounded-lg shadow-lg shadow-primary/30 relative ${
                    isSelected
                      ? 'bg-primary text-white'
                      : `bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 ${hasEvent ? 'relative' : ''}`
                  }`}
                >
                  {day}
                  {hasEvent && !isSelected && (
                    <div className="absolute bottom-2 size-1 bg-primary rounded-full"></div>
                  )}
                </div>
              );
            })}

            {/* Week 3 */}
            {[11, 12, 13, 14, 15, 16, 17].map((day) => (
              <div
                key={`week3-${day}`}
                className="h-14 bg-white dark:bg-slate-900 flex flex-col items-center justify-center text-slate-800 dark:text-slate-200 text-sm"
              >
                {day}
              </div>
            ))}

            {/* Week 4 */}
            {[18, 19, 20, 21, 22, 23, 24].map((day) => (
              <div
                key={`week4-${day}`}
                className="h-14 bg-white dark:bg-slate-900 flex flex-col items-center justify-center text-slate-800 dark:text-slate-200 text-sm"
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Agenda Section */}
      <div className="mt-8 pb-20 px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">Upcoming Events</h3>
          <span className="text-sm font-medium text-primary cursor-pointer">View All</span>
        </div>
        <div className="space-y-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
            >
              <div className={`w-1.5 rounded-full h-auto bg-${event.type === 'primary' ? 'primary' : event.type === 'purple' ? 'purple-500' : 'emerald-500'}`}></div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100">{event.title}</h4>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full uppercase ${
                      event.type === 'primary'
                        ? 'text-primary bg-primary/10'
                        : event.type === 'purple'
                        ? 'text-purple-600 bg-purple-100'
                        : 'text-emerald-600 bg-emerald-100'
                    }`}
                  >
                    {event.time}
                  </span>
                </div>
                {event.location && (
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="material-symbols-outlined text-[14px]">
                      {event.location.includes('Online') ? 'cloud_sync' : 'location_on'}
                    </span>
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md flex items-center bg-white/90 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 px-4 pb-6 pt-3 z-20">
        <a
          className="flex flex-1 flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors"
          href="#home"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
        </a>
        <a
          className="flex flex-1 flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors"
          href="#courses"
        >
          <span className="material-symbols-outlined">book</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Courses</span>
        </a>
        <a
          className="flex flex-1 flex-col items-center gap-1 text-primary"
          href="#calendar"
        >
          <span className="material-symbols-outlined fill-1">calendar_today</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Calendar</span>
        </a>
        <a
          className="flex flex-1 flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors"
          href="#messages"
        >
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Messages</span>
        </a>
        <a
          className="flex flex-1 flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors"
          href="#profile"
        >
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
        </a>
      </nav>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-[calc(50%-180px)] size-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 flex items-center justify-center hover:scale-105 transition-transform z-30">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
}
