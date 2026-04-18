import React from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const InstructorAssignmentPanel = () => {
  const assignments = [
    { id: 1, title: 'HTML Portfolio', course: 'Intro to Web Dev', due: 'Apr 15', submitted: 28, total: 32, status: 'Closed' },
    { id: 2, title: 'CSS Challenge', course: 'Intro to Web Dev', due: 'Apr 22', submitted: 14, total: 32, status: 'Open' },
    { id: 3, title: 'JS Quiz', course: 'React Basics', due: 'Apr 20', submitted: 5, total: 25, status: 'Open' },
    { id: 4, title: 'React Component', course: 'React Basics', due: 'Apr 25', submitted: 0, total: 25, status: 'Open' }
  ];

  const sidebarLinks = [
    { label: 'My Courses', to: '/instructor/create-course/step-1', matchPrefix: '/instructor/create-course', icon: 'menu_book' },
    { label: 'Analytics', to: '/instructor/analytics', matchPrefix: '/instructor/analytics', icon: 'analytics' },
    { label: 'Assignments', to: '/instructor/assignments', matchPrefix: '/instructor/assignments', icon: 'assignment' },
    { label: 'Roster', to: '/instructor/roster', matchPrefix: '/instructor/roster', icon: 'group' }
  ];

  const handleCreateAssignment = () => {
    console.log('Create assignment clicked');
  };

  const handleViewSubmissions = (title) => {
    console.log(`View submissions: ${title}`);
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Topbar title="Instructor Assignments" />

      <div className="flex flex-col md:flex-row">
        <Sidebar links={sidebarLinks} />

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Assignments</h2>
              <Button onClick={handleCreateAssignment}>+ Create assignment</Button>
            </div>

            <Card className="p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px]">
                  <thead className="bg-slate-100/80 dark:bg-slate-800/70">
                    <tr>
                      <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">Assignment</th>
                      <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">Course</th>
                      <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">Due Date</th>
                      <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">Submissions</th>
                      <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">Status</th>
                      <th className="text-right px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">Action</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {assignments.map((assignment) => {
                      const isOpen = assignment.status === 'Open';

                      return (
                        <tr key={assignment.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-900/40 transition-colors">
                          <td className="px-5 py-4">
                            <p className="text-sm font-bold text-slate-900 dark:text-white">{assignment.title}</p>
                          </td>
                          <td className="px-5 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">{assignment.course}</td>
                          <td className="px-5 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">{assignment.due}</td>
                          <td className="px-5 py-4 text-sm font-semibold text-slate-700 dark:text-slate-200">{assignment.submitted} / {assignment.total}</td>
                          <td className="px-5 py-4">
                            <span
                              className={[
                                'px-3 py-1 rounded-full text-xs font-bold',
                                isOpen
                                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                                  : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                              ].join(' ')}
                            >
                              {assignment.status}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-right">
                            <Button
                              variant="secondary"
                              className="py-2 px-4 text-xs"
                              onClick={() => handleViewSubmissions(assignment.title)}
                            >
                              View submissions
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InstructorAssignmentPanel;
