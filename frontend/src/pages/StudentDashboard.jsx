import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentDashboard() {
  const courses = [
    {
      id: 1,
      name: 'Web Development',
      instructor: 'Dr. Ahmed Khalifa',
      progress: 65,
      status: 'In Progress',
      lessons: '12/18',
      gradient: 'from-indigo-500 to-violet-600'
    },
    {
      id: 2,
      name: 'Intro to Psychology',
      instructor: 'Prof. Sarah Jenkins',
      progress: 30,
      status: 'In Progress',
      lessons: '5/16',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 3,
      name: 'Data Science 101',
      instructor: 'Dr. Michael Chen',
      progress: 0,
      status: 'New',
      lessons: '0/24',
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  const assignments = [
    { id: 1, name: 'HW1 - React Basics', course: 'Web Development', dueDate: 'Mar 10', status: 'Due Soon' },
    { id: 2, name: 'Midterm Project', course: 'UI/UX Design', dueDate: 'Mar 12', status: 'Pending' },
    { id: 3, name: 'Reading Assignment', course: 'Psychology', dueDate: 'Mar 15', status: 'Pending' }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">school</span>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                EduCore <span className="text-primary">LMS</span>
              </h1>
            </div>
            <div className="hidden md:block">
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
                </span>
                <input
                  className="placeholder:text-slate-400 block bg-slate-100 dark:bg-slate-800 w-80 border-none rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-primary/50 sm:text-sm"
                  placeholder="Search courses, materials..."
                  type="text"
                />
              </label>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-slate-900 dark:text-white leading-none">Alex Johnson</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Computer Science</p>
              </div>
              <img
                alt="Profile"
                className="h-10 w-10 rounded-full border-2 border-primary/20 group-hover:border-primary transition-colors"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsinCZXifC8bD5DkcJVByMvNkDZ13jct1z8mtxckZ2rmhsxqpt8Ha3urOhFt4PK1EDqK-io2eB7ym3wO3zLoCYOJBEeykfIZ2vCw9VJsj6Poozl3SqwIWnk6pPAHv-8cFrEOcMe2tbEj24S7Rh0hQ98O5z2hozz0bUydQPm93gvbEfmb1UNJWCji45mVYDKsqjZJhQtR6H6nAMi3Ywu36vh4BnZsAd48A5ifFj1sXy8kBCemlpNpBQwsqphvGgtuDuYEUtVM_gGHY"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 space-y-1">
          <nav className="flex flex-col gap-1">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-lg font-medium"
            >
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </Link>
            <Link
              to="/my-courses"
              className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
            >
              <span className="material-symbols-outlined">menu_book</span>
              My Courses
            </Link>
            <Link
              to="/assignments"
              className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
            >
              <span className="material-symbols-outlined">assignment</span>
              Assignments
            </Link>
            <Link
              to="/grades"
              className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
            >
              <span className="material-symbols-outlined">grade</span>
              Grades
            </Link>
            <Link
              to="/calendar"
              className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
            >
              <span className="material-symbols-outlined">calendar_today</span>
              Calendar
            </Link>
          </nav>

          {/* Storage Widget */}
          <div className="mt-8 p-4 bg-primary rounded-xl text-white relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs font-medium opacity-80 uppercase tracking-wider">Storage Used</p>
              <p className="mt-1 text-lg font-bold">1.2 GB / 5 GB</p>
              <div className="mt-3 w-full bg-white/20 h-1.5 rounded-full">
                <div className="bg-white h-full rounded-full w-[24%]"></div>
              </div>
              <button className="mt-4 text-xs font-semibold bg-white text-primary px-3 py-1.5 rounded-lg hover:bg-opacity-90 transition-opacity">
                Upgrade Storage
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-20">
              <span className="material-symbols-outlined text-8xl">cloud</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 pb-24 lg:pb-0">
          <header className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Welcome back, Alex! 👋</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">You have 3 assignments due this week. Stay on track!</p>
          </header>

          {/* Active Courses Section */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Active Courses</h3>
              <Link to="/my-courses" className="text-sm font-semibold text-primary hover:underline">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`h-32 bg-gradient-to-br ${course.gradient} relative`}
                  >
                    <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
                      {course.status}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {course.name}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{course.instructor}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                      <span>{course.progress}% Complete</span>
                      <span>{course.lessons} Lessons</span>
                    </div>
                    <div className="mt-2 w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <button className="w-full mt-5 py-2 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm">
                      Go to Course
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Assignments */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Upcoming Assignments</h3>
              <Link to="/assignments" className="text-sm font-semibold text-primary hover:underline">
                View all
              </Link>
            </div>
            <div className="space-y-3">
              {assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between hover:border-primary/30 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{assignment.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{assignment.course}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Due: {assignment.dueDate}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        assignment.status === 'Due Soon'
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                          : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'
                      }`}
                    >
                      {assignment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
