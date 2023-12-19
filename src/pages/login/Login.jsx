import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import LoginImg from '../../images/login-img.png'
import Google from '../../images/googlelogo.png'
import Facebook from '../../images/facebook.png'

import "./login.css"
import { Signin, SocialLogin } from '../../services/auth/auth'
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
                     

                        {loading && (
                          <div className="pt-2">
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