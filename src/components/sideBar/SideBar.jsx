import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { EmptyLocalStorage } from "../../services/localStorage/localStorage";

import "./sidebar.css";

const SideBar = () => {
  let isLogged = localStorage.getItem('foodnauts-token')
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1200);

  const sidebarClass = isSmallScreen ? "sidebar" : "sidebar open";

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

  // Function to handle window resize
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 1200);
  };

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



  return (
    <div className="">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link
        href="https://kit.fontawesome.com/a19fe5b40c.js"
        crossOrigin="anonymous"
      />

      <div className={sidebarClass}>
        <div className="logo_details">
          <i className="bx bx-menu" id="btn"></i>
        </div>

        <ul className="nav-list">
          <p className="ps">x</p>
          <li className="sidebar-item my-3 mb-3 mb-3">
            <Link to="/">
              <i className="bx bx-home-alt-2 fs-2"></i>
              <span className="link_name fs-5">Home</span>
            </Link>
            <span className="tooltip">Home</span>
          </li>

          <li className="sidebar-item my-3 mb-3 mb-3">
            <Link to="/community">
              <i class='bx bx-group'></i>
              <span className="link_name fs-5">Community</span>
            </Link>
            <span className="tooltip">Community</span>
          </li>

          <li className="sidebar-item my-3 mb-3 mb-3">
            <Link to="/allrest">
              <i class='bx bx-restaurant'></i>
              <span className="link_name fs-5">Restaurants</span>
            </Link>
            <span className="tooltip">Restaurants</span>
          </li>


          {isLogged &&
            <>
              <li className="sidebar-item my-3 mb-3 mb-3">
                <Link to="/myblog">
                  <i className="bx bx-edit"></i>
                  <span className="link_name fs-5 ">Manage Blogs</span>
                </Link>
                <span className="tooltip">Manage Blogs</span>
              </li>

              <li className="sidebar-item my-3 mb-3 mb-3">
                <Link to="/mygigs">
                  <i class='bx bxs-dock-left' ></i>
                  <span className="link_name fs-5">Manage Collab</span>

                  <span className="tooltip">Manage Collab</span>
                </Link>
              </li>
              <li className="sidebar-item my-3 mb-3 mb-3">
                <Link to="/managerest">
                  <i className="bx bx-list-check"></i>
                  <span className="link_name fs-5">Manage Restaurants</span>
                </Link>
                <span className="tooltip">Manage Restaurants</span>
              </li>
              <li className="sidebar-item my-3 mb-3 mb-3">
                <p className="ps">x</p>
                <Link to="ownprofile" className="sidebar-item">
                  <i class='bx bx-user-circle' ></i>
                  <span className="link_name fs-5">Profile</span>
                </Link>
                <span className="tooltip">Profile</span>
              </li>
              <p className="ps">x</p>
              <li className="sidebar-item my-3 mb-3 mb-3">
                <Link to="/editProfile">
                  <i class='bx bx-cog' ></i>
                  <span className="link_name fs-5">Settings</span>
                </Link>
                <span className="tooltip"> Setting</span>
              </li>

              <li className="sidebar-item my-3 mb-3 mb-3">
                <NavLink
                  exact
                  to={"/login"}
                  onClick={() => {
                    EmptyLocalStorage();
                  }}
                  activeClassName="activeClicked"
                >
                  <i class='bx bx-log-out' ></i>
                  <span className="link_name fs-5">Logout</span>
                </NavLink>
                <span className="tooltip">Logout</span>
              </li>

            </>
          }

          {/* <li className="sidebar-item">
                <a>
                  <i className="bx bx-timer"></i>
                  <span className="link_name">My Seller Profile</span>
                </a>
                <span className="tooltip">My Seller Profile</span>
              </li>  */}
          {/* <li className="sidebar-item">
                <Link to="/">
                <i class='bx bxs-bell-ring' ></i>
                  <span className="link_name">Notifications</span>
                </Link>
                <span className="tooltip">Notifications</span>
              </li> */}
          <li className="sidebar-item my-3 mb-3 mb-3">
            <a>
              <i class='bx bx-support' ></i>
              <span className="link_name fs-5">Help Centre</span>
            </a>
            <span className="tooltip">Help Centre</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
