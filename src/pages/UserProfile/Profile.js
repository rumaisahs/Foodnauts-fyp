import Footer from "../../components/footer/Footer";
import NZXT from "../../images/xanders.jpg";
import Viper from "../../images/xanders.jpg";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Profile.css";
import { CreateBlogs, GetAllBlogs } from "../../services/blog/blog";
import moment from "moment";
import Blog from "../../components/blog/blog";
import { GetAuthUserLocalStorage } from "../../services/localStorage/localStorage";
import { GetSingleUser, UserFollowers } from "../../services/user/user";
import { GetAllMedia } from "../../services/media/media";
import BlogModal from "../../components/blog/BlogModal";
import DefaultImage from "../../images/defaultimage.png";
import PostGigModal from "../../components/postgig/PostGigModal";
import NoPost from "../../images/noblog.jpg";
import axios from "axios";
import { constant } from "../../utils/constants";
export const UserProfile = () => {
  const { userId } = useParams();
  const authUser = GetAuthUserLocalStorage();
  const [isReviewsColorVisible, setisReviewsColorVisible] = useState(false);
  const [isReviewsVisible, setisReviewsVisible] = useState(false);
  const [user, setUser] = useState(null);

  const handleButtonClick = () => {
    setisReviewsVisible(!isReviewsVisible);
    setisReviewsColorVisible(!isReviewsColorVisible);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayText, setDisplayText] = useState("");
  const [blogData, setBlogData] = useState([]);
  const [mediaData, setMediaData] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      setDisplayText(window.innerWidth <= 575 ? "+" : "Post Blog");
    };

    window.addEventListener("resize", handleResize);

    setDisplayText(window.innerWidth <= 575 ? "+" : "Post Blog");

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleUser = async () => {
    try {
      const response = await axios.get(`${constant?.BASE_URL}user/${userId}`);
      setUser(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleUser();
  }, []);

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
                  src={user?.profile_image || DefaultImage}
                  style={{ height: "170px", width: "170px" }}
                  className="rounded-circle"
                />
              </div>
              <div className="col-12 text-center">
                <h2>{user?.name}</h2>
                <h6 className="fw-light fs-3">
                  @{user?.username}
                  <i class="bi bi-patch-check-fill ps-2 text-orange"></i>
                </h6>
                <h6 className="fw-light p-4 px-5 fs-5 fw-bold">{user?.bio}</h6>
              </div>
            </div>
            <div className="col-2 text-center">
              <button className="btn btn-orange-profile mb-2 fs-4">
                Follow
              </button>
              <h4>{followers?.length} Followers</h4>
              <p>Member Since {moment(user?.createdAt).format("DD/MM/YYYY")}</p>
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
    
            <div className="row mt-3 ps-0">
              <p
                className={`fw-bold fs-4 col-4 col-sm-3 col-lg-2 py-2 ps-4 mb-0 text-start rounded-0 btn  ${
                  isReviewsColorVisible ? "border-b-orange" : ""
                }`}
                onClick={handleButtonClick}
              >
                Collaborations
              </p>
              <p
                className={`fs-4 fw-bold col-4 col-sm-4 col-lg-2  py-2 ps-4 mb-0 text-start rounded-0 btn ${
                  isReviewsColorVisible ? "" : "border-b-orange"
                }`}
                onClick={handleButtonClick}
              >
                Blogs
              </p>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="row col-9 ms-auto justify-content-center align-items-center">
            <div
              className={`bg-white rounded-bottom-3 pt-5 ${
                isReviewsVisible ? "d-block" : "d-none"
              }`}
            >
              {blogData.length === 0 ? (
                <div className="text-center">
                  <img
                    src={NoPost}
                    alt="No blogs found"
                    className="mb-3"
                    style={{ width: "400px", height: "400px" }}
                  />
                  <p className="fs-5 fw-bold">No Gigs found</p>
                </div>
              ) : (
                <div className="row pb-5 justify-content-start mx-auto row-gap-4">
                  <div className="col-lg-3 col-md-4 col-6">
                    <PostGigModal />
                    <Link to="/gig" className="text-decoration-none">
                      <div className="card shadow-sm">
                        <img
                          src={NZXT}
                          className="card-img-top r-card-height"
                          alt="img-name"
                        />
                        <div className="py-2 card-body">
                          <h5 className="card-title text-truncate fs-5">
                            Weekly Marketing
                          </h5>
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
                          Social Daily Post
                        </h5>
                        <p className="card-text text-truncate mb-0 text-orange">
                          Rs. 45,000
                        </p>
                        <button>Active</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              className={`bg-white rounded-bottom-3 pt-5 ${
                isReviewsVisible ? "d-none" : "d-block"
              }`}
            >
              {/* <div className="row pb-5 justify-content-start mx-auto gap-4">
                <div className=" bg-light col-12 rounded-4">
                  <div className="pt-4 ps-4 pe-4 row">
                    <div className="row">
                      <BlogModal />
                      {blogData?.length <= 0
                        ? "No blog found"
                        : blogData?.map((item, index) => (
                            <Blog data={item} key={index} />
                          ))}
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </body>
      <Footer />
    </>
  );
};

export default UserProfile;
