import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const [taskList, setTaskList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const nav = useNavigate();

  const handlePushTask = () => {
    if (currentTask.trim() === "") return;
    setTaskList([...taskList, currentTask]);
    setCurrentTask("");
  };

  const handleRemoveTask = (targetIndex) => {
    const updated = taskList.filter((_, idx) => idx !== targetIndex);
    setTaskList(updated);
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded-3xl shadow-lg border border-blue-100">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-blue-900">Task Manager</h2>
          <button 
            onClick={() => nav("/")}
            className="text-xs font-semibold px-3 py-1 bg-white border border-blue-200 rounded-full hover:bg-blue-50"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-3 mb-8">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={currentTask}
            onChange={(txt) => setCurrentTask(txt.target.value)}
            className="flex-grow p-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-400 outline-none text-sm"
          />
          <button
            onClick={handlePushTask}
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 active:scale-95 transition-all"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {taskList.map((item, pos) => (
            <div
              key={pos}
              className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-2xl group"
            >
              <span className="text-slate-700 font-medium text-sm">{item}</span>
              <button
                onClick={() => handleRemoveTask(pos)}
                className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 text-xs font-bold transition-opacity"
              >
                REMOVE
              </button>
            </div>
          ))}
          {taskList.length === 0 && (
            <p className="text-center text-slate-400 text-sm py-10">No tasks remaining.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;