import Footer from "../../components/footer/Footer";
import NZXT from "../../images/xanders.jpg";
import Viper from "../../images/xanders.jpg";
import Product04 from "../../images/xanders.jpg";
import Product05 from "../../images/xanders.jpg";
import Product06 from "../../images/xanders.jpg";
import Influencer from "../../images/influence.jpeg";
import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import "./Profile.css"
import { GetAllBlogs } from '../../services/blog/blog';
import moment from 'moment';
import EditProfile from '../EditProfile/EditProfile';
import SideBar from '../../components/sideBar/SideBar';
import Blog from '../../components/blog/blog';
import { GetAuthUserLocalStorage } from '../../services/localStorage/localStorage';
import { GetSingleUser, UserFollowers } from '../../services/user/user';
import { GetAllMedia } from '../../services/media/media';
// import {GetSingleUser}from '../../services/user/user';
import BlogModal from '../../components/blogmodal/BlogModal';
export const OwnProfile = () => {
  const authUser = GetAuthUserLocalStorage()
  const [isReviewsColorVisible, setisReviewsColorVisible] = useState(false);
  const [isReviewsVisible, setisReviewsVisible] = useState(false);
  const [user, setUser] = useState(null)
console.log(user,'user')
  const handleButtonClick = () => {
    setisReviewsVisible(!isReviewsVisible);
    setisReviewsColorVisible(!isReviewsColorVisible);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayText, setDisplayText] = useState(''); // Initial text
  const [blogData, setBlogData] = useState([])
  const [mediaData, setMediaData] = useState([])
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      // Update the text based on the window width

    };

    window.addEventListener('resize', handleResize);

    

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  useEffect(() => {
    const getAllBlogs = async () => {
      const params = {
        user: authUser._id,
        paginate: false,
        sort: 'desc',
        sortBy: 'createdAt',
      }
      const res = await GetAllBlogs(params)
      setBlogData(res?.data?.data)
    }

    const getSingleUser = async () => {
      const res = await GetSingleUser(authUser._id)
      setUser(res?.data?.data)
    }

    const getAllMedia = async () => {
      const params = {
        user: authUser._id,
        paginate: false,
        sort: 'desc',
        sortBy: 'createdAt',
      }
      const res = await GetAllMedia(params)
      setMediaData(res?.data?.data)
    }

    const userFollowers = async () => {
      const res = await UserFollowers(authUser?._id)
      setFollowers(res?.data?.data)
    }

    getSingleUser()
    getAllBlogs()
    getAllMedia()
    userFollowers()

  }, [])


  return (
    <>

      <body className="min-vh-100 py-5 container-fluid">
        <div className="row">
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
                <h2>{user?.name}</h2>
                <h6 className="fw-light">
                  @{user?.username}
                  <i class="bi bi-patch-check-fill ps-2 text-orange"></i>
                </h6>
                <h6 className="fw-light p-4 px-5">
                  {user?.bio}
                </h6>
              </div>
            </div>
            <div className="col-2 text-center">
              <Link to="">
                <button className="btn btn-orange-profile mb-2">
                  Follow
                </button>
              </Link>
              <h6>{followers?.length} Followers</h6>
              <p>Member Since {moment(user?.createdAt).format('YYYY')}</p>
            </div>

            <div className="row text-center mt-3">
              <div className="col-6 col-md-3 lh-1">
                <icon className="bi-youtube text-orange fs-2 pe-2" />

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
            {/* <div className="bg-orange text-white text-center py-5 my-3">
            <h5>LOOKING FOR STARTING A BUSINESS?</h5>
            <h1 className="fw-bold mb-4">BECOME A SELLER</h1>
            <Link to="/profile_verification" className=" text-decoration-none"><btn className="bg-white text-orange fs-4 p-2 px-3 rounded-1">Register</btn></Link>
        </div> */}
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
            <div className={`bg-white rounded-bottom-3 pt-5 ${isReviewsVisible ? 'd-none' : 'd-block'}`} >
              <div className="row pb-5 justify-content-start mx-auto gap-4">
                <div className=" bg-light col-12 rounded-4">
                  <div className="pt-4 ps-4 pe-4 row">
                    <div className="row">
                      {
                        blogData?.length <= 0 ?
                          "No blog found"
                          :
                          blogData?.map((item, index) => (
                            <Blog data={item} key={index} />
                          ))
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