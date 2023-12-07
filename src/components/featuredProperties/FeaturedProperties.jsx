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
        <div className="col-12 bg-light rounded-3 p-4">
          <h1 className="text-black text-start pb-4 fs-3">Restaurants</h1>
          <div className="d-flex flex-row flex-nowrap gap-1 overflow-x-auto hidden-scrollbar pb-1 justify-content-start" >
           
            {
              defaultData.map((dt) => {
                return (
                  <>
                  <div className="row justify-content-start">
                    <div className="col-lg-3 col-md-4 col-6 h-100 pe-4" key={dt?._id}>
                      <div class="card position-relative" style={{ width: "18rem", height:"20rem"}}>
                        <Link to={`/restaurants/${dt?._id}`} >
                     
                            <img
                              src={dt?.images[0]}
                              alt=""
                              class="rounded-5 card-img-top"
                            />
                             <div
                class="card-body position-absolute bg-light rounded-4 bg-opacity-75 border border-2 w-100 text-black"
                style={{
                  bottom: "0",
                  left: "0",
                  right: "0",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                            <h5 class="card-title fs-5 ">{dt?.name}</h5>
                            <p className="fpAddress text-grey"> <i className="bi bi-geo-alt-fill pe-1" />{dt?.address}
                            </p>
                            {/* <span className="fpAmbience">Cafe</span> */}
                            <p className="fpAmbience d-inline pe-1 card-text text-grey">Ambience</p>
                <p className="fpAmbience d-inline pe-1 card-text text-grey">.</p>
                <p className="fpCuisine d-inline card-text text-grey">Cuisine type</p>
                <p className="fpPrice d-inline card-text">$$$</p>
                            <div className="fpRating mt-2">

                            <p className=" d-inline pe-1">
                    {" "}
                    <i className="bi bi-star-fill me-1 text-warning" />4.0 {defaultData[-2]?.rating}
                  </p>
                              <span className="text-grey">{`Reviews: ${(dt?.reviews?.length)}`}</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div></div>
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