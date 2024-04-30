import { useState } from "react";
import useLogin from "../hooks/auth/useLogin";
import { Toaster } from "react-hot-toast";

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginLoading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userEmail, password);
  };

  return (
    <div
      className="bg-cover h-[100vh] py-10 flex items-center justify-center "
      style={{ backgroundImage: `url('/bg.png')` }}
    >
      <div className="sm:w-[420px] w-[300px] mx-auto">
        <div className="w-full p-8 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-blue-600">
            Login
            <span className="text-violet-200"> VZ Admin Panel</span>
          </h1>

          <form
            className="mt-5 flex flex-col gap-3 text-white"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="label">
                <span className="text-base label-text text-white">
                  User Email
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter user email"
                className="w-full pl-4 text-[15px] bg-white rounded-[10px] text-gray-500 border-none outline-none h-10"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base text-white label-text">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full pl-4 text-[15px] bg-white rounded-[10px] text-gray-500 border-none outline-none h-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-white text-black w-full py-3 font-semibold rounded-[10px] hover:bg-gray-200 transition-all duration-300 mt-5"
                disabled={loginLoading}
              >
                {loginLoading ? (
                  <span className="loading loading-spinner "></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>{" "}
      <Toaster />
    </div>
  );
};
export default LoginPage;
