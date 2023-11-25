import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const SideBar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial", position:"absolute" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addproduct" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Add Restaurant</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/myblog" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line"> My Blogs</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/myrestaurants" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line"> My Restaurants</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/collaborations" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Collaborations</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/settings" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Settings</CDBSidebarMenuItem>
            </NavLink> 
             <NavLink exact to="/logout" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Logout</CDBSidebarMenuItem>
            </NavLink>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px"
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;
