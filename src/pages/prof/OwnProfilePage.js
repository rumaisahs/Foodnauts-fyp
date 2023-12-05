import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import NZXT from "../../images/xanders.jpg";
import Viper from "../../images/xanders.jpg";
import Product04 from "../../images/xanders.jpg";
import Product05 from "../../images/xanders.jpg";
import Product06 from "../../images/xanders.jpg";
import MKBHD from "../../images/xanders.jpg";
import Influencer from "../../images/influence.jpeg";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../UserProfile/Profile.css"
import { getAllBlogs } from '../../services/profile';

import EditProfile from '../EditProfile/EditProfile';
import SideBar from '../../components/sideBar/SideBar';
import Blog from '../../components/blog/blog';
import BlogModal from '../../components/blogmodal/BlogModal';
export const OwnProfile = () => {
  const [isReviewsColorVisible, setisReviewsColorVisible] = useState(false);
  const [isReviewsVisible, setisReviewsVisible] = useState(false);

  const handleButtonClick = () => {
    setisReviewsVisible(!isReviewsVisible);
    setisReviewsColorVisible(!isReviewsColorVisible);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayText, setDisplayText] = useState(''); // Initial text
  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      // Update the text based on the window width
      setDisplayText(window.innerWidth <= 575 ? '+' : 'Post Blog');
    };

    window.addEventListener('resize', handleResize);

    // Initial setup
    setDisplayText(window.innerWidth <= 575 ? '+' : 'Post Blog');

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    GetBlogs()
  }, [])

  const GetBlogs = async (data) => {
    const params = {
      paginate: true,
      sort: 'asc',
      sortBy: 'sortBy'
    }
    const res = await getAllBlogs(params)
    setBlogData(res?.data?.data)
  }

  console.log(blogData, 'blogData');

  return (
    <>
      <Navbar />
      <SideBar/>
      <body className="min-vh-100 py-5 container-fluid">
        <div className="row">
<div
          className="row pt-4 bg-light col-9 rounded-3 shadow-sm ms-auto justify-content-center align-items-center"
          style={{ position: "relative", minHeight: "300px" }}
        >
          <div
            className="col-5 col-lg-3"
            style={{ height: "150px", width: "150px" }}
          >
            <img src={Influencer} className="h-100 rounded-circle"/>
          </div>
          <div className="col-6 col-lg-9 ps-4 ">
            <h2>Name</h2>
             <h6 className="fw-light">@username</h6>
            <h6 className="fw-light">
              Verified
              <i class="bi bi-patch-check-fill ps-2 text-orange"></i>
            </h6>
           
            <Link to="/editprofile"><btn className="btn btn-outline-orange search-orange">Edit Profile</btn></Link>
          </div>
          <div className="row text-center mt-3">
            <div className="col-6 col-md-3 lh-1">
              <icon className="bi-youtube text-orange fs-2 pe-2" />
              <div><h6  className="row pt-4 bg-light col-9 rounded-3 shadow-sm ms-auto justify-content-center align-items-center">
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Qorem
                ipsum dolor sit amet, consectetur adipiscing elit.Qorem ipsum
                dolor sit amet, consectetur adipiscing elit. Qorem ipsum dolor
                sit amet, consectetur adipiscing elit.Qorem ipsum dolor sit
                amet, consectetur adipiscing elit. Qorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </h6></div>
            </div>
            <div className="col-6 col-md-3 lh-1">
            
            <icon className="bi-tiktok text-orange fs-2 pe-2" />
            </div>
            <div className="col-6 col-md-3 lh-1">
            <icon className="bi-instagram text-orange fs-2 pe-2" />
            </div>
            <div className="col-6 col-md-3 lh-1">
            <icon className="bi-instagram text-orange fs-2 pe-2" />
            </div>
          </div>
          <div className="bg-orange text-white text-center py-5 my-3">
            <h5>LOOKING FOR STARTING A BUSINESS?</h5>
            <h1 className="fw-bold mb-4">BECOME A SELLER</h1>
            <Link to="/profile_verification" className=" text-decoration-none"><btn className="bg-white text-orange fs-4 p-2 px-3 rounded-1">Register</btn></Link>
        </div>
          <div className="row mt-3 ps-0">
            <p className={`fs-5 col-4 col-sm-3 col-lg-2 py-2 ps-4 mb-0 text-start rounded-0 btn  ${isReviewsColorVisible ? 'border-b-orange' : ''}`} onClick={handleButtonClick}>
            Collaborations
            </p>
            <p className={`fs-5 col-4 col-sm-4 col-lg-2  py-2 ps-4 mb-0 text-start rounded-0 btn ${isReviewsColorVisible ? '' : 'border-b-orange'}`} onClick={handleButtonClick}>
              Blogs
            </p>
          </div>
          
        </div>
        <div className="col-1"></div>
        </div>
        <div className="row">
<div className="row col-9 ms-auto justify-content-center align-items-center">
          <div className={`bg-white rounded-bottom-3 pt-5 ${isReviewsVisible ? 'd-block' : 'd-none'}`}>
            <div className="row pb-5 justify-content-start mx-auto row-gap-4">
              <div className="col-lg-3 col-md-4 col-6">
                <Link to="/gig" className="text-decoration-none">
                <div className="card shadow-sm">
                  <img
                    src={NZXT}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">NZXT H510</h5>
                    <p className="card-text text-truncate mb-0 text-orange">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <i className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm ">
                  <img
                    src={Viper}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                      Razer Viper Ultimate Cyberpunk 2077 Edition Wireless
                    </h5>
                    <p className="card-text text-truncate mb-0 text-orange">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <i className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div class="card shadow-sm">
                  <img
                    src={Product04}
                    class="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div class="py-2 card-body">
                    <h5 class="card-title text-truncate fs-5">
                      Asus TUF VG27AQ 27" IPS 165Hz Gaming Monitor
                    </h5>
                    <p className="card-text text-truncate mb-0 text-orange">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <i className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div class="card shadow-sm">
                  <img
                    src={Product05}
                    class="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div class="py-2 card-body">
                    <h5 class="card-title text-truncate fs-5">
                      Dell Alienware AW988 Wireless Gaming Headset
                    </h5>
                    <p className="card-text text-truncate mb-0 text-orange">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <i className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div class="card shadow-sm">
                  <img
                    src={Product06}
                    class="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div class="py-2 card-body">
                    <h5 class="card-title text-truncate fs-5">
                      Macbook Air Midnight Blue M2 13.6" 2TB SSD
                    </h5>
                    <p className="card-text text-truncate mb-0 text-orange">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <i className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className= {`bg-white rounded-bottom-3 pt-5 ${isReviewsVisible ? 'd-none' : 'd-block'}`} >
            <div className="row pb-5 justify-content-start mx-auto gap-4">
            <div className=" bg-light col-12 rounded-4">
                <div className="pt-4 ps-4 pe-4 row">
                <div className="row">
                <BlogModal />
                {
                  blogData.length > 0 ?
                    <Blog
                      setState={blogData}
                    />
                    : ''
                }

              </div>
                </div>
                
              </div>
            
            </div>
          </div>
        </div>
        <div className="col-1"></div>
        </div>
        
      </body>
      <Footer />
    </>
  );
};

export default OwnProfile;