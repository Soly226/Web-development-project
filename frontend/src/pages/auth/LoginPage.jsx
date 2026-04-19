import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid academic email address';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    let role = 'student';
    if (email.includes('admin')) role = 'admin';
    if (email.includes('instructor')) role = 'instructor';
    login(role);
    navigate(`/${role}`);
  };

  return (
    <div className="bg-background-dark min-h-screen flex items-center justify-center p-4 font-display relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 blur-[120px] rounded-full animate-pulse decoration-3000"></div>
      </div>

      <Card className="max-w-md w-full p-0 border-white/10 shadow-2xl relative z-10 overflow-hidden" hover={false}>
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-10 pb-6 text-center border-b border-white/5">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-xl shadow-primary/30 mb-6 group cursor-default">
            <span className="material-symbols-outlined text-white text-4xl group-hover:rotate-12 transition-transform">school</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-3xl font-extrabold tracking-tight">EduCore LMS</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-medium uppercase tracking-widest opacity-80">Next-Gen Learning Portal</p>
        </div>

        <div className="p-10 pt-8">
          <div className="mb-8">
            <h1 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Welcome Back</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Please enter your credentials to login.</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Professional Email"
              id="email"
              type="email"
              placeholder="e.g. administrator@educore.edu"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({...errors, email: ''});
              }}
              error={errors.email}
              required
              className="bg-white/5 border-white/10 focus:bg-white/10"
            />

            <Input
              label="Secure Password"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors({...errors, password: ''});
              }}
              error={errors.password}
              required
              className="bg-white/5 border-white/10 focus:bg-white/10"
              icon={
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              }
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input className="h-4 w-4 rounded border-white/10 bg-white/5 text-primary focus:ring-primary/20" id="remember-me" type="checkbox"/>
                <label className="ml-2 block text-xs text-slate-500 dark:text-slate-400 font-medium" htmlFor="remember-me">
                  Keep me logged in
                </label>
              </div>
              <Link to="#" className="text-xs font-bold text-primary hover:text-accent transition-colors underline-offset-4 hover:underline">Forgot password?</Link>
            </div>

            <Button type="submit" className="w-full py-4 text-md shadow-lg shadow-primary/30">
              Sign In to Dashboard
            </Button>
          </form>


        </div>

        <div className="p-8 bg-slate-950/50 border-t border-white/5 text-center">
          <p className="text-xs text-slate-500 font-medium">
            New to EduCore?
            <Link to="/register" className="text-primary font-black hover:text-accent ml-2 transition-colors uppercase tracking-wider">Create Account</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
