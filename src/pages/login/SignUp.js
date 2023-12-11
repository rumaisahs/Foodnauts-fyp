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
  const [name, setNamel] = useState("");
  const [username, setUserNamel] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const register = async (data) => {
    data.preventDefault()
    try {
      const res = await Register({
        name: name,
        username: username,
        email: email,
        password: password,
      });
      navigate("/ownprofile")

      // toast.success(res?.data?.message)
    } catch (e) {
      // toast.error(e);
    }
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
          <form >
            <table style={{ width: "250px" }}>
              <td>
                <label>Name</label>
                <br />
                <input
                  onChange={(e) => setNamel(e.target.value)}
                  required
                  type="name"
                  id="name"
                  name="name"
                  className="w-100"
                />
                <br />
                <label>Username</label>
                <br />
                <input onChange={(e) => setUserNamel(e.target.value)}
                  required
                  type="text"
                  id="username"
                  name="name" className="w-100" />
                <br />
                <label>Email</label>
                <br />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="w-100"
                />
                <br />
                <label>Password</label>
                <br />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  id="password"
                  name="password"
                  className="w-100"
                />
                <br />
                <label>Confirm Password</label>
                <br />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  className="w-100"
                />
                <br />

                <label>Phone No.</label>
                <br />
                <input className="w-100" />
                <br />
                {/* <ReCAPTCHA
              sitekey='6LcgrssoAAAAAI-rrNWf5ks5qFa327htRJydycay '
             
            /> */}
                <p className="pt-4 text-center">
                  <button
                    type="submit" onClick={register}
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

export default SignUp