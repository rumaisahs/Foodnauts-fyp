import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import LoginImg from '../../images/login-img.png'
import Google from '../../images/googlelogo.png'
import Facebook from '../../images/facebook.png'
import axios from 'axios'

import "./login.css"
import { Signin, SocialLogin, ForgotPassword } from '../../services/auth/auth'
import { GetAuthUserLocalStorage, SetAuthUserLocalStorage, SetTokenLocalStorage } from '../../services/localStorage/localStorage'

export const Login = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const [showEmailForm, setShowEmailForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const login = async () => {
    try {
      const res = await Signin(
        {
          email: email,
          password: password
        }
      )

      SetAuthUserLocalStorage(res?.data?.data?.user)
      SetTokenLocalStorage(res?.data?.data?.token)
      navigate("/ownprofile")
      window.location.reload()
    }
    catch (e) {
      if (email != setEmail || password != setPassword) {
        setError('Invalid credentials');
      }
      else {
        setError('An error occurred. Please try again later.');
      }
      console.error(e);
    }
  }
  const Submit = async (data) => {
    data["username"] = "shaheer"
    data["email"] = "shaheer@gmail.com"
    data["is_social_login"] = true
    data["platform_type"] = "google"
    data["client_token"] = "AM9HkKly3t2gcdE-qWEcLrsC1G-xek5Lhg%3A1698750294003"
    data["is_verified"] = true
    data["profile_image"] = "https://shorturl.at/AJMN1"
    const res = await SocialLogin(data)
    console.log(res);
  }


  const [isEmailVisible, setEmailVisible] = useState(false);
  const [isChangePassVisible, setChangePassVisible] = useState(false);
  const [isMessageVisible, setMessageVisible] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const [verificationFormData, setVerificationFormData] = useState({
    vemail: "",
    vcode: "",
  });

  const [timer, setTimer] = useState(120); // Initial timer value in seconds
  const [disableVerifyButton, setDisableVerifyButton] = useState(false);

  const [changePassFormData, setChangePassFormData] = useState({
    email: "",
    newPassword: "",
  });


  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/])(?!.*\s).{8,}$/;
    return passwordPattern.test(password);
  };

  const handleChange = (event) => {
    setChangePassFormData({
      ...changePassFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangePassword = async () => {
    if (!validatePassword(changePassFormData.newPassword)) {
      // Password doesn't match the required pattern
      // Show an error message or perform other actions
      setPasswordError(
        "Password must contain:\nMinimum 8 characters\nAt least 1 Uppercase Letter\nAt least 1 Number\nAt least 1 Special character !@#$%^&*()_+  "
      );
      return;
    }

    setPasswordError("");
    try {
      const response = await axios.post(
        "http://localhost:4000/reset-password",
        {
          email: changePassFormData.email,
          password: changePassFormData.newPassword,
          confirmPassword: changePassFormData.newPassword,
        }
      );

      setMessageVisible(!isMessageVisible);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  // forget password submit
  const handleSubmit = async () => {
    try {
      if (showEmailForm) {
        setLoading(true);
        // API request to send email and receive OTP
        const response = await ForgotPassword(
          {
            email: verificationFormData.vemail,
          }
        );
        // Handle success
        setLoading(false);
        setShowEmailForm(false);
        setEmailVisible(true);
        // You may update the UI or show a success message here
        // Reset form data and UI state
      } else {
        // API request to verify the entered code
        setLoading(true);
        const response = await axios.post(
          "http://localhost:4000/verify-otp",
          {
            email: verificationFormData.vemail,
            otp: verificationFormData.vcode,
          }
        );

        // Handle success
        setLoading(false);
        // You may update the UI or show a success message here
        setShowEmailForm(false);
        setEmailVisible(false);
        setChangePassVisible(!isChangePassVisible);
        return;
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setLoading(false);
    }
    resetTimer(); // Reset the timer on form submission
  };

  const handleBack = () => {
    setShowEmailForm(true);
    setEmailVisible(false);
    setChangePassVisible(false);
    setMessageVisible(false);

    // Reset state variables for email verification
    setVerificationFormData({
      vemail: "",
      vcode: "",
    });

    // Reset state variables for change password
    setChangePassFormData({
      email: "",
      newPassword: "",
    });
    resetTimer(); // Reset the timer on going back
  };

  const resetTimer = () => {
    setTimer(120); // Reset the timer to 120 seconds
    setDisableVerifyButton(false); // Enable the "Verify" button
  };

  useEffect(() => {
    let countdown;

    if (timer > 0 && isEmailVisible) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setDisableVerifyButton(true); // Disable the "Verify" button when the timer reaches 0
    }

    return () => {
      clearInterval(countdown); // Cleanup the interval when the component unmounts or timer reaches 0
    };
  }, [timer, isEmailVisible]);

  const handleResend = async () => {
    setLoading(true);
    // API request to send email and receive OTP
    const response = await axios.post("http://localhost:4000/forgot-password", {
      email: verificationFormData.vemail,
    });
    // Handle success
    setLoading(false);
    // Your logic to resend OTP
    setTimer(120); // Reset the timer
    setDisableVerifyButton(false);
    // Add logic to send a new OTP
  };

  const formatTime = (value) => String(value).padStart(2, "0");

  

  return (
    <>
      
      <body className='container-fluid justify-content-center align-items-center d-flex overflow-hidden p-5'>
        <div className='d-lg-block d-none'>
          <img src={LoginImg} className=' rounded-5 shadow' style={{ height: "580px" }} />
        </div>
        <div className='border-1 border-orange m-5 rounded-4 p-4 p-sm-5'>
          <h1 className='text-center pb-3'>Log In</h1>
          <table>
            <td>
              <label>Email</label>
              <br />
              <input onChange={(e) => setEmail(e.target.value)} required />
              <br />
              <label>Password</label>
              <br />
              <input onChange={(e) => setPassword(e.target.value)} required type="password" />
              {error && <p className="text-danger">{error}</p>}
              <div className="text-end">
                  <button
                    type="button"
                    className="border-0 bg-transparent"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <p className="text-end pt-2 register">Forgot password ?</p>
                  </button>
                </div>              {/* Forget Password Modal */}
              <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          className={`border-0 bg-transparent ${
                            showEmailForm ? "d-none" : "d-block"
                          }`}
                        >
                          <i type="button" className="bi bi-arrow-left fs-3" />
                        </button>
                        <h5
                          className="modal-title ms-auto"
                          id="staticBackdropLabel"
                        >
                          Forgot Password
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body text-center">
                        <div
                          className={`${isEmailVisible ? "d-none" : ""} ${
                            showEmailForm ? "" : "d-none"
                          }`}
                        >
                          <p>Enter your email address to receive OTP</p>
                          <form>
                            <input
                              type="email"
                              value={verificationFormData.vemail}
                              onChange={(event) =>
                                setVerificationFormData({
                                  ...verificationFormData,
                                  vemail: event.target.value, // Use 'vemail' as the key
                                })
                              }
                              className="w-75"
                            />
                            <button
                              type="button"
                              className="btn btn-primary d-block mx-auto mt-3"
                              onClick={handleSubmit}
                            >
                              Submit
                            </button>
                          </form>
                        </div>

                        <div
                          className={`${isEmailVisible ? "" : "d-none"} ${
                            isChangePassVisible ? "d-none" : ""
                          }`}
                        >
                          <p className="fw-bold">
                            An OTP has been sent to your email address
                          </p>
                          <p>Enter the OTP</p>
                          <input
                            type="text"
                            value={verificationFormData.vcode}
                            onChange={(event) =>
                              setVerificationFormData({
                                ...verificationFormData,
                                vcode: event.target.value, // Use 'vcode' as the key
                              })
                            }
                            className="w-75"
                          />
                          {isEmailVisible && (
                            <>
                              <button
                                type="button"
                                className="border-0 bg-transparent d-block ms-auto pe-5"
                                onClick={handleResend}
                              >
                                <p className="text-end pt-2 register">
                                  Resend OTP
                                </p>
                              </button>
                              <div className="text-danger pb-3">{`Time remaining: ${Math.floor(
                                timer / 60
                              )}:${formatTime(timer % 60)}`}</div>
                            </>
                          )}
                          <button
                            className="btn btn-primary d-block mx-auto mt-1"
                            onClick={handleSubmit}
                            disabled={disableVerifyButton}
                          >
                            Verify
                          </button>
                        </div>

                        <div
                          className={`w-50 mx-auto ${
                            isChangePassVisible ? "" : "d-none"
                          } ${isMessageVisible ? "d-none" : ""}`}
                        >
                          <h2>Change Password</h2>
                          <form>
                            <label
                              htmlFor="email"
                              className="d-flex justify-content-start"
                            >
                              Email:
                            </label>
                            <input
                              className="d-flex justify-content-start"
                              type="email"
                              id="email"
                              name="email"
                              value={changePassFormData.email}
                              onChange={handleChange}
                            />
                            <label
                              htmlFor="newPassword"
                              className="d-flex justify-content-start"
                            >
                              New Password:
                            </label>
                            <input
                              className={`d-flex justify-content-start ${
                                passwordError ? "is-invalid" : ""
                              }`}
                              type="password"
                              id="newPassword"
                              name="newPassword"
                              value={changePassFormData.newPassword}
                              onChange={handleChange}
                            />
                            {passwordError && (
                              <div
                                className="invalid-feedback text-start"
                                style={{ whiteSpace: "pre-line" }}
                              >
                                {passwordError}
                              </div>
                            )}
                            <br />
                            <button
                              className="btn btn-primary mt-3"
                              type="button"
                              onClick={handleChangePassword}
                            >
                              Change Password
                            </button>
                          </form>
                        </div>

                        <div className={`${isMessageVisible ? "" : "d-none"}`}>
                          <p>
                            Your password has been changed successfully{" "}
                            <i className="bi bi-check-circle text-success" />{" "}
                          </p>
                        </div>
                      </div>

                        {loading && (
                          <div className="py-3 text-center">
                            Sending email 
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
              <p className='pt-2 text-center'>
                <Link className='text-decoration-none'><button onClick={login} className='btn text-white login-btn px-4'>Log In</button></Link>
              </p>
              <div className='d-flex align-items-center pb-3'><div className='bg-dark w-50 ' style={{ height: '1px ' }}></div>
                <div className='px-2 '>or </div> <div className=' bg-dark w-50 ' style={{ height: '1px ' }}></div></div>
              <p className='pt-1 text-center'>
                <Link to="/" className='text-decoration-none'><button className='btn rounded-5  w-100 border-dark'
                  onSubmit={Submit}
                ><img src={Google} className=' pe-2 ' style={{ height: "22px" }} />Login with Google </button></Link>
              </p>

              {/* <p className='pt-1 text-center'>
                <Link to="/" className='text-decoration-none'><button className='btn rounded-5  w-100  text-white bg-primary'



                ><img src={Facebook} className=' pe-2 ' style={{ height: "22px" }} />Login with Facebook </button></Link>
              </p> */}
              <Link to="/signup" className='text-decoration-none'><p className='text-center register'>Don't have an account? Register</p></Link>

            </td>
          </table>


        </div >
      </body >
      <Footer />
    </>
  )
}
export default Login;