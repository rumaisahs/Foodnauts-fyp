import "./navbar.css"
import { Link } from 'react-router-dom';
import Logo from "../../images/foodnauts 2.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top py-2 shadow mx-auto">
      <div className="container-fluid">
        <img src={Logo} className='pe-2' style={{ height: "35px" }} />
        <Link to='/' className='text-decoration-none navbar-brand fw-medium fs-4 text-orange'>Foodnauts</Link>
        <div className="dropdown ms-auto">
          <a href="#" className="text-decoration-none pe-2 d-lg-none" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-person-fill fs-1 text-orange"></i>
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{ left: 'auto', right: '0' }}>
            <li>
              <Link className="dropdown-item">
                <i className="bi bi-person-square pe-2 text-orange"></i>
               Register
              </Link>
            </li>
            <li>
              <button className="dropdown-item btn">
                <i className="bi bi-box-arrow-left pe-2 text-orange"></i>
                Login
              </button>
            </li>
          </ul>

        </div>
        <button className=" d-lg-none nav-btn rounded-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="bi-list fs-3 justify-content-center d-flex"></span>
        </button>
        <div className="collapse navbar-collapse p-2 p-lg-0" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <Link to='/community' className='text-decoration-none nav-link active'><i class="fs-2 bi bi-people"></i></Link>
            </li>
            <li className="nav-item">
              <Link to='/market' className='text-decoration-none nav-link active'><i class="fs-2 bi bi-shop-window"></i>
              </Link>
            </li>
          </ul>
          <form className="d-flex align-items-center d-flex" role="search">
            <input className="form-control rounded-5" type="search" placeholder="Search" aria-label="Search" />
            <Link to='/list' className="border-0 bg-transparent position-absolute" style={{ right: "4%" }} ><icon className="bi-search text-orange" /></Link>
          </form>
          <div className="dropdown">
          <a href="#" role="button" className="text-decoration-none d-none d-sm-none d-lg-flex" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
              <i className="bi bi-person-fill ps-1 fs-1 text-orange" ></i>
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{ left: 'auto', right: '0' }}>
            <li>
              <Link to="/ownprofile" className="dropdown-item">
                <i className="bi bi-person-square pe-2 text-orange"></i>
                Register
              </Link>
            </li>
            <li>
              <button className="dropdown-item" >
                <i className="bi bi-box-arrow-left pe-2 text-orange"></i>
                Login
              </button>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;