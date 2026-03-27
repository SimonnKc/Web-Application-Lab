import React, { useState, useEffect } from 'react';

export default function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    const localData = localStorage.getItem('kec_lab4_tasks');
    return localData ? JSON.parse(localData) : [];
  });
  const [entry, setEntry] = useState('');

  useEffect(() => {
    localStorage.setItem('kec_lab4_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const pushTask = () => {
    if (!entry.trim()) return;
    const newTask = { 
      uuid: crypto.randomUUID(), 
      content: entry, 
      isDone: false 
    };
    setTasks([...tasks, newTask]);
    setEntry('');
  };

  const checkTask = (uuid) => {
    setTasks(tasks.map(item => 
      item.uuid === uuid ? { ...item, isDone: !item.isDone } : item
    ));
  };

  const removeTask = (uuid) => {
    setTasks(tasks.filter(item => item.uuid !== uuid));
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-black text-slate-800 mb-6 text-center">Lab 4: Task Manager</h1>
        
        <div className="flex gap-3 mb-6">
          <input 
            className="flex-grow border-2 border-slate-200 p-3 rounded-xl focus:border-indigo-500 outline-none transition-all"
            value={entry} 
            onChange={(e) => setEntry(e.target.value)} 
            placeholder="What's the plan?"
          />
          <button 
            onClick={pushTask} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {tasks.map(item => (
            <li key={item.uuid} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100 group">
              <span 
                onClick={() => checkTask(item.uuid)}
                className={`flex-grow cursor-pointer font-medium ${item.isDone ? "line-through text-slate-400" : "text-slate-700"}`}
              >
                {item.content}
              </span>
              <button 
                onClick={() => removeTask(item.uuid)} 
                className="text-slate-300 hover:text-rose-500 font-bold px-2 transition-colors"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>

        {tasks.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{tasks.length} Total Items</p>
            <button 
              onClick={() => setTasks([])} 
              className="text-xs text-rose-500 font-bold hover:underline"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}