import MKBHD from "../../images/influence.jpeg";
import Footer from "../../components/footer/Footer";
import React, { useState } from 'react';
import axios from 'axios';
import "./verify.css";
const ProfileVerification = () => {
  const [formData, setFormData] = useState({
    cnicFront: null,
    cnicBack: null,
    shopCard: null,
    shopBill: null,
  });
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formDataObj = new FormData();
      for (const key in formData) {
        formDataObj.append(key, formData[key]);
      }

      const response = await axios.post('/api/user-verification', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Verification request sent:', response.data);
      setSubmissionSuccess(true);
      // Add any additional handling based on the response

      // Set submission success to true
      setSubmissionSuccess(true);
    } catch (error) {
      console.error('Error submitting verification request:', error);
      // Handle errors
    }
  }
  return (
    <>
      <body className="row mx-auto min-vh-100 pt-4 mb-5">
        <div className="col-10 row mx-auto rounded-5">
        
          <div className="container text-center">
            <form onSubmit={handleSubmit}> <div className="row justify-content-center gap-3 pb-4">
           
              <div className="col-12 col-lg-5 col-xl-4 col-md-6 col-sm-8 row align-items-center d-flex justify-content-center">
                <div className="bg-light w-100 col-12 justify-content-center align-items-center d-flex rounded-4" style={{ height: "200px" }}>
                  <input
                    type="file"
                    name="cnicFront"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-100 col-12 pt-3">
                  <h5>CNIC Front</h5>
                </div>
              </div>
              <div className="col-12 col-lg-5 col-xl-4 col-md-6 col-sm-8 row align-items-center d-flex justify-content-center">
                <div className="bg-light w-100 col-12 justify-content-center align-items-center d-flex rounded-4" style={{ height: "200px" }}>
                  <input
                    type="file"
                    name="cnicBack"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-100 col-12 pt-3">
                  <h5>CNIC Back</h5>
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-12 col-lg-5 col-xl-4 col-md-6 col-sm-8 row align-items-center d-flex justify-content-center">
                <div className="bg-light w-100 col-12 justify-content-center align-items-center d-flex rounded-4" style={{ height: "200px" }}>
                  <input
                    type="file"
                    name="shopCard"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-100 col-12 pt-3">
                  <h5>Driving License</h5>
                </div>
              </div>
              <div className="col-12 col-lg-5 col-xl-4 col-md-6 col-sm-8 row align-items-center d-flex justify-content-center">
                <div className="bg-light w-100 col-12 justify-content-center align-items-center d-flex rounded-4" style={{ height: "200px" }}>
                  <input
                    type="file"
                    name="shopBill"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-100 col-12 pt-3">
                  <h5> Electricity Bill</h5>
                </div>
              </div>
              <div className="justify-content-center d-flex pt-5">
                <button type="submit" className="btn bg-orange text-white" onClick={handleSubmit}>
                  Submit
                </button>   </div>
              </div>
              </form>
              {submissionSuccess && (
            <div className="animate-module">
              <div className="success-message">
                <span className="green-tick">&#10004;</span>
                Documents submitted. Verification can take up to 10-15 days.
              </div>
            </div>
          )}
            </div>
          </div>
         
          <div className="justify-content-center d-flex py-5">
            <p className="font-monospace text-center">Your verification request will take 10-15 days to be approved </p>
          </div>
     
      </body>
      <Footer />
    </>
  );
};

export default ProfileVerification;
