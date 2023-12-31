import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import LoginImg from '../../images/login-img.png'
import Google from '../../images/googlelogo.png'
import Facebook from '../../images/facebook.png'

import "./login.css"
import { Signin } from '../../services/auth/auth'
import { SetAuthUserLocalStorage, SetTokenLocalStorage } from '../../services/localStorage/localStorage'

export const Login = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const login = async () => {
    try {
      const res = await Signin({
        email: email,
        password: password
      })
      SetAuthUserLocalStorage(res.data.data.user)
      SetTokenLocalStorage(res.data.data.token)
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
              <Link to="/forgotpass"><p className='text-end'>forgot password?</p></Link>
              <p className='pt-2 text-center'>
                <Link to="/ownprofile" className='text-decoration-none'><button onClick={login} className='btn text-white login-btn px-4'>Log In</button></Link>
              </p>
              <div className='d-flex align-items-center pb-3'><div className='bg-dark w-50 ' style={{ height: '1px ' }}></div>
                <div className='px-2 '>or </div> <div className=' bg-dark w-50 ' style={{ height: '1px ' }}></div></div>
              <p className='pt-1 text-center'>
                <Link to="/" className='text-decoration-none'><button className='btn rounded-5  w-100 border-dark'><img src={Google} className=' pe-2 ' style={{ height: "22px" }} />Login with Google </button></Link>
              </p>

              <p className='pt-1 text-center'>
                <Link to="/" className='text-decoration-none'><button className='btn rounded-5  w-100  text-white bg-primary'><img src={Facebook} className=' pe-2 ' style={{ height: "22px" }} />Login with Facebook </button></Link>
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