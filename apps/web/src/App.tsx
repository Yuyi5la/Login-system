import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginpage";
import SignupPage from "./components/signup"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} /> 
    </Routes>
  );
}

export default App;
