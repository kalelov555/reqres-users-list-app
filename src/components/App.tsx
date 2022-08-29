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
import { getProfileAction } from "../store/user/actions";
import ProfilePage from "./ProfilePage/ProfilePage";

function App() {
  const token = Cookies.get("token");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, status } = useAppSelector((state) => state.user);

  // side effect to check whether user is logged in and get current user data
  useEffect(() => {
    if (token) {
      dispatch(getProfileAction());
    } else if (!token && window.location.pathname !== "/register") {
      navigate("/login");
    }
  }, [dispatch, navigate, token]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home user={user} status={status} />} />
        <Route path='account/me' element={<ProfilePage user={user} />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='*' element={<div>Nothing here</div>} />
      </Routes>
    </div>
  );
}

export default App;
