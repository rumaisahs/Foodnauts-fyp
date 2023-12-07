import React, { useState } from "react";
import "../../pages/restaurant/restaurant.css";

import ReviewImg1 from "../../images/review-img-1.png";
import ReviewImg2 from "../../images/review-img-2.png";
import ReviewImg3 from "../../images/review-img-3.png";
import Influencer from "../../images/influence.jpeg";
import moment from 'moment';

export const Blog = (props) => {
  const [showComment, setShowComment] = useState(true);
  const [showFullContent, setShowFullContent] = useState(false);
  const defaultData = props?.setState

  const handleComment = () => {
    setShowComment(!showComment);
  };

  const handleReadMore = () => {
    setShowFullContent(true);
  };
  
  return (
    <>
      {
        defaultData && defaultData.length > 0 ? defaultData.map((dt) => {
          return (
            <>
              <div className="my-3 container mx-auto row border rounded-3 border-black border-1 p-3">
                <div className="col-xl-1 col-sm-2 col-3">
                  <img className="rounded-circle" src={Influencer} alt="" height={70} />
                </div>
                <div className="col-11">
                  <h6 className="mb-0 ">{dt?.title}</h6>
                  {/* <p className="">Reviewed on 11 june, 2023</p> */}
                  <p className="text-grey">{new Date(dt?.createdAt).toLocaleDateString()}</p>
                  <p className="description">
                    {showFullContent ? dt?.description : dt?.description.split('\n').slice(0, 1).join('\n')}
                  </p>
                  {dt?.description.split('\n').length > 3 && (
                    <button className="read-more border-none" onClick={handleReadMore}>
                      Read More <span>&#8594;</span>
                    </button>
                  )}
                  {
                    dt?.images && dt?.images.length > 0 ?
                      dt?.images.map((img, index) => {
                        return (
                          <>
                            <img
                              className="pe-2 object-fit-contain"
                              key={index}
                              src={img}
                              height={130}
                              alt=""
                            />

                          </>
                        )
                      })
                      : ''
                  }
                </div>
                <div className="col-3 justify-content-end d-flex">
                </div>
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
                    <p >{dt?.likes?.length}</p>
                    <icon className=" pe-2 ps-3 bi-hand-thumbs-down text-orange" />
                    <p>{dt?.dislikes?.length}</p>
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
              </div>
            </>
          )
        })
          :
          'No Blogs'
      }

    </>
  );
};

export default Blog;
