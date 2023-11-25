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
        <h1 className="siTitle">Xanders</h1>
        <span className="siDistance">Tipu Sultan / E st / Bukhari</span>
        <span className="siFeatures">
          Cafe • Bakery • Fine-Dine
        </span>
        <span className="siCancelOpSubtitle">
          Discounts on Visa Card
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Reviews (80)</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs. 1000 - 2000</span>
          <span className="siTaxOp">Inclusive of taxes</span>
          <button className="siCheckButton">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;