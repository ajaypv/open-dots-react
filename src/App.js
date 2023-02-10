import "./styles.css";
import { Login } from "./Components/Login";
import { SignUp } from "./Components/SignUp";
import { UserContext } from "./Context/UserContext";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import SplashComponent from "./Components/SplashComponent";

export default function App() {
  return (
    <div className="App">
      <UserContext>
        <Routes>
          <Route path="/intro" element={<SplashComponent />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContext>
    </div>
  );
}
