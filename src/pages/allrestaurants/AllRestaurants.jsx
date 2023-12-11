import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import { useEffect } from "react";
import { getAllRestaurants } from "../../services/restaurants";
import { useState } from "react";

function AllRestaurants() {
  const [restData, setRestData] = useState([]);
  restData.length = 30

  useEffect(() => {
    getRestaurants();
    console.log(restData);
  }, []);

  const getRestaurants = async () => {
    const res = await getAllRestaurants();
    setRestData(res?.data?.data || []); // Ensure restData is always an array
    console.log(restData);
  };

  return (
    <>
      <div className="homeContainer">
        <div className="justify-content-start d-flex container">
          <h1 className="text-black text-start pb-4 fs-3">Restaurants</h1>
          <FeaturedProperties defaultData={restData} />
        </div>
      </div>
    </>
  );
}

export default AllRestaurants;
