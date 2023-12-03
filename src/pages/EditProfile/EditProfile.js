import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import React, { useState, useRef } from 'react';

export const EditProfile = () => {
  const [userImage, setUserImage] = useState('path-to-default-image.jpg');
  const fileInputRef = useRef(null);

  // Function to handle image change
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    // Assuming you're using FileReader to convert the selected file to base64
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64Image = reader.result;
      setUserImage(base64Image);
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <>
      <Navbar />
      <body className="row mx-auto min-vh-100 pt-5 mb-5">

        <div className="col-10 row mx-auto bg-light rounded-5 py-5 my-4">
       
        <div className="col-12 col-md-4">
        <div>
      {/* Circle div with user image */}
      <div
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          overflow: 'hidden',
          background: 'white',
          border:'solid'
        }}
      >
        <img
          src={userImage}
          alt="User"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Input for changing image */}
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        {/* <button >Change Image</button> */}
      </div>
    </div>
            <div className="row justify-content-center pt-3 pb-5 border-solid">
                <btn onClick={() => fileInputRef.current.click()} className="btn bg-orange text-white d-block" style={{width:"150px"}}>Change</btn>
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
              
        </form>

        </div>
        </div>
        
      </body>
      <Footer />
    </>
  );
};

export default EditProfile;
