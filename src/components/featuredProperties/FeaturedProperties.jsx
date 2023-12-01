import "./featuredProperties.css";
import Xanders from "../../images/xanders.jpg"
import YumByAmna from "../../images/yumbyamna.jpg"
import Pomo from "../../images/pomo.jpg"
import Paul from "../../images/paul.jpg"
import Colette from "../../images/colette.jpg"
import Espresso from "../../images/espresso.jpg"
import { Link } from 'react-router-dom';


const FeaturedProperties = (props) => {
  const defaultData = props?.defaultData
  console.log(defaultData, 'kk');
  return (
    <body className=' min-vh-100'>
      <div className="row justify-content-center py-5">
        <div className="col-10 bg-light rounded-3 p-4">
          <h1 className="text-black text-start pb-4 fs-3">Restaurants</h1>
          <div className="d-flex flex-row flex-nowrap gap-4 overflow-x-auto hidden-scrollbar pb-1">
            {
              defaultData.map((dt) => {
                return (
                  <>
                    <div className="col-lg-3 col-md-4 col-6" key={dt?._id}>
                      <div className=" card shadow-sm card-aspect">
                        <Link to="/restaurants/:id" className="text-decoration-none">
                          <div className="fpItem">
                            <img
                              src={dt?.images[0]}
                              alt=""
                              className="fpImg"
                            />
                            <span className="fpName">{dt?.name}</span>
                            <span className="fpAddress">{dt?.address}</span>
                            {/* <span className="fpAmbience">Cafe</span> */}
                            <span className="fpPrice">$$$</span>
                            <div className="fpRating">
                              <button>{defaultData[-2]?.rating}</button>
                              <span>{`Reviews: ${(dt?.reviews?.length)}`}</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </>
                )
              })
            }

          </div>

        </div>

      </div>
    </body>
  );
};

export default FeaturedProperties;