import React from 'react';

export default function InsideCourseAssignments() {
  const assignments = [
    {
      id: 1,
      icon: 'assignment_turned_in',
      color: 'green',
      name: 'HW1 - Responsive Grid System',
      dueDate: '10 Mar 2026 • 11:59 PM',
      status: 'Submitted'
    },
    {
      id: 2,
      icon: 'quiz',
      color: 'blue',
      name: 'Quiz: Cognitive Bias in UI/UX',
      dueDate: '15 Mar 2026 • 2:00 PM',
      status: 'Pending'
    },
    {
      id: 3,
      icon: 'description',
      color: 'orange',
      name: 'Project Proposal: Final Web App',
      dueDate: '05 Mar 2026 • 11:59 PM',
      status: 'Late'
    },
    {
      id: 4,
      icon: 'draw',
      color: 'indigo',
      name: 'Lab 4: JavaScript DOM Manipulation',
      dueDate: '22 Mar 2026 • 11:59 PM',
      status: 'Pending'
    }
  ];

  const colorClasses = {
    green: 'bg-green-50 dark:bg-green-950/30 text-green-600',
    blue: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600',
    orange: 'bg-orange-50 dark:bg-orange-950/30 text-orange-600',
    indigo: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600'
  };

  const statusClasses = {
    Submitted: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400',
    Pending: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
    Late: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400'
  };

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-3">
            <div className="text-primary flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <span className="material-symbols-outlined">arrow_back</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold tracking-tight">Course Details</h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex size-10 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">notifications</span>
            </button>
            <button className="flex size-10 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">more_vert</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-6 space-y-6">
        {/* Course Hero Section */}
        <div className="bg-white dark:bg-slate-900 rounded-xl p-4 md:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex gap-5 items-center">
              <div className="size-20 md:size-24 rounded-xl bg-primary/10 flex items-center justify-center text-primary overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvbt_bGUrpfZsEF7l_NjwU-6lrQApvS8HB8UkXSJA1hMYFmaUGeTRanRhQKO6GvGr60pShj21SPztBQpFW8fWT-J5TKBXVVZKHrWpmYz5EE0e2DAL4dPBt0ThVWgdDbw9N3XGV5srfsnwmABmavCUvjyz27QWbmJXYW7FNxo__JmXzwNAB0YCWWCji3vTC0B2RYUe-8rmMc0SRU9cXp6v8EmpcsUYh0ab-7XM71r2Q0CSybZj_l96ziprCatkEtH5dBP8Ied2dRoQ"
                  alt="Course"
                />
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Web Development</h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Dr. Ahmed Khalifa</p>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  <span>Semester: Spring 2026</span>
                </div>
              </div>
            </div>
            <button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg shadow-primary/20">
              Join Class
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-slate-200 dark:border-slate-800">
          <nav className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar">
            <a
              className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 pb-3 pt-2 hover:text-primary transition-colors whitespace-nowrap"
              href="#stream"
            >
              <span className="text-sm font-semibold">Stream</span>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 pb-3 pt-2 hover:text-primary transition-colors whitespace-nowrap"
              href="#lectures"
            >
              <span className="text-sm font-semibold">Lectures</span>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-2 border-primary text-primary pb-3 pt-2 whitespace-nowrap"
              href="#assignments"
            >
              <span className="text-sm font-bold">Assignments</span>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 pb-3 pt-2 hover:text-primary transition-colors whitespace-nowrap"
              href="#students"
            >
              <span className="text-sm font-semibold">Students</span>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 pb-3 pt-2 hover:text-primary transition-colors whitespace-nowrap"
              href="#grades"
            >
              <span className="text-sm font-semibold">Grades</span>
            </a>
          </nav>
        </div>

        {/* Assignments List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Active Assignments
              <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">{assignments.length}</span>
            </h3>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600">
                <span className="material-symbols-outlined text-lg">filter_list</span>
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className={`size-12 rounded-lg flex items-center justify-center ${colorClasses[assignment.color]}`}>
                      <span className="material-symbols-outlined">{assignment.icon}</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        {assignment.name}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Due: {assignment.dueDate}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${statusClasses[assignment.status]}`}
                  >
                    {assignment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 px-4 pb-4 pt-2 z-50">
        <div className="flex justify-around max-w-lg mx-auto">
          <a
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors"
            href="#home"
          >
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium">Home</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-primary"
            href="#courses"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>
              book_2
            </span>
            <span className="text-[10px] font-medium">Courses</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors"
            href="#calendar"
          >
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-[10px] font-medium">Calendar</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors"
            href="#profile"
          >
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Profile</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
