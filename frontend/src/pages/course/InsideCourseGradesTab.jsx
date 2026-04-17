import React from 'react';

export default function InsideCourseGradesTab() {
  const courseGrades = [
    {
      id: 1,
      name: 'Homework 1',
      weight: '10%',
      score: 90,
      total: 100,
      status: 'GRADED',
      icon: 'assignment'
    },
    {
      id: 2,
      name: 'Homework 2',
      weight: '10%',
      score: 85,
      total: 100,
      status: 'GRADED',
      icon: 'assignment'
    },
    {
      id: 3,
      name: 'Midterm Exam',
      weight: '30%',
      score: 88,
      total: 100,
      status: 'GRADED',
      icon: 'quiz'
    },
    {
      id: 4,
      name: 'Project',
      weight: '50%',
      score: null,
      total: 100,
      status: 'Pending',
      icon: 'terminal'
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden pb-20">
      {/* Header */}
      <div className="flex items-center bg-white dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-800 justify-between sticky top-0 z-10">
        <div className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined cursor-pointer">arrow_back</span>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          EduCore LMS
        </h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 bg-transparent text-slate-900 dark:text-slate-100 p-0">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </div>

      {/* Course Header */}
      <div className="flex p-4 @container bg-white dark:bg-slate-900">
        <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between">
          <div className="flex gap-4 items-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl min-h-20 w-20 border border-slate-100 dark:border-slate-800"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHsn0mHPd2gNmPOLcVdE7uFJNWIzQfsjig97KGYVoT_bNldWNTMCFp6vSMNZ9GNfleMjm9p3tCgNQU_00Jvc0jdr_E9eBUV8sz6whYnNrQ-eU2DMo3LfJNGOGBH--dWZVRXo1qr3MO2wRVgzvq0Mz998KGv3CHC767aNpfM1gj4IoRy3TXBlHYUXyu9nzs91ePh0J6NQrmfyVvj_iu44iYAUJXA4QOxClDKB2xO6vMtn9WJjL05lEddhfTYfiemJe_EXCV6GLwLho")'
              }}
            ></div>
            <div className="flex flex-col">
              <p className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-[-0.015em]">
                Web Development
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Dr. Ahmed</p>
              <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">Fall Semester 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar">
        <div className="flex px-4 min-w-max">
          <a
            className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 px-4 pb-3 pt-4"
            href="#stream"
          >
            <p className="text-sm font-semibold whitespace-nowrap">Stream</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 px-4 pb-3 pt-4"
            href="#lectures"
          >
            <p className="text-sm font-semibold whitespace-nowrap">Lectures</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 px-4 pb-3 pt-4"
            href="#assignments"
          >
            <p className="text-sm font-semibold whitespace-nowrap">Assignments</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 px-4 pb-3 pt-4"
            href="#students"
          >
            <p className="text-sm font-semibold whitespace-nowrap">Students</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-2 border-primary text-primary px-4 pb-3 pt-4"
            href="#grades"
          >
            <p className="text-sm font-bold whitespace-nowrap">Grades</p>
          </a>
        </div>
      </div>

      {/* Grades Summary */}
      <div className="p-4 @container">
        <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="flex flex-col gap-4 p-5">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  Current Standing
                </p>
                <p className="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight">88.5% (B+)</p>
              </div>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">Top 15%</div>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '88.5%' }}></div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Course Summary: You are performing well above average. Keep up the consistent work on assignments.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Grades */}
      <div className="px-4 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">Detailed Grades</h3>
          <span className="material-symbols-outlined text-slate-400 cursor-pointer">filter_list</span>
        </div>
        <div className="flex flex-col gap-3">
          {courseGrades.map((grade) => (
            <div
              key={grade.id}
              className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="bg-slate-50 dark:bg-slate-800 size-10 flex items-center justify-center rounded-lg text-primary">
                  <span className="material-symbols-outlined">{grade.icon}</span>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">{grade.name}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Weight: {grade.weight}</p>
                </div>
              </div>
              <div className="text-right">
                {grade.score !== null ? (
                  <>
                    <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">
                      {grade.score}/{grade.total}
                    </p>
                    <p className="text-emerald-500 text-[10px] font-bold">{grade.status}</p>
                  </>
                ) : (
                  <>
                    <p className="text-slate-400 dark:text-slate-500 text-sm font-bold">- / {grade.total}</p>
                    <p className="text-amber-500 text-[10px] font-bold uppercase tracking-tight">{grade.status}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pb-5 pt-2 flex gap-2 z-20">
        <a
          className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400"
          href="#home"
        >
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">home</span>
          </div>
          <p className="text-[10px] font-medium leading-normal tracking-wide">Home</p>
        </a>
        <a
          className="flex flex-1 flex-col items-center justify-center gap-1 text-primary"
          href="#courses"
        >
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>
              school
            </span>
          </div>
          <p className="text-[10px] font-bold leading-normal tracking-wide">Courses</p>
        </a>
        <a
          className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400"
          href="#messages"
        >
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">chat_bubble</span>
          </div>
          <p className="text-[10px] font-medium leading-normal tracking-wide">Messages</p>
        </a>
        <a
          className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400"
          href="#profile"
        >
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">account_circle</span>
          </div>
          <p className="text-[10px] font-medium leading-normal tracking-wide">Profile</p>
        </a>
      </div>
    </div>
  );
}
