import "../../pages/restaurant/restaurant.css";
import { GetSingleUser} from '../../services/user/user';
import { GetAuthUserLocalStorage } from '../../services/localStorage/localStorage';
import React, { useState, useEffect } from 'react';
import './blog.css';
// import ReviewImg1 from "../../images/review-img-1.png";
// import ReviewImg2 from "../../images/review-img-2.png";
// import ReviewImg3 from "../../images/review-img-3.png";
// import Influencer from "../../images/influence.jpeg";
import moment from 'moment';
import DefaultImage from "../../images/defaultimage.png"
import FullBlogModal from "../fullblogmodal/FullBlogModal";

export const Blog = ({ data: dt }) => {
  const authUser = GetAuthUserLocalStorage()
  const [user, setUser] = useState(null)
console.log(user,'user')
  const [showComment, setShowComment] = useState(true);
  const [showFullContent, setShowFullContent] = useState(false);
  useEffect(() => {
    const getSingleUser = async () => {
      const res = await GetSingleUser(authUser._id)
      setUser(res?.data?.data)
    }
     getSingleUser()
  }, [])

  const handleComment = () => {
    setShowComment(!showComment);
  };

  const handleReadMore = () => {
    setShowFullContent(true);
  };

  return (
    <div className="my-3 container mx-auto row border rounded-3 border-black border-1 p-3">
      <div className="col-xl-1 col-sm-2 col-3">
        <img className="rounded-circle" src={user?.profile_image || DefaultImage} alt="" height={70} />
      </div>
      <div className="col-11">
        <h6 className="mb-0 ">{dt?.title}</h6>
        {/* <p className="">Reviewed on 11 june, 2023</p> */}
        <p className="text-grey">{new Date(dt?.createdAt).toLocaleDateString()}</p>
        <p className="description">
          {showFullContent ? dt?.description : dt?.description.split('\n').slice(0, 1).join('\n')}
        </p>
    
          <button className="read-more border-0 bg-transparent" >
            <FullBlogModal blogData={dt}/> 
          </button>
        
        <div className="thumbnail-container">  {
          dt?.images && dt?.images.length > 0 ?
            dt?.images.map((img, index) => {
              return (
                <>
                 
                  <img
                    className="pe-2 object-fit-contain thumbnail"
                    key={index}
                    src={img}
                    alt=""
                  />
           

                </>
              )
            })
            : ''
        }   </div>
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
      <div style={{backgroundColor:'#d3d3d3', width:'85%'}} className={`row mx-auto border rounded-4 ${showComment ? "" : "d-none"}`}>
        {
          dt?.comments?.length <= 0 ?
            "No comments found"
            :
            dt?.comments?.map((item, index) => (
              <div className="row">
                <div className="col-xl-2 col-sm-2 col-3  justify-content-start ">
                  <img
                    className="rounded-circle"
                    src={item?.user?.profile_image || DefaultImage}
                    alt=""
                    style={{height:50, width:50}}
                  />
                  <p className="mb-0">@{item?.user?.username}</p>
                </div>
                <div className="col-7  ">
                  <p className=" justify-content-start">
                  {item?.comment}
                  </p>
                  <p className="text-start">{moment(item?.comment?.createdAt).from(moment())}</p>
                </div>
              </div>
            ))
        }

      </div>
    </div>
  );
};

export default Blog;
