import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { twMerge } from 'tailwind-merge';

const RegisterPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.role);
    navigate(`/${formData.role}`);
  };

  return (
    <div className="bg-background-dark min-h-screen flex items-center justify-center p-4 font-display relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 blur-[120px] rounded-full animate-pulse decoration-3000"></div>
      </div>

      <Card className="max-w-md w-full p-0 border-white/10 shadow-2xl relative z-10 overflow-hidden" hover={false}>
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-10 pb-6 text-center border-b border-white/5">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-xl shadow-primary/30 mb-6 group cursor-default">
            <span className="material-symbols-outlined text-white text-4xl group-hover:rotate-12 transition-transform">person_add</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-3xl font-extrabold tracking-tight">Join EduCore</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-medium uppercase tracking-widest opacity-80">Academic Excellence Starts Here</p>
        </div>

        <div className="p-10 pt-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              id="name"
              placeholder="e.g. Jonathan Smith"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="bg-white/5 border-white/10 focus:bg-white/10"
            />
            
            <Input
              label="Professional Email"
              id="email"
              type="email"
              placeholder="name@university.edu"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="bg-white/5 border-white/10 focus:bg-white/10"
            />

            <Input
              label="Create Password"
              id="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
              className="bg-white/5 border-white/10 focus:bg-white/10"
            />

            <div>
              <label className="block text-slate-700 dark:text-slate-300 text-[11px] font-black uppercase tracking-widest mb-3 opacity-70">
                Identify Your Role
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['student', 'instructor', 'admin'].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setFormData({...formData, role})}
                    className={twMerge(
                      "py-3 px-1 text-[10px] font-black uppercase tracking-widest rounded-xl border-2 transition-all duration-300",
                      formData.role === role 
                        ? "bg-primary/20 text-primary border-primary shadow-lg shadow-primary/20" 
                        : "bg-white/5 text-slate-500 border-white/5 hover:border-white/10"
                    )}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full py-4 text-md shadow-lg shadow-primary/30 mt-4">
              Begin Journey
            </Button>
          </form>
        </div>

        <div className="p-8 bg-slate-950/50 border-t border-white/5 text-center">
          <p className="text-xs text-slate-500 font-medium">
            Already a member?
            <Link to="/login" className="text-primary font-black hover:text-accent ml-2 transition-colors uppercase tracking-wider">Sign In</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;
