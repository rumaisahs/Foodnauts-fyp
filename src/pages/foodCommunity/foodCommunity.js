import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BloggerIcon from "../../components/bloggerIcon/bloggerIcon";
import { GetAllUser } from "../../services/user/user";
import { useState, useEffect } from "react";
import { GetAllBlogs } from "../../services/blog/blog";
import Blog from "../../components/blog/blog";
import CarouselImg1 from "../../images/blogad.jpg";
import CarouselImg2 from "../../images/blogad.jpg";
import Desc from "../../images/blogdesc.jpg";


const FoodCommunity = () => {
  const [blogData, setBlogData] = useState([]);
  blogData.length = 10;
  const [blogerData, setBloggerData] = useState([]);
  blogerData.length = 5;

  useEffect(() => {
    getAllBlogs();
    getAllUser();
  }, []);

  const getAllBlogs = async () => {
    const res = await GetAllBlogs();
    setBlogData(res?.data?.data);
    console.log(blogData);
  };

  const getAllUser = async () => {
    const params = {
      paginate: true,
    };
    const res = await GetAllUser(params);
    setBloggerData(res?.data?.data);
    console.log(blogerData);
  };

  return (
    <>
      <div className="row justify-content-end">
        <div className="col-10">
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
          <h2 className="text-center py-5"> Welcome to Our Food Community!</h2>
          <div className="container pb-5">
            <h3>Famous Food Bloggers</h3>
            <div className="d-flex flex-row flex-nowrap gap-4 overflow-x-auto pe-4 py-5 hidden-scrollbar">
              <BloggerIcon defaultData={blogerData} />
            </div>
            <h3 className="pt-5">Recent Blogs</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 pe-4 py-4 ">
              {blogData.map((blog) => (
                <div key={blog.id} className="col">
                  <div className="card h-100 rounded-3 shadow">
                    <img
                      src={blog.images[0]} // Assuming your blog object has an 'image' property
                      className="card-img-top"
                      alt="Blog Image"
                    />
                    <div className="card-body" style={{ backgroundColor: 'rgb(220,220,220)', borderRadius: '0 0 15px 15px', backdropFilter: 'blur(10px)' }}>
                      <h5 className="card-title">{blog.title}</h5>
                      <p className="card-text">{blog.postDate}</p>
                      <p className="card-text overflow-hidden" style={{ WebkitBoxOrient: 'vertical', maxHeight: '3.6em', overflow: 'hidden', textOverflow: 'ellipsis' }}>{blog.description}</p>
                      <a href="#" className="btn btn-primary">
                        Read More
                      </a>
                      <p className="card-text mt-2">
                        <small className="text-muted">by author{blog.author}</small>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-primary">Show More</button>
            </div>
          </div>
      {/* New Section */}
      <div className="row mt-5">
            <div className="col-md-6">
              <p className="fs-3 font-weight-bold">
                Are you passionate about food and storytelling? Join our vibrant food community!
              </p>
              <p className="">
                Share your culinary adventures, discover new recipes, and connect with fellow food enthusiasts.
                Let your voice be heard in the world of flavors!
              </p>
            </div>
            <div className="col-md-6">
            <img
                  src={Desc}  // Replace with your image path
                alt="Food Blogging"
                className="img-fluid rounded"
                style={{ maxHeight: '500px' }} // Adjust the max height as needed
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default FoodCommunity;
