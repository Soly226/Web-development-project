import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import SystemLogsPage from './pages/admin/SystemLogsPage';
import SystemSettingsPage from './pages/admin/SystemSettingsPage';
import EmailTemplatesPage from './pages/admin/EmailTemplatesPage';
import AdminReportsPage from './pages/admin/AdminReportsPage';

// Remaining Placeholders
const InstructorDashboard = () => <div className="p-8"><h1>Instructor Dashboard</h1><p>Work for Seliem.</p></div>;
const StudentDashboard = () => <div className="p-8"><h1>Student Dashboard</h1><p>Work for Magdy.</p></div>;
const Unauthorized = () => <div className="p-8"><h1>403 - Unauthorized</h1><p>You do not have access to this page.</p></div>;

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/logs" element={<SystemLogsPage />} />
          <Route path="/admin/settings" element={<SystemSettingsPage />} />
          <Route path="/admin/templates" element={<EmailTemplatesPage />} />
          <Route path="/admin/reports" element={<AdminReportsPage />} />
        </Route>

        {/* Instructor Routes */}
        <Route element={<ProtectedRoute allowedRoles={['instructor']} />}>
          <Route path="/instructor" element={<InstructorDashboard />} />
        </Route>

        {/* Student Routes */}
        <Route element={<ProtectedRoute allowedRoles={['student']} />}>
          <Route path="/student" element={<StudentDashboard />} />
        </Route>

        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
