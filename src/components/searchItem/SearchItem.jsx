import "./searchItem.css";
import Xanders from "../../images/xanders.jpg"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src={Xanders}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="fs-3">Xanders</h1>
        <span className="siDistance">Tipu Sultan / E st / Bukhari</span>
        <span className="siFeatures">
          Cafe • Bakery • Fine-Dine
        </span>
        <span className="siFeatures">
          $$$
        </span>
        <span className="siCancelOpSubtitle">
          Discounts on Visa Card
        </span> 
        <div className="siRating">
        <span><i className="bi bi-star-fill text-warning pe-1"></i>4.2</span>
<span className="px-2 text-grey">|</span>
          <span className="text-grey">81 Reviews</span>
        </div>
      </div>
      <div className="siDetails">
       
        <div className="siDetailTexts">
          <button className="border-orange border-1 py-4 px-0 rounded-pill bg-transparent" style={{width:'55px'}}><i className="bi bi-chevron-right text-orange fs-1 px-0"></i></button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;