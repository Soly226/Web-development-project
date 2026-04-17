import React, { useState } from 'react';

export default function AssignmentDetails() {
  const [selectedFile, setSelectedFile] = useState(null);

  const assignment = {
    course: 'Computer Science 101',
    title: 'HW1 - Responsive Grid System',
    points: 100,
    dueDate: '10 March 2026, 11:59 PM',
    status: 'Not Submitted',
    attempts: '0/1',
    description: 'In this assignment, you will build a responsive grid system using CSS Grid and Flexbox. Ensure it works on mobile, tablet, and desktop views. Your solution should handle different content lengths gracefully and include a navigation header and a three-column layout that stacks on smaller screens.',
    attachments: [
      {
        id: 1,
        name: 'assignment_brief.pdf',
        size: '1.2 MB',
        type: 'PDF Document'
      }
    ]
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
          <div className="flex items-center p-4 gap-4">
            <a
              className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-lg transition-colors"
              href="#back"
            >
              <span className="material-symbols-outlined block">arrow_back</span>
            </a>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Assignment Details</h2>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 space-y-6">
          {/* Assignment Header */}
          <section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {assignment.course}
                </span>
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                  {assignment.title}
                </h1>
              </div>
              <div className="flex flex-col items-end text-right">
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Points</div>
                <div className="text-2xl font-bold text-primary">{assignment.points}</div>
              </div>
            </div>

            {/* Assignment Details Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">calendar_today</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Due Date</p>
                  <p className="text-sm font-semibold">{assignment.dueDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">info</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Status</p>
                  <p className="text-sm font-semibold text-amber-600 dark:text-amber-400">{assignment.status}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">history</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Attempts</p>
                  <p className="text-sm font-semibold">{assignment.attempts}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Description Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold">Description</h3>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{assignment.description}</p>
            </div>
          </section>

          {/* Attachments */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold">Attachments</h3>
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
              {assignment.attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-red-500">
                      <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{attachment.name}</p>
                      <p className="text-xs text-slate-500">{attachment.size} • {attachment.type}</p>
                    </div>
                  </div>
                  <button className="flex items-center justify-center p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Submission Section */}
          <section className="space-y-4 pb-12">
            <h3 className="text-lg font-bold">Your Submission</h3>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center text-center space-y-4">
              <div className="bg-primary/10 p-4 rounded-full text-primary">
                <span className="material-symbols-outlined text-4xl">cloud_upload</span>
              </div>
              <div>
                <p className="text-sm font-semibold">Click to upload or drag and drop</p>
                <p className="text-xs text-slate-500 mt-1">Maximum file size 50MB (ZIP, PDF, HTML, CSS)</p>
              </div>
              <input className="hidden" id="file-upload" type="file" onChange={handleFileUpload} />
              <label
                className="cursor-pointer px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors"
                htmlFor="file-upload"
              >
                Choose Files
              </label>
              {selectedFile && <p className="text-xs text-primary font-medium">Selected: {selectedFile.name}</p>}
            </div>
            <div className="flex justify-end pt-4">
              <button className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-md shadow-primary/20">
                Submit Assignment
              </button>
            </div>
          </section>
        </main>

        {/* Bottom Navigation */}
        <nav className="sticky bottom-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 pb-3 pt-2">
          <div className="flex max-w-lg mx-auto gap-2">
            <a
              className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-slate-400"
              href="#dashboard"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <p className="text-xs font-medium leading-normal tracking-tight">Dashboard</p>
            </a>
            <a className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-slate-400" href="#courses">
              <span className="material-symbols-outlined">menu_book</span>
              <p className="text-xs font-medium leading-normal tracking-tight">Courses</p>
            </a>
            <a className="flex flex-1 flex-col items-center justify-end gap-1 text-primary" href="#assignments">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>
                description
              </span>
              <p className="text-xs font-medium leading-normal tracking-tight">Assignments</p>
            </a>
            <a className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-slate-400" href="#profile">
              <span className="material-symbols-outlined">person</span>
              <p className="text-xs font-medium leading-normal tracking-tight">Profile</p>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
