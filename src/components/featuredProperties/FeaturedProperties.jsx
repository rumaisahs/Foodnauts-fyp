import "./featuredProperties.css";
import Xanders from "../../images/xanders.jpg"
import YumByAmna from "../../images/yumbyamna.jpg"
import Pomo from "../../images/pomo.jpg"
import Paul from "../../images/paul.jpg"
import Colette from "../../images/colette.jpg"
import Espresso from "../../images/espresso.jpg"
import { Link } from 'react-router-dom';


const FeaturedProperties = () => {
  return (
    <body className=' min-vh-100'>
    <div className="row justify-content-center py-5">
      <div className="col-10 bg-light rounded-3 p-4">
      <h1 className="text-black text-start pb-4 fs-3">Restaurants</h1>
        <div className="d-flex flex-row flex-nowrap gap-4 overflow-x-auto hidden-scrollbar pb-1">
          <div className="col-lg-3 col-md-4 col-6">
            <div className=" card shadow-sm card-aspect">
            <Link to="/restaurants/:id" className="text-decoration-none">
                  <div className="fpItem">
        <img
          src={YumByAmna}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Yum By Amna</span>
        <span className="fpCity">Cafe</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Reviews (81)</span>
        </div>
      </div>
      </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="card shadow-sm card-aspect">
            <div className="fpItem">
        <img
          src={Espresso} alt="" className="fpImg"
        />
        <span className="fpName">Espresso</span>
        <span className="fpCity">Cafe</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Reviews (81)</span>
        </div>
      </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="card shadow-sm card-aspect">
            <div className="fpItem">
        <img
          src={Xanders}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Xanders</span>
        <span className="fpCity">Fine-Dine</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Reviews (81)</span>
        </div>
      </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="card shadow-sm card-aspect">
            <div className="fpItem">
        <img
          src={Paul}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Pauls</span>
        <span className="fpCity">Bakery</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Reviews (81)</span>
        </div>
      </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="card shadow-sm card-aspect">
            <div className="fpItem">
        <img
          src={Pomo}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Pomo</span>
        <span className="fpCity">Fine-Dine</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Reviews (81)</span>
        </div>
      </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="card shadow-sm card-aspect">
            <div className="fpItem">
        <img
          src={Colette}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Colette</span>
        <span className="fpCity">Fine-Dine</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Reviews (81)</span>
        </div>
      </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className=" card shadow-sm card-aspect">
            <Link to="/restaurants/:id" className="text-decoration-none">
                  <div className="fpItem">
        <img
          src={YumByAmna}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Yum By Amna</span>
        <span className="fpCity">Cafe</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Reviews (81)</span>
        </div>
      </div>
      </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="card shadow-sm card-aspect">
            <div className="fpItem">
        <img
          src={Espresso} alt="" className="fpImg"
        />
        <span className="fpName">Espresso</span>
        <span className="fpCity">Cafe</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Reviews (81)</span>
        </div>
      </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="card shadow-sm card-aspect">
            <div className="fpItem">
        <img
          src={Xanders}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Xanders</span>
        <span className="fpCity">Fine-Dine</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Reviews (81)</span>
        </div>
      </div>
            </div>
          </div>
          
        </div>
        
      </div>
   
    </div>
 </body>
  );
};

export default FeaturedProperties;