import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import LandingPage from './pages/LandingPage';
import MessagesInbox from './pages/MessagesInbox';
import NotificationsView from './pages/NotificationsView';
import AdminDashboard from './pages/admin/AdminDashboard';
import SystemLogsPage from './pages/admin/SystemLogsPage';
import SystemSettingsPage from './pages/admin/SystemSettingsPage';
import EmailTemplatesPage from './pages/admin/EmailTemplatesPage';
import AdminReportsPage from './pages/admin/AdminReportsPage';

// Student Pages (Magdy)
import StudentDashboard from './pages/StudentDashboard';
import MyCoursesGridView from './pages/MyCoursesGridView';
import MyGrades from './pages/MyGrades';
import AcademicCalendarView from './pages/AcademicCalendarView';
import AssignmentDetails from './pages/AssignmentDetails';
import StudentProfileView from './pages/StudentProfileView';
import InsideCourseAssignments from './pages/course/InsideCourseAssignments';
import InsideCourseGradesTab from './pages/course/InsideCourseGradesTab';

// Remaining Placeholders
const InstructorDashboard = () => <div className="p-8"><h1>Instructor Dashboard</h1><p>Work for Seliem.</p></div>;
const Unauthorized = () => <div className="p-8"><h1>403 - Unauthorized</h1><p>You do not have access to this page.</p></div>;

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Protected Routes - All Authenticated Users */}
        <Route element={<ProtectedRoute allowedRoles={['admin', 'instructor', 'student']} />}>
          <Route path="/messages" element={<MessagesInbox />} />
          <Route path="/notifications" element={<NotificationsView />} />
        </Route>
        
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
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/my-courses" element={<MyCoursesGridView />} />
          <Route path="/grades" element={<MyGrades />} />
          <Route path="/calendar" element={<AcademicCalendarView />} />
          <Route path="/assignment/:id" element={<AssignmentDetails />} />
          <Route path="/profile" element={<StudentProfileView />} />
          <Route path="/course/:id/assignments" element={<InsideCourseAssignments />} />
          <Route path="/course/:id/grades" element={<InsideCourseGradesTab />} />
        </Route>

        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
