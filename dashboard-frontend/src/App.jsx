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
import HeroManagePage from "./pages/HeroManagePage";
import EventMangePage from "./pages/EventMangePage";
import ProductManagePage from "./pages/ProductManagePage";
import HomePage from "./pages/HomePage";

function App() {
  const { authUser } = useAuthContext();

  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={authUser ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
