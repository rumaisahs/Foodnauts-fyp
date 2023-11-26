import React, { useState } from "react";
import "../../pages/restaurant/restaurant.css";

import ReviewImg1 from "../../images/review-img-1.png";
import ReviewImg2 from "../../images/review-img-2.png";
import ReviewImg3 from "../../images/review-img-3.png";
import Influencer from "../../images/influence.jpeg";
export const Blog = () => {
  const [showComment, setShowComment] = useState(true);
  const handleComment = () => {
    setShowComment(!showComment);
  };

  return (
    <>
      <div className="my-3 container mx-auto row border rounded-3 border-black border-1 p-3">
        <div className="col-xl-1 col-sm-2 col-3">
          <img className="rounded-circle" src={Influencer} alt="" height={70} />
        </div>
        <div className="col-7">
          <p className="mb-0">@arshanistan</p>
          <p className="">Reviewed on 11 june, 2023</p>
          <p>
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Qorem ipsum
            dolor sit amet, consectetur adipiscing elit.Qorem ipsum dolor sit
            amet, consectetur adipiscing elit. Qorem ipsum dolor.
          </p>
          <img
            className="pe-2 object-fit-contain"
            src={ReviewImg1}
            height={130}
            alt=""
          />
          <img
            className="pe-2 object-fit-contain"
            src={ReviewImg2}
            height={130}
            alt=""
          />
          <img
            className="pe-2 object-fit-contain"
            src={ReviewImg3}
            height={130}
            alt=""
          />
        </div>
        <div className="col-3 justify-content-end d-flex">
          {/* <div>
            <p className='fs-5 fw-light d-inline pe-2'>4.5/5</p>
          <span>
    <h1 className='my-3'><icon className="bi-chat-square-dots pe-2"/>Blogs</h1>
            <icon className="bi-star-fill text-warning" />
            <icon className="bi-star-fill text-warning" />
            <icon className="bi-star-fill text-warning" />
            <icon className="bi-star-half text-warning" />
          </span>
          <p className='mb-0'><icon className="bi-check2 pe-2"/>Hygiene</p>
          <p className='mb-0'><icon className="bi-check2 pe-2"/>Value</p>
          <p className='mb-0'><icon className="bi-check2 pe-2"/>Service</p>
          </div> */}
        </div>
        {/* <div className='mt-auto' > */}
        <div className="row align-items-center d-flex py-3">
          <div className=" col-6 me-auto">
            <button className="   btn" onClick={handleComment}>
              <icon className="pe-2 bi bi-chat-dots d-inline text-orange" />
              <p className="d-inline">Comments</p>
            </button>
          </div>
          <div className=" col-6 justify-content-end d-flex ">
            <icon className="pe-4 bi bi-share-fill text-orange" />
            <icon className="pe-2 bi-hand-thumbs-up text-orange" />
            <p >256</p>
            <icon className=" pe-2 ps-3 bi-hand-thumbs-down text-orange" />
            <p>256</p>
          </div>
        </div>
        <div className={`row ${showComment ? "" : "d-none"}`}>
          <div className="col-xl-2 col-sm-2 col-3  text-center">
            <img
              className="rounded-circle"
              src={Influencer}
              alt=""
              height={70}
            />
            <p className="mb-0">@arshanistan</p>
          </div>
          <div className="col-7">
            <p>
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Qorem
              ipsum dolor sit amet, consectetur adipiscing elit.Qorem ipsum
              dolor sit amet, consectetur adipiscing elit. Qorem ipsum dolor.
            </p>
            <p className="text-end"> 1 hour ago</p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Blog;
