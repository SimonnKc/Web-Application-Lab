import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userMail, setUserMail] = useState("");
  const [userPass, setUserPass] = useState("");
  const redirect = useNavigate();

  const executeAuth = (e) => {
    e.preventDefault();
    console.log("Auth Email:", userMail);
    console.log("Auth Secret:", userPass);
    redirect("/todo");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="w-full max-w-sm p-10 bg-white rounded-lg border border-slate-200 shadow-sm">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">Welcome Back</h2>

        <form onSubmit={executeAuth}>
          <input
            type="email"
            placeholder="name@example.com"
            value={userMail}
            onChange={(val) => setUserMail(val.target.value)}
            className="w-full px-4 py-3 mb-4 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={userPass}
            onChange={(val) => setUserPass(val.target.value)}
            className="w-full px-4 py-3 mb-6 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white bg-slate-900 rounded-md hover:bg-black transition-colors"
          >
            Sign In
          </button>
        </form>

        <button
          onClick={() => redirect("/todo")}
          className="w-full py-3 mt-4 text-sm font-medium border border-slate-200 rounded-md hover:bg-slate-50"
        >
          View Todo Dashboard
        </button>

        <p className="mt-6 text-center text-sm text-slate-500">
          New here?{" "}
          <Link to="/signup" className="font-bold text-slate-900 hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;