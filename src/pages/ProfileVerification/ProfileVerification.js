import MKBHD from "../../images/mkbhd-profile.webp";
import Header from "../../components/header";
import Footer from "../../components/footer";

export const ProfileVerification = () => {
  return (
    <>
      <Header />
      <body className="row mx-auto min-vh-100 pt-4 mb-5">
        <div className="col-10 row mx-auto rounded-5">
          <div className="section-container justify-content-center">
            <div className="row justify-content-center align-items-center py-4">
              <div className="col-12 col-xl-3 col-md-4 text-center text-md-end">
                <img
                  className="seller-img rounded-circle object-fit-cover"
                  src={MKBHD}
                  alt=".."
                />
              </div>
              <div className="col-12 col-xl-4 col-md-7 text-center text-md-start">
                <h3 className="pt-3">Marques Brownlee</h3>
                <p>Member since 2023</p>
              </div>
            </div>
          </div>
            <div class="container text-center">
            <div class="row justify-content-center gap-3 pb-4">

              <div class="w-100"></div>

              <div class="col-12 col-lg-5 col-xl-4 col-md-6 col-sm-8 row align-items-center d-flex justify-content-center">
                <div className="bg-light w-100 col-12 justify-content-center align-items-center d-flex rounded-4" style={{ height: "200px" }}>
                    <icon className="bi-plus fs-1 rounded-circle p-3 bg-grey align-items-center d-flex justify-content-center" style={{height:"80px", width:"80px"}} />
                </div>
                <div className="w-100 col-12 pt-3">
                    <h5>CNIC Front</h5>
                </div>
              </div>
              <div class="col-12 col-lg-5 col-xl-4 col-md-6 col-sm-8 row align-items-center d-flex justify-content-center">
                <div className="bg-light w-100 col-12 justify-content-center align-items-center d-flex rounded-4" style={{ height: "200px" }}>
                    <icon className="bi-plus fs-1 rounded-circle p-3 bg-grey align-items-center d-flex justify-content-center" style={{height:"80px", width:"80px"}} />
                </div>
                <div className="w-100 col-12 pt-3">
                    <h5>CNIC Back</h5>
                </div>
              </div>

              <div class="w-100"></div>

              <div class="col-12 col-lg-5 col-xl-4 col-md-6 col-sm-8 row align-items-center d-flex justify-content-center">
                <div className="bg-light w-100 col-12 justify-content-center align-items-center d-flex rounded-4" style={{ height: "200px" }}>
                    <icon className="bi-plus fs-1 rounded-circle p-3 bg-grey align-items-center d-flex justify-content-center" style={{height:"80px", width:"80px"}} />
                </div>
                <div className="w-100 col-12 pt-3">
                    <h5>Shop Business Card</h5>
                </div>
              </div>
              <div class="col-12 col-lg-5 col-xl-4 col-md-6 col-sm-8 row align-items-center d-flex justify-content-center">
                <div className="bg-light w-100 col-12 justify-content-center align-items-center d-flex rounded-4" style={{ height: "200px" }}>
                    <icon className="bi-plus fs-1 rounded-circle p-3 bg-grey align-items-center d-flex justify-content-center" style={{height:"80px", width:"80px"}} />
                </div>
                <div className="w-100 col-12 pt-3">
                    <h5>Shop Electricity Bill</h5>
                </div>
              </div>
            </div>
            </div>
          <div className="justify-content-center d-flex pt-5">
            <btn className="btn bg-purple text-white">Submit</btn>
          </div>
          <div className="justify-content-center d-flex py-5">
            <p className="font-monospace text-center">Your verification request  will take 10-15 days to be approved </p>
          </div>

        </div>
      </body>
      <Footer />
    </>
  );
};

export default ProfileVerification;
