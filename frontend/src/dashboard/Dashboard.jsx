import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import EventMangePage from "../pages/EventMangePage";
import HeroManagePage from "../pages/HeroManagePage";
import ProductManagePage from "../pages/ProductManagePage";
import Sidebar from "../components/shared/Sidebar";
import TopHeader from "../components/shared/TopHeader";

const Dashboard = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="grid grid-cols-12 gap-x-6 overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600">
      <div className="col-span-3 ">
        <Sidebar />
      </div>
      <div className="col-span-9">
        <TopHeader />
        <Routes>
          <Route path="/" element={authUser ? <HomePage /> : <LoginPage />} />
          <Route
            path="/hero"
            element={authUser ? <HeroManagePage /> : <LoginPage />}
          />
          <Route
            path="/event"
            element={authUser ? <EventMangePage /> : <LoginPage />}
          />
          <Route
            path="/product"
            element={authUser ? <ProductManagePage /> : <LoginPage />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
