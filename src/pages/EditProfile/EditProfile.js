import MKBHD from "../../images/influence.jpeg";
import Footer from "../../components/footer/Footer";

export const EditProfile = () => {
  return (
    <>
      <body className="row mx-auto min-vh-100 pt-5 mb-5">
        <div className="col-10 row mx-auto bg-light rounded-5 py-5 my-4">
        <div className="col-12 col-md-4">
            <div className="row justify-content-center">
                <img src={MKBHD} className="h-100 rounded-circle" style={{ height: "250px", width: "250px" }}/>
            </div>
            <div className="row justify-content-center pt-3 pb-5">
                <btn className="btn bg-orange text-white d-block" style={{width:"150px"}}>Change</btn>
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
