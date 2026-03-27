import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [regEmail, setRegEmail] = useState("");
  const [regKey, setRegKey] = useState("");
  const move = useNavigate();

  const onRegister = (event) => {
    event.preventDefault();
    console.log("Registering:", regEmail);
    console.log("Key set:", regKey);
    move("/todo");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100">
      <div className="p-12 bg-white rounded-2xl shadow-xl w-96">
        <h1 className="mb-8 text-2xl font-black text-center uppercase tracking-wider">Join Us</h1>

        <form onSubmit={onRegister}>
          <input
            type="email"
            required
            placeholder="Email Address"
            value={regEmail}
            onChange={(f) => setRegEmail(f.target.value)}
            className="w-full p-3 mb-3 border-2 border-zinc-200 rounded-xl focus:border-zinc-500 outline-none"
          />
          <input
            type="password"
            required
            placeholder="Choose Password"
            value={regKey}
            onChange={(f) => setRegKey(f.target.value)}
            className="w-full p-3 mb-5 border-2 border-zinc-200 rounded-xl focus:border-zinc-500 outline-none"
          />
          <button
            type="submit"
            className="w-full p-3 text-white bg-zinc-800 rounded-xl hover:opacity-90 transition-all"
          >
            Create My Profile
          </button>
        </form>

        <button
          onClick={() => move("/todo")}
          className="w-full mt-5 p-3 text-sm border-2 border-dashed border-zinc-300 rounded-xl hover:bg-zinc-50"
        >
          Skip to Application
        </button>

        <p className="mt-8 text-center text-xs text-zinc-400">
          Member already?{" "}
          <Link to="/" className="text-zinc-900 font-semibold underline underline-offset-4">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;