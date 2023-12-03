import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import SearchFilter from "../../components/searchfilter/SearchFilter";

const List = () => {

  return (
    <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          <SearchFilter/>
         
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