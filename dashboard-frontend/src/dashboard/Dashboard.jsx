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
    <div className="relative grid grid-cols-12 gap-x-6 overflow-x-hidden bg-gradient-to-r from-violet-600 to-indigo-600">
      <div className="col-span-3">
        <div className="fixed bg-gray-950 overflow-x-hidden h-[100vh] border-r">
          <Sidebar />
        </div>
      </div>
      <div className="col-span-9 px-8  bg-gray-950 overflow-x-hidden overflow-y-auto h-[100vh]">
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
      <div className="bg-white absolute"></div>
    </div>
  );
};

export default Dashboard;
