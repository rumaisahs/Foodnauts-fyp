import "./footer.css";

const Footer = () => {
  return (
    <div className="footer p-5">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
        
        </ul>
        <ul className="fList">
          <li className="fListItem">Restaurants </li>
          <li className="fListItem">Bloggers </li>
          <li className="fListItem">Recommended </li>
          <li className="fListItem">Villas</li>
    
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places to dine </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Recommendations </li>
          <li className="fListItem">Foodie communities </li>
          <li className="fListItem">Top Restaurants </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Guidlines</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Press center</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 Foodies</div>
    </div>
  );
};

export default Footer;