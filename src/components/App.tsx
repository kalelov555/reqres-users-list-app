//logic level
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Home from "./HomePage/Home";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  getProfileAction,
  logoutAction,
  registerAction,
} from "../store/user/actions";
import ProfilePage from "./ProfilePage/ProfilePage";
import { notifyError } from "../utils/notifications";

function App() {
  const token = Cookies.get("token");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, status } = useAppSelector((state) => state.user);

  const handleRegister = (
    email: FormDataEntryValue | null,
    password: FormDataEntryValue | null
  ) => {
    dispatch(registerAction({ email, password, navigate }));
  };

  const handleLogout = () => {
    dispatch(logoutAction({ navigate }));
  };

  // side effect to check whether user is logged in and get current user data
  useEffect(() => {
    if (token) {
      dispatch(getProfileAction());
    } else if (!token && window.location.pathname !== "/register") {
      notifyError("You have to login first!");
      navigate("/login");
    }
  }, [dispatch, navigate, token]);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <Home user={user} status={status} handleLogout={handleLogout} />
          }
        />
        <Route
          path='account/me'
          element={<ProfilePage user={user} handleLogout={handleLogout} />}
        />
        <Route path='login' element={<LoginPage />} />
        <Route
          path='register'
          element={<RegisterPage handleRegister={handleRegister} />}
        />
        <Route path='*' element={<div>Nothing here</div>} />
      </Routes>
    </div>
  );
}

export default App;
