import React from 'react';
import { Link, useParams } from 'react-router-dom';
import InstructorLayout from '../../layouts/InstructorLayout';
import Card from '../../components/ui/Card';

const courseStudents = [
  { id: 1, name: 'Alice Johnson', email: 'alice@educore.edu', progress: 85, lastActive: '2 hours ago' },
  { id: 2, name: 'Bob Smith', email: 'bob@educore.edu', progress: 42, lastActive: '1 day ago' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@educore.edu', progress: 100, lastActive: 'Just now' },
];

const InsideCourseStudents = () => {
  const { id } = useParams();

  return (
    <InstructorLayout title="Course Roster">
      <div className="p-5 flex flex-col gap-6 max-w-5xl mx-auto">
        
        {/* Course Header Bar */}
        <div className="flex flex-wrap items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-4 shadow-sm gap-4">
           <div className="flex items-center gap-4">
              <Link to="/instructor" className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-amber-500 transition-colors">
                 <span className="material-symbols-outlined">arrow_back</span>
              </Link>
              <div>
                 <h2 className="text-lg font-bold text-slate-900 dark:text-white">Advanced React 2024</h2>
                 <p className="text-xs text-slate-500">Student Roster</p>
              </div>
           </div>
           <div className="flex flex-wrap gap-2">
             <Link to={`/instructor/course/${id}/stream`} className="px-4 py-2 text-sm font-bold text-slate-500 hover:text-amber-500 transition-colors">Stream</Link>
             <Link to={`/instructor/course/${id}`} className="px-4 py-2 text-sm font-bold text-slate-500 hover:text-amber-500 transition-colors">Lectures</Link>
             <div className="px-4 py-2 text-sm font-bold text-amber-500 bg-amber-500/10 rounded-xl flex items-center justify-center">People</div>
           </div>
        </div>

        <div className="flex justify-between items-center mt-2">
           <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Enrolled Students</h3>
              <p className="text-sm text-slate-500">{courseStudents.length} active students</p>
           </div>
           <button onClick={() => alert("Opening Student Enrollment modal...")} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md transition-all flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-[18px]">person_add</span> Enrol Student
           </button>
        </div>

        {/* Student List */}
        <Card className="p-0 overflow-hidden">
           <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-white/10">
                  <th className="py-4 px-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Student</th>
                  <th className="py-4 px-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Course Progress</th>
                  <th className="py-4 px-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Last Active</th>
                  <th className="py-4 px-5 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {courseStudents.map(student => (
                  <tr key={student.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-3">
                         <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-xs">
                           {student.name.charAt(0)}
                         </div>
                         <div>
                            <p className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">{student.name}</p>
                            <p className="text-[11px] text-slate-500">{student.email}</p>
                         </div>
                      </div>
                    </td>
                    <td className="py-3 px-5 border-t-0 align-middle">
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                           <div className="h-full bg-amber-500 rounded-full" style={{ width: `${student.progress}%` }}></div>
                        </div>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-5 text-xs text-slate-500">{student.lastActive}</td>
                    <td className="py-3 px-5 text-right">
                       <button onClick={() => alert(`Opening email composer for ${student.name}...`)} className="text-slate-400 hover:text-amber-500 transition-colors p-1 rounded-lg hover:bg-amber-500/10">
                         <span className="material-symbols-outlined text-[20px]">mail</span>
                       </button>
                       <button onClick={() => Object.assign(student, alert(`Removing ${student.name} from the course...`))} className="text-slate-400 hover:text-rose-500 transition-colors p-1 rounded-lg hover:bg-rose-500/10 ml-1">
                         <span className="material-symbols-outlined text-[20px]">person_remove</span>
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
           </table>
        </Card>
      </div>
    </InstructorLayout>
  );
};

export default InsideCourseStudents;
