import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <Router>
      <div className="app-entry-point">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;