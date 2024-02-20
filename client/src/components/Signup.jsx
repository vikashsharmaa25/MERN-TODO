import React, { useEffect, useState } from "react";
import loginImage from "../images/login.avif";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import axios from "axios";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogIn } = useSelector((state) => state.auth);
  console.log(isLogIn);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLogIn) {
      navigate("/dashboard");
    }
  }, [isLogIn]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`api/auth/register`, formData);
      if (data) {
        message.success("user register successfully");

        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      message.error("somthig error while login");
    }

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div
        className="min-h-screen  flex flex-col justify-center items-center"
        style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
              <div>
                <img src={loginImage} alt="" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4 text-center font-semibold text-gray-600">
                Register
              </h2>
              <p className="mb-4">
                Create your account. It’s free and only take a minute
              </p>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="border border-gray-400 py-1 px-2"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="w-full bg-purple-500 py-3 text-center text-white"
                  >
                    Register Now
                  </button>
                </div>
                <div>
                  If you have already an account ?{" "}
                  <NavLink to="/login" className="text-purple-600">
                    login
                  </NavLink>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
