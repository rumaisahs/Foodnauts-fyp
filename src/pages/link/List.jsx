import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {

  return (
    <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
        
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Budget<small> per person</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Location
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ambience</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"

                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Cuisine Type</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                
                  />
                </div>
              
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;