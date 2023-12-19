import { React, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate, Link } from "react-router-dom";
import LoginImg from "../../images/login-img.png";
import Google from '../../images/googlelogo.png'

import "./login.css";
//import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { Register } from "../../services/auth/auth";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    cpassword: "",
    phone: "",
  });

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "name":
        return value.trim() ? "" : "Name is required";

      case "username":
        return value.trim() ? "" : "Username is required";

      case "email":
        return /\S+@\S+\.\S+/.test(value) ? "" : "Email is not valid";

      case "password":
        return value.length >= 6 ? "" : "Password must be at least 6 characters long";

      case "cpassword":
        return value === password ? "" : "Passwords do not match";

      case "phone":
        return value.trim() ? "" : "Phone No. is required";

      default:
        return "";
    }
  };

  const handleInputChange = (fieldName, value) => {
    const newErrors = { ...errors };
    newErrors[fieldName] = validateField(fieldName, value);
    setErrors(newErrors);
  };

  const register = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await Register({
          name: name,
          username: username,
          email: email,
          password: password,
        });
        navigate("/ownprofile");
        toast.success(res?.data?.message);
      } catch (e) {
        toast.error(e);
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    for (const fieldName in errors) {
      const fieldError = validateField(fieldName, eval(fieldName));
      if (fieldError) {
        valid = false;
      }
    }
    return valid;
  };

  return (
    <>
      <body className="container-fluid justify-content-center align-items-center d-flex overflow-hidden p-5">
        <div className="d-lg-block d-none">
          <img
            src={LoginImg}
            className=" rounded-5 shadow"
            style={{ height: "580px" }}
          />
        </div>
        <div className="border-1 border-orange m-5 rounded-4 p-4 p-sm-5">
          <h1 className="text-center pb-3">Register</h1>
          <form>
            <table style={{ width: "250px" }}>
              <td>
                <label>Name</label>
                <br />
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                    handleInputChange("name", e.target.value);
                  }}
                  required
                  type="name"
                  id="name"
                  name="name"
                  className="w-100"
                />
                <p className="text-danger">{errors.name}</p>
                <br />
                <label>Username</label>
                <br />
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                    handleInputChange("username", e.target.value);
                  }}
                  required
                  type="text"
                  id="username"
                  name="username"
                  className="w-100"
                />
                <p className="text-danger">{errors.username}</p>
                <br />
                <label>Email</label>
                <br />
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                    handleInputChange("email", e.target.value);
                  }}
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="w-100"
                />
                <p className="text-danger">{errors.email}</p>
                <br />
                <label>Password</label>
                <br />
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handleInputChange("password", e.target.value);
                  }}
                  required
                  type="password"
                  id="password"
                  name="password"
                  className="w-100"
                />
                <p className="text-danger">{errors.password}</p>
                <br />
                <label>Confirm Password</label>
                <br />
                <input
                  onChange={(e) => {
                    setCPassword(e.target.value);
                    handleInputChange("cpassword", e.target.value);
                  }}
                  required
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  className="w-100"
                />
                <p className="text-danger">{errors.cpassword}</p>
                <br />

                <label>Phone No.</label>
                <br />
                <input
                  onChange={(e) => {
                    setPhone(e.target.value);
                    handleInputChange("phone", e.target.value);
                  }}
                  className="w-100"
                />
                <p className="text-danger">{errors.phone}</p>
                <br />
                <p className="pt-4 text-center">
                  <button
                    type="submit"
                    onClick={register}
                    className="btn text-white login-btn"
                  >
                    Register
                  </button>
                </p>
                <div className='d-flex align-items-center pb-3'><div className='bg-dark w-50 ' style={{ height: '1px ' }}></div>
                  <div className='px-2 '>or </div> <div className=' bg-dark w-50 ' style={{ height: '1px ' }}></div></div>
                <p className='pt-1 text-center'>
                  <Link to="/" className='text-decoration-none'><button className='btn rounded-5  w-100 border-dark'

                  ><img src={Google} className=' pe-2 ' style={{ height: "22px" }} />Signup with Google </button></Link>
                </p>
                <Link to="/login" className="text-decoration-none">
                  <p className="text-center register">
                    Already have an account? Login
                  </p>
                </Link>
              </td>
            </table>
          </form>
        </div>
      </body>
      <ToastContainer />

      <Footer />
    </>
  );
};

export default SignUp;
