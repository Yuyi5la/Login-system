import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginpage";;

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
