import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const InsideCourseLectures = () => {
  const { id } = useParams();

  const lectures = [
    { id: 1, title: 'HTML Fundamentals', week: 1, duration: '24 min', status: 'Published' },
    { id: 2, title: 'CSS Layouts', week: 2, duration: '31 min', status: 'Published' },
    { id: 3, title: 'JavaScript Basics', week: 3, duration: null, status: 'Draft' },
    { id: 4, title: 'React Intro', week: 4, duration: null, status: 'Draft' }
  ];

  const sidebarLinks = [
    { label: '← Courses', to: '/instructor', icon: 'arrow_back' },
    { label: 'Lectures', to: `/instructor/course/${id}/lectures`, matchPrefix: `/instructor/course/${id}/lectures`, icon: 'play_lesson' },
    { label: 'Stream', to: `/instructor/course/${id}/stream`, matchPrefix: `/instructor/course/${id}/stream`, icon: 'dynamic_feed' },
    { label: 'Assignments', to: '/instructor/assignments', matchPrefix: '/instructor/assignments', icon: 'assignment' },
    { label: 'Students', to: `/instructor/course/${id}/students`, matchPrefix: `/instructor/course/${id}/students`, icon: 'groups' }
  ];

  const handleAddLecture = () => {
    console.log('Add lecture clicked');
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Topbar title="Inside Course" />

      <div className="flex flex-col md:flex-row">
        <Sidebar links={sidebarLinks} />

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Lectures</h2>
              <Button onClick={handleAddLecture}>+ Add lecture</Button>
            </div>

            <Card className="p-0 overflow-hidden">
              <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {lectures.map((lecture) => {
                  const isPublished = lecture.status === 'Published';

                  return (
                    <div key={lecture.id} className="px-4 md:px-5 py-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-[20px]">play_circle</span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm md:text-base font-bold text-slate-900 dark:text-white truncate">
                          {lecture.title}
                        </p>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                          Week {lecture.week} · {lecture.duration || 'TBD'}
                        </p>
                      </div>

                      <span
                        className={[
                          'px-3 py-1 rounded-full text-xs font-bold',
                          isPublished
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                            : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                        ].join(' ')}
                      >
                        {lecture.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InsideCourseLectures;
