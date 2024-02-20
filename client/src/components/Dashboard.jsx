import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/authSlice";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { isLogin, user } = useSelector((state) => state.auth);

  console.log("user", user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
    message.success("user logout successfully");
    navigate("/login");
  };
  return (
    <>
      <div>
        <h1 className="text-6xl">This is dashboard</h1>
        <p>Name: {user.user.name}</p>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </>
  );
}

export default Dashboard;
