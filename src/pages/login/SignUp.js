import { React, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate, Link } from "react-router-dom";
import LoginImg from "../../images/login-img.png";
import "./login.css";
//import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { Register } from "../../services/auth/auth";

export default SignUp = () => {
  const [name, setNamel] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const register = async () => {
    try {
      const res = await Register({
        name: name,
        // username: "azhan",
        // cnic: "4229167519861",
        // phone: "021379421088",
        email: email,
        password: password,
      });
    } catch (e) {
      console.log(e);
    }
  };
  // const [captchaValue, setCaptchaValue] = useState(null);

  // const history = useNavigate();

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   cpassword: ''
  // });

  // const submit = async (e) => {
  //   //to not run twice
  //   e.preventDefault();
  //  try {

  //     if (formData.password != formData.cpassword) {
  //       toast.error("Password does not match");
  //     }
  //     else if (formData.password.length < 6) {
  //       toast.error("Password too short")

  //     }
  //     else if (!captchaValue) {
  //       toast.error("Fill the Captcha");
  //     }
  //     else {

  //       await axios.post("http://localhost:3000/signup", {
  //         formData
  //       })
  //         .then(res => {
  //           if (res.data == "exist") {
  //             toast.error("Email is already registered");

  //           }
  //           else if (res.data == "notexist") {

  //             Cookies.set("email", formData.email, { expires: 7 })
  //             // if (Cookies.get("allProducts") != undefined || Cookies.get("allProducts") != null) {
  //             //   Cookies.remove("allProducts")
  //             // }

  //             toast.success("Successfully Registered", {
  //               autoClose: 1000
  //             });
  //             setTimeout(() => {
  //               history("/login")
  //             }, 2000)

  //           }
  //         })
  //         .catch(e => {
  //           toast.error("Somethig went wrong!");
  //         })
  //       }

  //   }
  //   catch (e) {
  //       toast.error("Somethig went wrong!");

  //   }

  // }

  return (
    <>
      <Navbar />
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
          <form method="/login" action="POST">
            <table style={{ width: "250px" }}>
              <td>
                <label>Username</label>
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
                <label>CNIC</label>
                <br />
                <input className="w-100" />
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
                    onClick={register}
                    className="btn text-white login-btn"
                  >
                    Register
                  </button>
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
      <Footer />
    </>
  );
};
