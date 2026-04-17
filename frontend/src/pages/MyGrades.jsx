import React from 'react';

export default function MyGrades() {
  const grades = [
    {
      id: 1,
      name: 'HW1 - Responsive Grid System',
      course: 'UI/UX Design Fundamentals',
      score: 95,
      total: 100,
      grade: 'A',
      status: 'Graded',
      feedback: 'Excellent implementation of the grid system. Layout is very clean and the responsive breakpoints are well-defined.',
      instructor: 'Prof. Sarah Jenkins'
    },
    {
      id: 2,
      name: 'Midterm Project: Portfolio Site',
      course: 'Web Development II',
      score: 88,
      total: 100,
      grade: 'B+',
      status: 'Graded',
      feedback: 'Impressive use of modern CSS techniques. The accessibility score was 100%. Great attention to detail.',
      instructor: 'Dr. Marcus Thorne'
    },
    {
      id: 3,
      name: 'Quiz 3: Dynamic Programming',
      course: 'Advanced Algorithms',
      score: 10,
      total: 10,
      grade: 'A+',
      status: 'Graded',
      feedback: 'The complexity analysis of the knapsack problem variant was spot on.',
      instructor: 'Prof. Elena Rodriguez'
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-white p-1.5 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">EduCore LMS</h1>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-primary text-lg">person</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-6 mb-24">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">My Grades</h2>
          <p className="text-slate-500 dark:text-slate-400">Semester Spring 2024 • Computer Science Department</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Current GPA</p>
              <p className="text-3xl font-bold text-primary">3.82</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">trending_up</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Completed Credits</p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                120 <span className="text-sm font-normal text-slate-400">/ 144</span>
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
          </div>
        </div>

        {/* Grades List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Recent Assignments</h3>
            <button className="text-sm font-semibold text-primary hover:underline">View All</button>
          </div>

          {grades.map((grade) => (
            <div
              key={grade.id}
              className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:border-primary/30"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {grade.status}
                    </span>
                    <span className="text-xs text-slate-400">• {grade.course}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">{grade.name}</h4>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border-l-4 border-primary/40">
                    <p className="text-sm text-slate-600 dark:text-slate-400 italic">"{grade.feedback}"</p>
                    <p className="text-xs font-medium text-slate-500 mt-2">— {grade.instructor}</p>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-1">
                  <div className="text-right">
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">{grade.score}</span>
                    <span className="text-slate-400">/ {grade.total}</span>
                  </div>
                  <div className="px-3 py-1 bg-primary/5 text-primary text-sm font-bold rounded-lg border border-primary/10">
                    Grade: {grade.grade}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pb-safe">
        <div className="max-w-md mx-auto flex justify-around items-center h-16">
          <a className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-primary transition-colors" href="#home">
            <span className="material-symbols-outlined text-[24px]">home</span>
            <span className="text-[10px] font-semibold">Home</span>
          </a>
          <a className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-primary transition-colors" href="#courses">
            <span className="material-symbols-outlined text-[24px]">book_2</span>
            <span className="text-[10px] font-semibold">Courses</span>
          </a>
          <a className="flex flex-col items-center justify-center gap-1 text-primary" href="#grades">
            <span className="material-symbols-outlined text-[24px] fill-[1]">assignment</span>
            <span className="text-[10px] font-bold">Grades</span>
            <div className="absolute -top-1 w-1 h-1 bg-primary rounded-full"></div>
          </a>
          <a className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-primary transition-colors" href="#profile">
            <span className="material-symbols-outlined text-[24px]">account_circle</span>
            <span className="text-[10px] font-semibold">Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}
