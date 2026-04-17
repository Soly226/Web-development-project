import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const EmailTemplatesPage = () => {
  const placeholders = ['{{student_name}}', '{{course_name}}', '{{instructor_name}}', '{{login_url}}', '{{due_date}}'];

  return (
    <AdminLayout title="Communications Console">
      <div className="p-5 max-w-5xl mx-auto space-y-6">
        
        {/* Template Selector Section */}
        <Card className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full">
            <label className="text-xs font-black text-slate-500 mb-2 block uppercase tracking-[0.15em]">Active Template</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-primary/20 outline-none">
              <option>New Course Enrollment</option>
              <option>Assignment Due Reminder</option>
              <option>Grade Published</option>
              <option>Welcome Email</option>
            </select>
          </div>
          <Button variant="secondary" className="w-full md:w-auto px-6 h-12 gap-2">
            <span className="material-symbols-outlined text-sm">add_circle</span>
            New Template
          </Button>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="p-6 space-y-6 overflow-visible">
              <Input label="Email Subject" defaultValue="Welcome to {{course_name}}!" className="bg-white/5 border-white/10 font-bold" />
              
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Email Body (HTML/Markdown Supported)</label>
                <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                  <div className="p-2 border-b border-white/10 flex gap-2 bg-white/5">
                    {['format_bold', 'format_italic', 'link', 'format_list_bulleted', 'image'].map(icon => (
                      <button key={icon} className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-lg">{icon}</span>
                      </button>
                    ))}
                  </div>
                  <textarea 
                    className="w-full h-80 bg-transparent p-6 text-sm outline-none resize-none font-medium leading-relaxed"
                    defaultValue={`Hi {{student_name}},

Congratulations! You have been successfully enrolled in the course: {{course_name}}.

We are excited to have you on board. You can start your learning journey immediately by clicking the link below:

{{login_url}}

Best regards,
The EduCore Learning Team`}
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Placeholders Sidebar */}
          <div className="space-y-6">
            <Card className="bg-primary/5 border-primary/20 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary text-xl">token</span>
                <h3 className="text-xs font-black text-primary uppercase tracking-[0.2em]">Variables</h3>
              </div>
              <p className="text-[11px] text-slate-500 font-medium mb-4">Click a placeholder to insert it into your editor template.</p>
              <div className="flex flex-wrap gap-2">
                {placeholders.map(tag => (
                  <button key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono font-bold text-primary hover:border-primary hover:bg-primary/5 transition-all">
                    {tag}
                  </button>
                ))}
              </div>
            </Card>

            <div className="flex flex-col gap-3">
              <Button className="w-full py-4 shadow-primary/30 gap-2">
                <span className="material-symbols-outlined text-sm">save</span>
                Commit Template
              </Button>
              <Button variant="secondary" className="w-full py-4 gap-2">
                <span className="material-symbols-outlined text-sm">rocket_launch</span>
                Send Test
              </Button>
            </div>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
};

export default EmailTemplatesPage;
