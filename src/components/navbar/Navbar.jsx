import "./navbar.css"
import { Link } from 'react-router-dom';
import Logo from "../../images/foodnauts 2.png"
const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-white sticky-top py-2 shadow mx-auto">
        <div className="container-fluid">
    <img src={Logo} className='pe-2' style={{height:"35px"}}/>
    <Link to='/' className='text-decoration-none navbar-brand fw-medium fs-4 text-orange'>Foodnauts</Link>
    <Link to="/login" className='text-decoration-none ms-auto pe-3 d-lg-none'><i className="bi bi-person-fill ps-2 fs-1" style={{color: "#F2752F"}}></i></Link>
      <button className=" d-lg-none nav-btn rounded-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="bi-list fs-3 justify-content-center d-flex"></span>
      </button>
      <div className="collapse navbar-collapse p-2 p-lg-0" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
          <li className="nav-item">
            <Link to='/foodCommunity' className='text-decoration-none nav-link active'>Community</Link>
          </li>
          <li className="nav-item">
            <Link to='/add_product' className='text-decoration-none nav-link active'>Let Us Recommend</Link>
          </li>
        </ul>
        <form className="d-flex align-items-center d-flex" role="search">
          <input className="form-control rounded-5" type="search" placeholder="Search" aria-label="Search"/>
          <button className="border-0 bg-transparent position-absolute" style={{right:"4%"}} type="submit"><icon className="bi-search text-orange"/></button>
        </form>
        
        <Link to="/login" className='text-decoration-none d-none d-lg-flex'><i className="bi bi-person-fill ps-2 fs-2" style={{color: "#F2752F"}}></i></Link>
        
      </div>
        </div>
      </nav>
    )
}

export default Navbar;