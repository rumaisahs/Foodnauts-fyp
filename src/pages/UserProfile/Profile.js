import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import NZXT from "../../images/ad2.jpg";
import Viper from "../../images/ad-1.jpg";
import Product04 from "../../images/bloggers.png";
import Product05 from "../../images/influence.jpeg";
import Product06 from "../../images/influence.jpeg";
import Influencer from "../../images/influence.jpeg";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../UserProfile/Profile.css"
import EditProfile from '../EditProfile/EditProfile';
import SideBar from '../../components/sideBar/SideBar';
export const Profile = () => {
  const [isReviewsColorVisible, setisReviewsColorVisible] = useState(false);
  const [isReviewsVisible, setisReviewsVisible] = useState(false);

  const handleButtonClick = () => {
    setisReviewsVisible(!isReviewsVisible);
    setisReviewsColorVisible(!isReviewsColorVisible);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayText, setDisplayText] = useState(''); // Initial text

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
  return (
    <>
            <Navbar />
            <SideBar/>
      <body className="min-vh-100 py-5 container">
        <div className="row px-3">
          <div className="col-2">
            <h6 className="align-items-center d-flex justify-content-center">
              {" "}
              <icon className="bi-youtube text-orange fs-2 pe-2" /> 1M Followers
            </h6>
            <hr />
            <h6 className="align-items-center d-flex justify-content-center">
              {" "}
              <icon className="bi-tiktok text-orange fs-2 pe-2" /> 1M Followers
            </h6>
            <hr />
            <h6 className="align-items-center d-flex justify-content-center">
              {" "}
              <icon className="bi-instagram text-orange fs-2 pe-2" /> 1M
              Followers
            </h6>
          </div>
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
              className={`fs-5 col-4 col-sm-3 col-lg-1 py-2 ps-4 mb-0 text-start rounded-0 btn  ${
                isReviewsColorVisible ? "border-b-orange" : ""
              }`}
              onClick={handleButtonClick}
            >
              Blogs
            </p>
            <p
              className={`fs-5 col-4 col-sm-3 col-lg-1 py-2 ps-4 mb-0 text-start rounded-0 btn ${
                isReviewsColorVisible ? "" : "border-b-orange"
              }`}
              onClick={handleButtonClick}
            >
              Media
            </p>
            <p className="col-xl-6 col-lg-6 col-md-3 col-sm-2 col-2"></p>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-2">
              <Link to="/addreviews" className=" text-decoration-none">
                <p
                  className={`btn bg-orange text-white  add-review-btn ${
                    windowWidth >= 575 ? "rounded-5" : "rounded-circle"
                  } ${isReviewsColorVisible ? "d-none" : "d-block"}`}
                  onClick={handleButtonClick}
                >
                  {displayText}
                </p>
              </Link>
            </div>
          </div>
          <div className={`pt-5 row justify-content-start mx-auto row-gap-4`}>
              <div className={`col-8 ${isReviewsVisible ? "d-block" : "d-none"}`}>
              <div className="row">
<div className="col-lg-3 col-md-4 col-6">
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
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
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
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
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
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
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
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
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
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`pt-5 row pb-5 ${ isReviewsVisible ? "d-none" : "d-block" }`}>
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
              {/* <div className="col-4">
                <div
                  className="bg-light shadow border rounded-4 ms-auto"
                  style={{ height: "500px", width:"350px"}}
                >
                  <h4 className="ps-4 pt-5 pb-3">Popular Bloggers</h4>
                  <div className="row ps-4 pb-3 align-items-center d-flex">
                    <div className="col-3">
                        <img src={Influencer} className="rounded-circle" height={"70px"} width={"70px"} />
                    </div>
                    <div className="col-6">
                        <h6>Arshan Khan</h6>
                        <p>@arshanistan</p>
                    </div>
                  </div>
                  <div className="row ps-4 pb-3 align-items-center d-flex">
                    <div className="col-3">
                        <img src={Influencer} className="rounded-circle" height={"70px"} width={"70px"} />
                    </div>
                    <div className="col-6">
                        <h6>Arshan Khan</h6>
                        <p>@arshanistan</p>
                    </div>
                  </div>
                  <div className="row ps-4 pb-3 align-items-center d-flex">
                    <div className="col-3">
                        <img src={Influencer} className="rounded-circle" height={"70px"} width={"70px"} />
                    </div>
                    <div className="col-6">
                        <h6>Arshan Khan</h6>
                        <p>@arshanistan</p>
                    </div>
                  </div>
                  <div className="row ps-4 pb-3 align-items-center d-flex">
                    <div className="col-3">
                        <img src={Influencer} className="rounded-circle" height={"70px"} width={"70px"} />
                    </div>
                    <div className="col-6">
                        <h6>Arshan Khan</h6>
                        <p>@arshanistan</p>
                    </div>
                  </div>
                  
                </div>
              </div> */}
            </div>
          </div>
        </div></div>
      </body>
      <Footer />
    </>
  );
};

export default Profile;
