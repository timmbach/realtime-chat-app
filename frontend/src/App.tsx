// import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import Login from "./pages/login/Login";
// import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "./context/AuthContext";

function App() {
  // const [count, setCount] = useState(0)

  const { user } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <ToastContainer />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
    </div>
  );
}

export default App;
