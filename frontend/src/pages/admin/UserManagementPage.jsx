import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import Card from '../../components/ui/Card';
import { twMerge } from 'tailwind-merge';

const initialUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@educore.edu', role: 'Student', status: 'Active', joined: '2024-01-15' },
  { id: 2, name: 'Prof. Michael Chen', email: 'm.chen@educore.edu', role: 'Instructor', status: 'Active', joined: '2023-08-22' },
  { id: 3, name: 'Bob Smith', email: 'bob@educore.edu', role: 'Student', status: 'Inactive', joined: '2024-02-10' },
];

const UserManagementPage = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = {
      id: Date.now(),
      name: formData.get('name'),
      email: formData.get('email'),
      role: formData.get('role'),
      status: formData.get('status'),
      joined: new Date().toISOString().split('T')[0],
    };
    setUsers([...users, newUser]);
    setIsModalOpen(false);
    setEditingUser(null);
  };
  
  const openEditModal = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const filteredUsers = users.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'All' || u.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <AdminLayout title="User Management">
      <div className="p-5 flex flex-col gap-6 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">User Management</h2>
            <p className="text-slate-500 text-sm mt-1">Manage platform users, roles, and account statuses.</p>
          </div>
          <button 
            onClick={() => { setEditingUser(null); setIsModalOpen(true); }}
            className="bg-primary hover:bg-accent text-white font-bold py-2.5 px-5 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center gap-2 text-sm"
          >
             <span className="material-symbols-outlined text-sm">person_add</span>
             Add New User
          </button>
        </div>

        {/* Filters */}
        <Card className="p-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
              type="text" 
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <select 
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="w-full md:w-48 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
          >
            <option value="All">All Roles</option>
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
            <option value="Admin">Admin</option>
          </select>
        </Card>

        {/* User Table */}
        <div className="glass rounded-2xl border border-white/20 dark:border-white/10 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-white/10">
                  <th className="py-4 px-5 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
                  <th className="py-4 px-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                  <th className="py-4 px-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="py-4 px-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Joined</th>
                  <th className="py-4 px-5 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {filteredUsers.map(user => (
                  <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-3">
                         <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs">
                           {user.name.charAt(0)}
                         </div>
                         <div>
                            <p className="font-bold text-sm text-slate-900 dark:text-white">{user.name}</p>
                            <p className="text-[11px] text-slate-500">{user.email}</p>
                         </div>
                      </div>
                    </td>
                    <td className="py-3 px-5">
                      <span className={twMerge(
                        "inline-block px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider",
                        user.role === 'Admin' ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" :
                        user.role === 'Instructor' ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      )}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-1.5">
                        <div className={twMerge("w-2 h-2 rounded-full", user.status === 'Active' ? "bg-emerald-500" : "bg-rose-500")}></div>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{user.status}</span>
                      </div>
                    </td>
                    <td className="py-3 px-5 text-xs text-slate-500">{user.joined}</td>
                    <td className="py-3 px-5 text-right">
                       <div className="flex items-center justify-end gap-2">
                         <button 
                           onClick={() => openEditModal(user)}
                           className="p-1.5 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                         >
                           <span className="material-symbols-outlined text-[18px]">edit</span>
                         </button>
                         <button 
                           onClick={() => handleDelete(user.id)}
                           className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors rounded-lg hover:bg-rose-500/10"
                         >
                           <span className="material-symbols-outlined text-[18px]">delete</span>
                         </button>
                       </div>
                    </td>
                  </tr>
                ))}
                {filteredUsers.length === 0 && (
                  <tr>
                     <td colSpan="5" className="py-8 text-center text-slate-500 text-sm">No users found matching your criteria.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 overflow-hidden">
            <div className="flex justify-between items-center p-5 border-b border-slate-100 dark:border-white/10">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{editingUser ? 'Edit User' : 'Add New User'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              if (editingUser) {
                setUsers(users.map(u => u.id === editingUser.id ? { ...u, name: formData.get('name'), email: formData.get('email'), role: formData.get('role'), status: formData.get('status') } : u));
                setIsModalOpen(false);
                setEditingUser(null);
              } else {
                handleAddUser(e);
              }
            }} className="p-5 flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Full Name</label>
                <input name="name" defaultValue={editingUser?.name || ''} required type="text" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
                <input name="email" defaultValue={editingUser?.email || ''} required type="email" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 outline-none focus:border-primary" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Role</label>
                  <select name="role" defaultValue={editingUser?.role || 'Student'} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 outline-none focus:border-primary text-slate-900 dark:text-white">
                    <option className="bg-white dark:bg-slate-900" value="Student">Student</option>
                    <option className="bg-white dark:bg-slate-900" value="Instructor">Instructor</option>
                    <option className="bg-white dark:bg-slate-900" value="Admin">Admin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Status</label>
                  <select name="status" defaultValue={editingUser?.status || 'Active'} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 outline-none focus:border-primary text-slate-900 dark:text-white">
                    <option className="bg-white dark:bg-slate-900" value="Active">Active</option>
                    <option className="bg-white dark:bg-slate-900" value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Cancel</button>
                <button type="submit" className="bg-primary hover:bg-accent text-white font-bold py-2.5 px-6 rounded-xl shadow-lg shadow-primary/30 active:scale-95 transition-all">{editingUser ? 'Save Changes' : 'Create User'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default UserManagementPage;
