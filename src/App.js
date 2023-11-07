import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import {
   BrowserRouter as Router,
  Routes, 
  Route 
} from "react-router-dom";
import Home from "./pages/home/Home";
import Restaurant from "./pages/restaurant/Restaurant";
import List from "./pages/link/List";
// import SideBar from "./components/sidebar/SideBar";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import Profile from "./pages/UserProfile/Profile";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/list" element={<List/>}/>
        <Route  path="/restaurants/:id" element={<Restaurant/>}/>
        {/* <Route  path="/sidebar" element={<SideBar/>}/> */}
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/signup" element={<SignUp/>}/>
        <Route  path="/ownprofile" element={<Profile/>}/>


      </Routes>
    </Router>
    </>
  );
}

export default App;