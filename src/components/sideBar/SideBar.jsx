import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from "cdbreact";
import "./sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { EmptyLocalStorage } from "../../services/localStorage/localStorage";
import React, { useState, useEffect } from 'react';
import logoImage from"../../images/colette.jpg";
import userIcon from"../../images/colette.jpg";
import Home from '../../pages/home/Home';
import { Link } from 'react-router-dom';


import './sidebar.css';
const SideBar = () => {
  const menuBtnChange = () => {
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector("#btn");

  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
};
const handleSidebarToggle = () => {
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector("#btn");

  sidebar.classList.toggle("open");
  menuBtnChange();
};
const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1200);

// Function to handle window resize
const handleResize = () => {
  setIsSmallScreen(window.innerWidth <= 1200);
};
const sidebarClass = isSmallScreen ? "sidebar" : "sidebar open";
// Effect to add event listener for window resize
useEffect(() => {
  window.addEventListener("resize", handleResize);

  // Cleanup the event listener when the component unmounts
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
useEffect(() => {
  const closeBtn = document.querySelector("#btn");
  closeBtn.addEventListener("click", handleSidebarToggle);

  // Cleanup the event listener when the component unmounts
  return () => {
    closeBtn.removeEventListener("click", handleSidebarToggle);
  };
}, []);
//   const navigate = useNavigate()
//   return (
//     <div className="sidebar-container">

//       <CDBSidebar textColor="#fff" backgroundColor="#333">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a
//             href="/"
//             className="text-decoration-none"
//             style={{ color: "inherit" }}
//           >
//             Sidebar
//           </a>
//         </CDBSidebarHeader>

//         <CDBSidebarContent className="sidebar-content">
//           <CDBSidebarMenu >
//             <NavLink exact to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/addrestaurant" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="table">Add Restaurant</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="Link" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line"> My Blogs</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/myrestaurants" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line"> My Restaurants</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/collaborations" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="user">Collaborations</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/settings" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="user">Settings</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to={'/login'} onClick={() => {
//               EmptyLocalStorage()
//             }} activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="user">Logout</CDBSidebarMenuItem>
//             </NavLink>

//           </CDBSidebarMenu>
//         </CDBSidebarContent>

//         <CDBSidebarFooter style={{ textAlign: "center" }}>
//           <div
//             style={{
//               padding: "20px 5px"
//             }}
//           >
//             Sidebar Footer
//           </div>
//         </CDBSidebarFooter>
//       </CDBSidebar>
//     </div>
//   );
// };



  return (
    <div className="">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
    <link href="https://kit.fontawesome.com/a19fe5b40c.js" crossOrigin="anonymous" />

 
       <div class={sidebarClass}>
      <div className="logo_details">
        
        <i className="bx bx-menu" id="btn"></i>
      </div>

      <ul className="nav-list">
       
        <p className='ps'>x</p>
        <li>
        <Link to="/">
            <i className="bx bx-home-alt-2"></i>
            <span className="link_name">Home</span>
            </Link>
          <span className="tooltip">Home</span>
        </li>

        <li>
        <Link to="/community">
            <i className="bx bx-bar-chart-alt-2"></i>
            <span className="link_name">Community</span>
          </Link>
          <span className="tooltip">Community</span>
        </li>

        <li>
        <Link to="/restaurants">
            <i className="bx bxs-slideshow"></i>
            <span className="link_name">Restaurants</span>
          </Link>
          <span className="tooltip">Restaurants</span>
        </li>

        <li>
        <Link to="/">
            <i className="bx bxs-contact"></i>
            <span className="link_name">Notifications</span>
          </Link>
          <span className="tooltip">Notifications</span>
        </li>

        <li>
        <Link to="/myblog">
            <i className="bx bx-edit"></i>
            <span className="link_name">My Blogs</span>
          </Link>
          <span className="tooltip">Blogs</span>
        </li>

        <li>
          <a>
            <i className="bx bx-edit"></i>
            <span className="link_name">Post Collab</span>
          </a>
          <span className="tooltip">Post Collab</span>
        </li>

        <li>
          <a>
            <i className="bx bx-list-check"></i>
            <span className="link_name">Manage Restaurants</span>
          </a>
          <span className="tooltip">Manage Restaurants</span>
        </li>

        <li>
          <a>
            <i className="bx bx-timer"></i>
            <span className="link_name">My Seller Profile</span>
          </a>
          <span className="tooltip">My Seller Profile</span>
        </li>

     

        <li>
        <p className='ps'>x</p>
        <Link to="ownprofile/:id">
            <i className="bx bxs-chevrons-left"></i>
            <span className="link_name">Profile</span>
          </Link>
          <span className="tooltip">Profile</span>
        </li>
        <p className='ps'>x</p>
        <li>
        <Link to="/editProfile">
            <i className="bx bxs-user-detail"></i>
            <span className="link_name">Settings</span>
            </Link>
          <span className="tooltip"> Setting</span>
        </li>

        <li>
        <NavLink exact to={'/login'} onClick={() => {
             EmptyLocalStorage()
           }} activeClassName="activeClicked">
            <i className="bx bx-arrow-to-left"></i>
            <span className="link_name">Logout</span>
          </NavLink>
          <span className="tooltip">Logout</span>
        </li>
        <li>
          <a>
            <i className="bx bx-arrow-to-left"></i>
            <span className="link_name">Help Centre</span>
          </a>
          <span className="tooltip">Help Centre</span>
        </li>
      </ul>
    </div>

  
  </div>
);
};

export default SideBar;

