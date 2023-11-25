import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import LoginImg from '../../images/login-img.png'
import "./login.css"
import { Signin } from '../../services/auth/auth'
import { SetAuthUserLocalStorage, SetTokenLocalStorage } from '../../services/localStorage/localStorage'

export const Login = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const login = async () => {
    try {
      const res = await Signin(
        {
          email: email,
          password: password
        }
      )
      navigate("/ownprofile")
      SetAuthUserLocalStorage(res?.data?.data?.user)
      SetTokenLocalStorage(res?.data?.data?.token)
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Navbar />
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
              <p className='pt-4 text-center'>
                <Link className='text-decoration-none'><button onClick={login} className='btn text-white login-btn'>Log In</button></Link>
              </p>
              <Link to="/signup" className='text-decoration-none'><p className='text-center register'>Don't have an account? Register</p></Link>

            </td>
          </table>


        </div>
      </body>
      <Footer />
    </>
  )
}
export default Login;