import React, { useState } from 'react';

export default function MyCoursesGridView() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      name: 'Web Development Boot Camp',
      instructor: 'Dr. Ahmed Khalifa',
      students: 45,
      progress: 65,
      lastActive: '2 hours ago',
      gradient: 'from-indigo-500 to-primary',
      icon: 'code',
      status: 'In Progress'
    },
    {
      id: 2,
      name: 'Intro to Psychology',
      instructor: 'Prof. Sarah Jenkins',
      students: 128,
      progress: 0,
      lastActive: '1 day ago',
      gradient: 'from-teal-500 to-emerald-600',
      icon: 'psychology',
      status: 'Featured'
    },
    {
      id: 3,
      name: 'UI/UX Design Fundamentals',
      instructor: 'Marco Verratti',
      students: 312,
      progress: 12,
      lastActive: '5 hours ago',
      gradient: 'from-orange-400 to-red-500',
      icon: 'palette',
      status: 'Popular'
    },
    {
      id: 4,
      name: 'Data Science with Python',
      instructor: 'Dr. Elena Rodriguez',
      students: 89,
      progress: 0,
      lastActive: '3 days ago',
      gradient: 'from-blue-400 to-cyan-500',
      icon: 'database',
      status: 'New'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === 'all' ||
      (filterStatus === 'in-progress' && course.progress > 0 && course.progress < 100) ||
      (filterStatus === 'completed' && course.progress === 100) ||
      (filterStatus === 'archived' && false);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">school</span>
            <h1 className="text-xl font-bold tracking-tight">EduCore LMS</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="material-symbols-outlined text-primary text-xl">person</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 md:px-6 pb-24">
        {/* Page Title and Search/Filter */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-2xl font-bold">My Courses</h2>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative flex-grow md:w-72">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  search
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Search your courses"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-xl">tune</span>
                Filters
              </button>
            </div>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['all', 'in-progress', 'completed', 'archived'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full font-medium text-sm transition-colors ${
                  filterStatus === status
                    ? 'bg-primary text-white'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                {status === 'all' ? 'All Courses' : status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
            >
              {/* Course Header Image */}
              <div
                className={`h-48 w-full bg-gradient-to-br ${course.gradient} flex items-center justify-center relative`}
              >
                <span className="material-symbols-outlined text-white text-6xl opacity-40">{course.icon}</span>
                <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md px-2 py-1 rounded text-white text-xs font-semibold uppercase tracking-wider">
                  {course.status}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-5 flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{course.instructor}</p>
                </div>

                <div className="flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">groups</span>
                    <span>{course.students} Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>Last active: {course.lastActive}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-2">
                  <div className="flex justify-between text-xs mb-1 font-medium">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  Enter Course
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400">No courses found</p>
          </div>
        )}
      </main>
    </div>
  );
}
