import MKBHD from "../../images/influence.jpeg";
import Footer from "../../components/footer/Footer";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TikTok from "../../images/tiktoklogo.png";
import FB from "../../images/fblogo.png";
import Insta from "../../images/Instalogo.png";
import Youtube from "../../images/youtubelogo.png";


export const EditProfile = () => {
  const [bio, setBio] = useState("");
  const [showTikTokModal, setShowTikTokModal] = useState(false);
  const [showYouTubeModal, setShowYouTubeModal] = useState(false);
  const [showInstagramModal, setShowInstagramModal] = useState(false);
  const [showFacebookModal, setShowFacebookModal] = useState(false);
  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSocialModal = (platform) => {
    switch (platform) {
      case "tiktok":
        setShowTikTokModal(true);
        break;
      case "youtube":
        setShowYouTubeModal(true);
        break;
      case "instagram":
        setShowInstagramModal(true);
        break;
        case "facebook":
        setShowFacebookModal(true);
        break;
      default:
        break;
    }
  };

  const handleSocialSubmit = (platform) => {
    // Implement your logic for handling the social media link submission
    switch (platform) {
      case "tiktok":
        setShowTikTokModal(false);
        break;
      case "youtube":
        setShowYouTubeModal(false);
        break;
      case "instagram":
        setShowInstagramModal(false);
        break;
        case "facebook":
          setShowFacebookModal(false);
          break;
      default:
        break;
    }
  };

  return (
    <>
      <body className="container row mx-auto min-vh-100 pt-5 mb-5">
        <div className="col-10 row mx-auto bg-light rounded-5 py-5 my-4">
        <div className="col-12 col-md-4">
            <div className="row justify-content-center">
                <img src={MKBHD} className="h-100 rounded-circle" style={{ height: "250px", width: "250px" }}/>
            </div>
            <div className="row justify-content-center pt-3 pb-5">
                <btn className="btn bg-orange text-white d-block" style={{width:"150px"}}>Change</btn>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  className="form-control"
                  value={bio}
                  onChange={handleBioChange}
                />
              </div>
            </div>
            {/* <Link to="/" className='text-decoration-none'><button className='btn rounded-5  w-100 border-dark'
                 
                 ><img src={Google} className=' pe-2 ' style={{ height: "22px" }} />Signup with Google </button></Link> */}
            <div className="row mt-5 col-9 mx-auto">
              <button className="btn rounded-3  w-100 border-dark mb-4" onClick={() => handleSocialModal("tiktok")} style={{ width: "150px" }}><img src={TikTok} className=' pe-2 ' style={{ height: "22px" }} /></button>
              <button className="btn rounded-3  w-100 border-dark mb-4" onClick={() => handleSocialModal("youtube")} style={{ width: "150px" }}><img src={Youtube} className=' pe-2 ' style={{ height: "22px" }} /></button>
              <button className="btn rounded-3  w-100 border-dark mb-4" onClick={() => handleSocialModal("instagram")} style={{ width: "150px" }}><img src={Insta} className=' pe-2 ' style={{ height: "22px" }} /></button>
              <button className="btn rounded-3  w-100 border-dark mb-4" onClick={() => handleSocialModal("facebook")} style={{ width: "150px" }}><img src={FB} className=' pe-2 ' style={{ height: "22px" }} /></button>
            </div>
          {/* TikTok Modal */}
        <div className={`modal ${showTikTokModal ? "d-block" : ""}`} tabIndex="-1" role="dialog" style={{ display: showTikTokModal ? "block" : "none" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">TikTok Link</h5>
                <button type="button" className="btn-close" onClick={() => setShowTikTokModal(false)}></button>

              </div>
              <div className="modal-body">
                <input type="text" className="form-control" placeholder="Paste TikTok link" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => handleSocialSubmit("tiktok")}>Submit</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowTikTokModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
          {/* YouTube Modal */}
          <div className={`modal ${showYouTubeModal ? "d-block" : ""}`} tabIndex="-1" role="dialog" style={{ display: showYouTubeModal ? "block" : "none" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">YouTube Link</h5>
                <button type="button" className="btn-close" onClick={() => setShowYouTubeModal(false)}></button>
              </div>
              <div className="modal-body">
                <input type="text" className="form-control" placeholder="Paste YouTube link" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => handleSocialSubmit("youtube")}>Submit</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowYouTubeModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Modal */}
        <div className={`modal ${showInstagramModal ? "d-block" : ""}`} tabIndex="-1" role="dialog" style={{ display: showInstagramModal ? "block" : "none" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Instagram Link</h5>
                <button type="button" className="btn-close" onClick={() => setShowInstagramModal(false)}></button>
              </div>
              <div className="modal-body">
                <input type="text" className="form-control" placeholder="Paste Instagram link" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => handleSocialSubmit("instagram")}>Submit</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowInstagramModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
          {/* Facebook Modal */}
          <div className={`modal ${showFacebookModal ? "d-block" : ""}`} tabIndex="-1" role="dialog" style={{ display: showFacebookModal ? "block" : "none" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Facebook Link</h5>
                <button type="button" className="btn-close" onClick={() => setShowFacebookModal(false)}></button>
              </div>
              <div className="modal-body">
                <input type="text" className="form-control" placeholder="Paste Facebook link" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => handleSocialSubmit("facebook")}>Submit</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowFacebookModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-12 col-md-8 col-lg-6">
        <form class="row ">
              <div className="col-12">
                <label for="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className=" form-control"
                />
              </div>
              <div className="col-12">
                <label for="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className=" form-control"
                />
              </div>
              <div className="col-12">
                <label for="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className=" form-control"
                />
              </div>
              <div className="col-12">
                <label for="cnic">CNIC</label>
                <input
                  type="text"
                  id="cnic"
                  name="cnic"
                  className=" form-control"
                />
              </div>
              <div className="justify-content-center justify-content-lg-end d-flex py-5">
                <button className="btn bg-orange text-white" style={{width:"150px"}}>Save Changes</button>
              </div>
              
        </form>
        <form class="row">
              <div className="col-12">
                <label for="current-pass">Current Password</label>
                <input
                  type="password"
                  id="current-pass"
                  name="current-pass"
                  className=" form-control"
                />
              </div>
              <div className="col-12">
                <label for="new-pass">New Password</label>
                <input
                  type="password"
                  id="new-pass"
                  name="new-pass"
                  className=" form-control"
                />
              </div>
              <div className="col-12">
                <label for="confirm-pass">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-pass"
                  name="confirm-pass"
                  className=" form-control"
                />
              </div>
              <div className="justify-content-center justify-content-lg-end d-flex py-5">
                <button className="btn bg-orange text-white" style={{width:"200px"}}>Change Password</button>
              </div>
              <Link to="/verify">
              <button className="btn bg-orange text-white" style={{width:"200px"}}>Become Verified User</button>
</Link>
        </form>

        </div>
        </div>
        
      </body>
      <Footer />
    </>
  );
};

export default EditProfile;
