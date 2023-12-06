import Footer from '../../components/footer/Footer'
import Viper from "../../images/ad-1.jpg";
import Influencer from "../../images/influence.jpeg";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../UserProfile/Profile.css"
import { getAllBlogs } from '../../services/profile';

import EditProfile from '../EditProfile/EditProfile';
import SideBar from '../../components/sideBar/SideBar';
import Blog from '../../components/blog/blog';
import BlogModal from '../../components/blogmodal/BlogModal';
export const Profile = () => {
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
      
      <body className="min-vh-100 py-5 container-fluid">
        <div className="row ">
        <div
          className="row pt-4 bg-light col-9 rounded-3 shadow-sm ms-auto justify-content-center align-items-center"
          style={{ position: "relative", minHeight: "300px" }}
        >
          
          <div className="col-8 row">
            <div className="col-12 justify-content-center d-flex">
              <img
                src={Influencer}
                style={{ height: "170px", width: "170px" }}
                className="rounded-circle"
              />
            </div>
            <div className="col-12 text-center">
              <h2>Arshan Khan</h2>
              <h6 className="fw-light">
                @arshanistan
                <i class="bi bi-patch-check-fill ps-2 text-orange"></i>
              </h6>
              <h6 className="fw-light p-4 px-5">
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Qorem
                ipsum dolor sit amet, consectetur adipiscing elit.Qorem ipsum
                dolor sit amet, consectetur adipiscing elit. Qorem ipsum dolor
                sit amet, consectetur adipiscing elit.Qorem ipsum dolor sit
                amet, consectetur adipiscing elit. Qorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </h6>
            </div>
          </div>
          <div className="col-2 text-center">
            <Link to="/editProfile">
              <button className="btn btn-orange-profile mb-2">
                Edit Profile
              </button>
            </Link>
            <h6>1M Followers</h6>
            <p>Member Since 2023</p>
          </div>
        </div>

        <div className="ps-5">
          <div className="row mt-3 ps-0">
            <p
              className={`fs-5 col-4 col-sm-3 col-lg-1 py-2 ps-4 mb-0 text-start rounded-0 btn  ${isReviewsColorVisible ? "border-b-orange" : ""
                }`}
              onClick={handleButtonClick}
            >
              Blogs
            </p>
            <p
              className={`fs-5 col-4 col-sm-3 col-lg-2 py-2 ps-4 mb-0 text-start rounded-0 btn ${isReviewsColorVisible ? "" : "border-b-orange"
                }`}
              onClick={handleButtonClick}
            >
              Collaborations
            </p>
            </div>
            <p className="col-xl-6 col-lg-6 col-md-3 col-sm-2 col-2"></p>
          </div>
          <div className={`pt-5 row justify-content-start mx-auto row-gap-4`}>
            <div className={`col-10 ${isReviewsVisible ? "d-block" : "d-none"}`}>
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
            <div className={`pt-5 row pb-5 ${isReviewsVisible ? "d-none" : "d-block"}`}>
              <div className="row">
                <div className="col-8">
                  <div className="row">
                    <div className="col-lg-3 col-sm-5 text-center">
                      <div
                        className="mb-2 border rounded-4 bg-light mx-auto align-items-center d-flex justify-content-center"
                        style={{ height: "230px", width: "180px" }}
                      >
                        <icon className="bi-file-earmark-plus fs-1" />
                        <p>Add New</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-5 text-center">
                      <img
                        src={Viper}
                        className="object-fit-cover mb-2 rounded-4"
                        style={{ height: "230px", width: "180px" }}
                      />
                      <p>Title</p>
                    </div>
                    <div className="col-lg-3 col-sm-5 text-center">
                      <img
                        src={Viper}
                        className="object-fit-cover mb-2 rounded-4"
                        style={{ height: "230px", width: "180px" }}
                      />
                      <p>Title</p>
                    </div>
                    <div className="col-lg-3 col-sm-5 text-center">
                      <img
                        src={Viper}
                        className="object-fit-cover mb-2 rounded-4"
                        style={{ height: "230px", width: "180px" }}
                      />
                      <p>Title</p>
                    </div>
                    <div className="col-lg-3 col-sm-5 text-center">
                      <img
                        src={Viper}
                        className="object-fit-cover mb-2 rounded-4"
                        style={{ height: "230px", width: "180px" }}
                      />
                      <p>Title</p>
                    </div>
                    <div className="col-lg-3 col-sm-5 text-center">
                      <img
                        src={Viper}
                        className="object-fit-cover mb-2 rounded-4"
                        style={{ height: "230px", width: "180px" }}
                      />
                      <p>Title</p>
                    </div>
                    <div className="col-lg-3 col-sm-5 text-center">
                      <img
                        src={Viper}
                        className="object-fit-cover mb-2 rounded-4"
                        style={{ height: "230px", width: "180px" }}
                      />
                      <p>Title</p>
                    </div>
                    <div className="col-lg-3 col-sm-5 text-center">
                      <img
                        src={Viper}
                        className="object-fit-cover mb-2 rounded-4"
                        style={{ height: "230px", width: "180px" }}
                      />
                      <p>Title</p>
                    </div>
                  </div>
                  <p className="text-orange text-center fs-5 pt-4">See More</p>
                </div>
              </div>
            </div>
          </div></div>
      </body>
      <Footer />
    </>
  );
};

export default Profile;
