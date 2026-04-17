import React from 'react';

export default function StudentProfileView() {
  const currentEnrollment = [
    {
      id: 1,
      icon: 'terminal',
      color: 'indigo',
      name: 'Web Development',
      code: 'CS-402',
      professor: 'Prof. Sarah Chen',
      grade: 'A-',
      status: 'Midterm'
    },
    {
      id: 2,
      icon: 'design_services',
      color: 'purple',
      name: 'UI/UX Design',
      code: 'DS-201',
      professor: 'Prof. James Wilson',
      grade: 'A+',
      status: 'Midterm'
    }
  ];

  const stats = [
    { label: 'GPA', value: '3.82', icon: 'trending_up' },
    { label: 'Credits', value: '120/144', icon: null },
    { label: 'Ranking', value: 'Top 5%', icon: null }
  ];

  const personalInfo = [
    {
      icon: 'mail',
      label: 'Email Address',
      labelAbbr: 'EMAIL',
      value: 'a.rivera@educore.edu'
    },
    { icon: 'call', label: 'Phone Number', labelAbbr: 'PHONE', value: '+1 (555) 012-3456' },
    { icon: 'id_card', label: 'Student ID', labelAbbr: 'ID', value: '2024-8891' }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 pb-24">
      {/* Top Navigation */}
      <div className="sticky top-0 z-10 flex items-center bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 justify-between">
        <div className="flex size-10 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">Student Profile</h2>
        <div className="flex size-10 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
          <span className="material-symbols-outlined">more_vert</span>
        </div>
      </div>

      <main className="max-w-md mx-auto space-y-6 pt-4 px-4">
        {/* Profile Header */}
        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-28 w-28 border-4 border-primary/10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVSAqKhdsGNh-RBnHwUQMR9xn886QxWfz6Fu-LHwGrpnZ4pxF0ihtsbb1DUFihU97MLKDruyYflOWoTr3m11u63PgoAiPkRPsO_NE6ecv1UOLbDGR-lfSJnfWhxltQKTyM9ukj0B8adxffdcDXQp3YtZ5hx09QbxNfu48E0dlpWI4OvTf9qL_oZje__mOZ6qByaQO9IND4FYwBZ6tWhwmeU7FIAICSnIsrXnK82s_DayvFTCIvBttVLQZzh0UeRQh3oYd9YLkzmc0")'
                }}
              ></div>
              <div className="absolute bottom-1 right-1 bg-green-500 border-2 border-white dark:border-slate-900 h-5 w-5 rounded-full"></div>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold tracking-tight">Alex Rivera</h1>
              <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">Computer Science • Junior</p>
              <div className="inline-flex items-center mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                Active Student
              </div>
            </div>
          </div>
        </div>

        {/* Academic Statistics */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center shadow-sm"
            >
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-1 uppercase tracking-wide">
                {stat.label}
              </p>
              <p className={`text-xl font-bold ${stat.label === 'GPA' ? 'text-primary' : 'text-slate-900 dark:text-slate-100'}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Performance Trend Chart */}
        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg">Performance Trend</h3>
            <span className="text-xs text-slate-500 font-medium">Last 4 Semesters</span>
          </div>
          <div className="flex items-end justify-between h-32 gap-2 px-2">
            {[75, 85, 80, 95].map((height, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1 gap-2">
                <div className="w-full bg-primary/20 rounded-t-lg h-24 relative overflow-hidden">
                  <div
                    className="absolute bottom-0 w-full bg-primary rounded-t-lg"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
                <span className="text-[10px] font-medium text-slate-500 uppercase">Sem {idx + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Enrollment */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg px-1">Current Enrollment</h3>
            <button className="text-primary text-sm font-semibold">View All</button>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {currentEnrollment.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm group hover:border-primary transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`size-12 rounded-lg flex items-center justify-center ${
                      course.color === 'indigo'
                        ? 'bg-indigo-50 dark:bg-indigo-900/30 text-primary'
                        : 'bg-purple-50 dark:bg-purple-900/30 text-purple-600'
                    }`}
                  >
                    <span className="material-symbols-outlined">{course.icon}</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100">{course.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {course.code} • {course.professor}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{course.grade}</p>
                  <p className="text-[10px] text-slate-400 uppercase font-medium">{course.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-lg mb-4">Personal Information</h3>
          <div className="space-y-4">
            {personalInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-slate-500 text-xl">{info.icon}</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">
                    {info.labelAbbr}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 pb-6 pt-2 z-20">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <a
            className="flex flex-col items-center gap-1 flex-1 py-1 text-slate-400 dark:text-slate-500"
            href="#dashboard"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Dashboard</span>
          </a>
          <a className="flex flex-col items-center gap-1 flex-1 py-1 text-slate-400 dark:text-slate-500" href="#courses">
            <span className="material-symbols-outlined">book</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Courses</span>
          </a>
          <a className="flex flex-col items-center gap-1 flex-1 py-1 text-primary" href="#profile">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>
              school
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Grades</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 flex-1 py-1 text-slate-400 dark:text-slate-500"
            href="#settings"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Settings</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
