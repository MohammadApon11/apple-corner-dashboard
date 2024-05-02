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

        {/* <Route
          path="/"
          element={authUser ? <Dashboard /> : <Navigate to="/login" />}
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/hero" element={<HeroManagePage />} />
          <Route path="/event" element={<EventMangePage />} />
          <Route path="/product" element={<ProductManagePage />} />
        </Route>
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <LoginPage />}
        /> */}
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
