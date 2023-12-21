import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Blogger from "../../images/bloggers.png";
import CarouselImg1 from "../../images/homepage.jpg";
import CarouselImg2 from "../../images/xanders.jpg";
import CarouselImg3 from "../../images/colette.jpg";
import "./home.css";
import RecMod from "./RecMod";
import BloggerIcon from "../../components/bloggerIcon/bloggerIcon";
import { useEffect } from "react";
import {
  GetAllRestaurants,
  getAllRestaurants,
} from "../../services/restaurants";
import { useState } from "react";
import FullBlogModal from "../../components/fullblogmodal/FullBlogModal";
import { GetAllUser } from "../../services/user/user";
import { Link } from "react-router-dom";
const Home = () => {
  const [resData, setRestData] = useState([]);
  const [blogerData, setBloggerData] = useState([]);

  useEffect(() => {
    getRestaurants();
    getAllUser();
  }, []);

  const getRestaurants = async () => {
    const res = await getAllRestaurants();
    setRestData(res?.data?.data);
  };

  const getAllUser = async () => {
    const params = {
      paginate: true,
    };
    const res = await GetAllUser(params);
    setBloggerData(res?.data?.data);
  };
  return (
    <>
      <div className="row justify-content-end">
        <div className=" col-10">
          {/* Main Carousel */}
          <div className="row justify-content-center d-flex pt-5 position-relative">
            <div className="col-11">
              <div
                id="mainCarousel"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="image-overlay">
                      <img
                        src={CarouselImg1}
                        className="d-block w-100 rounded-5 object-fit-cover main-carousel-img"
                        alt="gpu-img"
                      />
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="image-overlay">
                      <img
                        src={CarouselImg2}
                        className="d-block w-100 rounded-5 object-fit-cover main-carousel-img"
                        alt="gpu-img"
                      />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="image-overlay">
                      <img
                        src={CarouselImg3}
                        className="d-block w-100 rounded-5 object-fit-cover main-carousel-img"
                        alt="gpu-img"
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#mainCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#mainCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div className="homeContainer">
            <h1 className="homeTitle">Locations</h1>
            <Featured />

            <h1 className="text-black text-start pb-4 fs-3">Restaurants</h1>

            <div className=" justify-content-start d-flex container">
              <FeaturedProperties defaultData={resData.slice(0, 10)} />
            </div>
          </div>
          <div className="container pb-5">
            <h3>Famous Food Bloggers</h3>
            <div className="d-flex flex-row flex-nowrap gap-4 overflow-x-auto pe-4 py-5 hidden-scrollbar">
              <BloggerIcon defaultData={blogerData} />
            </div>
          </div>
          <div className="row py-5 pt-5  mb-5">
            <div className="h-auto col-xl-10 col-10 mx-auto rounded-4 bg-orange border border-1 shadow-sm">
              <div className="p-5 row position-relative">
                <div className="col-lg-7 col-12">
                  <h1 className=" fs-1 fw-bold">
                    Want To Become A Food Blogger?
                  </h1>
                  <p className="pt-4 fs-3">
                    Share your wonderful experiences and health tips with other
                    foodies
                  </p>
                  <Link to="/signup">
                    <button className="btn bg-black text-white fs-4">
                      SIGN UP NOW
                    </button>
                  </Link>
                </div>
                <div className="col-lg-5 col-12 justify-content-center d-lg-flex d-none">
                  <img
                    src={Blogger}
                    className="position-absolute"
                    style={{
                      height: "124%",
                      top: -80,
                      zIndex: 1,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <MailList />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
