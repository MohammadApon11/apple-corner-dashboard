import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./dashboard/Dashboard";

function App() {
  const { authUser } = useAuthContext();

  return (
    <Router>
      <Routes>
        <Route path="*" element={authUser ? <Dashboard /> : <LoginPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
