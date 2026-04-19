import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { twMerge } from 'tailwind-merge';

/* ─────────────────────────────────────────────
   Mock Data
───────────────────────────────────────────── */
const mockConversations = [
  {
    id: 1,
    name: 'Prof. Michael Chen',
    role: 'Instructor',
    avatar: 'M',
    color: 'from-emerald-500 to-cyan-500',
    lastMessage: 'Your assignment submission looks great! A few minor...',
    time: '2m ago',
    unread: 3,
    online: true,
  },
  {
    id: 2,
    name: 'Admin Support',
    role: 'Administrator',
    avatar: 'A',
    color: 'from-primary to-accent',
    lastMessage: 'Your enrollment request has been approved.',
    time: '14m ago',
    unread: 1,
    online: true,
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Student',
    avatar: 'S',
    color: 'from-rose-500 to-pink-500',
    lastMessage: 'Can you share your notes from today\'s lecture?',
    time: '1h ago',
    unread: 0,
    online: false,
  },
  {
    id: 4,
    name: 'Study Group — React 101',
    role: 'Group · 8 members',
    avatar: 'G',
    color: 'from-violet-500 to-purple-500',
    lastMessage: 'Amir: I pushed the updated component to GitHub.',
    time: '3h ago',
    unread: 12,
    online: false,
  },
  {
    id: 5,
    name: 'Dr. Layla Hassan',
    role: 'Instructor',
    avatar: 'L',
    color: 'from-orange-500 to-amber-500',
    lastMessage: 'Office hours moved to Thursday 3 PM.',
    time: 'Yesterday',
    unread: 0,
    online: false,
  },
  {
    id: 6,
    name: 'Yassin Khalil',
    role: 'Student',
    avatar: 'Y',
    color: 'from-teal-500 to-emerald-500',
    lastMessage: 'Did you see the new assignment deadline?',
    time: 'Yesterday',
    unread: 0,
    online: true,
  },
];

const mockMessages = {
  1: [
    { id: 1, from: 'them', text: 'Hi! I just reviewed your assignment #3.', time: '10:24 AM' },
    { id: 2, from: 'them', text: 'Your assignment submission looks great! A few minor adjustments needed on the second section.', time: '10:25 AM' },
    { id: 3, from: 'me', text: 'Thank you so much Professor! I\'ll fix those right away.', time: '10:30 AM' },
    { id: 4, from: 'me', text: 'Should I resubmit through the portal or email it to you?', time: '10:30 AM' },
    { id: 5, from: 'them', text: 'Just resubmit via the portal. The deadline has been extended to Friday.', time: '10:35 AM' },
    { id: 6, from: 'them', text: 'Also, excellent work on the data visualisation part — really stood out!', time: '10:35 AM' },
  ],
  2: [
    { id: 1, from: 'them', text: 'Hello! This is a message from EduCore Admin Support.', time: '9:00 AM' },
    { id: 2, from: 'them', text: 'Your enrollment request has been approved. Welcome to Advanced React 2024!', time: '9:01 AM' },
    { id: 3, from: 'me', text: 'That\'s great news, thank you!', time: '9:15 AM' },
  ],
  3: [
    { id: 1, from: 'them', text: 'Hey! Are you coming to the study session tonight?', time: 'Yesterday' },
    { id: 2, from: 'me', text: 'Yes, definitely! Where are we meeting?', time: 'Yesterday' },
    { id: 3, from: 'them', text: 'Library room B4 at 7 PM.', time: 'Yesterday' },
    { id: 4, from: 'them', text: 'Can you share your notes from today\'s lecture?', time: '1h ago' },
  ],
  4: [
    { id: 1, from: 'them', text: 'Amir: I pushed the updated component to GitHub.', time: '3h ago' },
    { id: 2, from: 'them', text: 'Nour: Nice, I\'ll review it and leave comments.', time: '3h ago' },
    { id: 3, from: 'me', text: 'Great work everyone! Let\'s merge after the review.', time: '2h ago' },
  ],
  5: [
    { id: 1, from: 'them', text: 'Office hours moved to Thursday 3 PM. Please update your calendars.', time: 'Yesterday' },
    { id: 2, from: 'me', text: 'Noted, thank you Dr. Hassan!', time: 'Yesterday' },
  ],
  6: [
    { id: 1, from: 'them', text: 'Did you see the new assignment deadline? It\'s been pushed to next week!', time: 'Yesterday' },
    { id: 2, from: 'me', text: 'Yes! Such a relief 😅', time: 'Yesterday' },
    { id: 3, from: 'them', text: 'Haha indeed. Want to work on it together this weekend?', time: 'Yesterday' },
  ],
};

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */
const ConversationItem = ({ conv, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={twMerge(
      'w-full flex items-center gap-3 p-3.5 rounded-2xl transition-all text-left group',
      isSelected
        ? 'bg-primary/15 border border-primary/30'
        : 'hover:bg-white/10 dark:hover:bg-white/5 border border-transparent'
    )}
  >
    {/* Avatar */}
    <div className="relative flex-shrink-0">
      <div className={twMerge('w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-black text-base shadow-md', conv.color)}>
        {conv.avatar}
      </div>
      {conv.online && (
        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900" />
      )}
    </div>
    {/* Content */}
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-0.5">
        <p className={twMerge('text-sm font-bold truncate', isSelected ? 'text-primary' : 'text-slate-900 dark:text-white')}>
          {conv.name}
        </p>
        <span className="text-[10px] text-slate-400 font-medium flex-shrink-0 ml-2">{conv.time}</span>
      </div>
      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{conv.lastMessage}</p>
    </div>
    {/* Unread Badge */}
    {conv.unread > 0 && (
      <span className="flex-shrink-0 min-w-[20px] h-5 px-1.5 bg-primary rounded-full flex items-center justify-center text-white text-[10px] font-black">
        {conv.unread > 9 ? '9+' : conv.unread}
      </span>
    )}
  </button>
);

const MessageBubble = ({ msg, isMe }) => (
  <div className={twMerge('flex', isMe ? 'justify-end' : 'justify-start')}>
    <div className={twMerge(
      'max-w-[75%] px-4 py-2.5 rounded-2xl text-sm shadow-sm',
      isMe
        ? 'bg-gradient-to-br from-primary to-accent text-white rounded-br-sm'
        : 'glass text-slate-900 dark:text-slate-100 rounded-bl-sm'
    )}>
      <p className="leading-relaxed">{msg.text}</p>
      <p className={twMerge('text-[10px] mt-1.5 font-medium', isMe ? 'text-white/60 text-right' : 'text-slate-400')}>{msg.time}</p>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
const MessagesInboxPage = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [conversations, setConversations] = useState(mockConversations);
  const [messages, setMessages] = useState(mockMessages);

  const filtered = conversations.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selected = conversations.find((c) => c.id === selectedId);
  const thread = messages[selectedId] || [];

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const newMsg = { id: Date.now(), from: 'me', text: newMessage.trim(), time: 'Just now' };
    setMessages((prev) => ({ ...prev, [selectedId]: [...(prev[selectedId] || []), newMsg] }));
    setConversations((prev) =>
      prev.map((c) => (c.id === selectedId ? { ...c, lastMessage: newMessage.trim(), time: 'Just now' } : c))
    );
    setNewMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSelect = (id) => {
    setSelectedId(id);
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c))
    );
  };

  return (
    <MainLayout title="Messages">
      <div className="p-4 max-w-6xl mx-auto h-[calc(100vh-140px)] flex gap-4">

        {/* ── LEFT: Conversation List ── */}
        <div className="w-80 flex-shrink-0 flex flex-col gap-3">
          {/* Header */}
          <div className="flex items-center justify-between px-1">
            <h2 className="text-slate-900 dark:text-white font-extrabold text-lg tracking-tight">Inbox</h2>
            <button className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-primary to-accent rounded-xl text-white shadow-md hover:brightness-110 transition-all active:scale-95">
              <span className="material-symbols-outlined text-xl">edit_square</span>
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-xl pointer-events-none">search</span>
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 glass rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 border border-white/20 dark:border-white/10 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
            {filtered.length > 0 ? (
              filtered.map((conv) => (
                <ConversationItem
                  key={conv.id}
                  conv={conv}
                  isSelected={conv.id === selectedId}
                  onClick={() => handleSelect(conv.id)}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <span className="material-symbols-outlined text-4xl text-slate-300 dark:text-slate-600 mb-3">search_off</span>
                <p className="text-sm text-slate-500">No conversations found</p>
              </div>
            )}
          </div>
        </div>

        {/* ── RIGHT: Message Thread ── */}
        <div className="flex-1 glass rounded-2xl flex flex-col overflow-hidden border border-white/20 dark:border-white/10">
          {selected ? (
            <>
              {/* Thread Header */}
              <div className="flex items-center gap-3 p-4 border-b border-white/10 dark:border-white/5">
                <div className="relative">
                  <div className={twMerge('w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-black shadow-md', selected.color)}>
                    {selected.avatar}
                  </div>
                  {selected.online && (
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-slate-900 dark:text-white font-bold text-sm">{selected.name}</p>
                  <p className="text-[11px] text-slate-500">
                    {selected.online ? (
                      <span className="text-emerald-500 font-semibold">● Online</span>
                    ) : (
                      selected.role
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {[
                    { icon: 'phone', label: 'Call' },
                    { icon: 'videocam', label: 'Video' },
                    { icon: 'more_vert', label: 'More' },
                  ].map((action) => (
                    <button
                      key={action.icon}
                      title={action.label}
                      className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-primary/10 transition-all"
                    >
                      <span className="material-symbols-outlined text-xl">{action.icon}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
                {thread.map((msg) => (
                  <MessageBubble key={msg.id} msg={msg} isMe={msg.from === 'me'} />
                ))}
              </div>

              {/* Compose Bar */}
              <div className="p-4 border-t border-white/10 dark:border-white/5">
                <div className="flex items-end gap-3">
                  <button className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl text-slate-400 hover:text-primary hover:bg-primary/10 transition-all">
                    <span className="material-symbols-outlined text-xl">attach_file</span>
                  </button>
                  <div className="flex-1 glass rounded-xl border border-white/20 dark:border-white/10 px-4 py-2.5 focus-within:border-primary/40 transition-all">
                    <textarea
                      rows={1}
                      className="w-full bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none resize-none leading-relaxed"
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                  <button
                    onClick={handleSend}
                    disabled={!newMessage.trim()}
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-primary to-accent rounded-xl text-white shadow-md hover:brightness-110 transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
                  >
                    <span className="material-symbols-outlined text-xl">send</span>
                  </button>
                </div>
                <p className="text-[10px] text-slate-400 mt-2 text-center">Press Enter to send · Shift+Enter for new line</p>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center p-8">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-4xl">chat_bubble</span>
              </div>
              <div>
                <p className="text-slate-900 dark:text-white font-bold text-lg">Select a conversation</p>
                <p className="text-slate-500 text-sm mt-1">Choose from your inbox to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default MessagesInboxPage;
