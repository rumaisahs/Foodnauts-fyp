import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import { useEffect } from "react";
import { GetAllRestaurants, getAllRestaurants } from "../../services/restaurants";
import { useState } from "react";


function AllRestaurants() {
    const [resData, setRestData] = useState([])

  
    useEffect(() => {
      getRestaurants()
     console.log(resData)
    }, [])
  
    const getRestaurants = async () => {
      const res = await getAllRestaurants()
      setRestData(res?.data?.data);
      console.log(resData)
  
    }
  
   
     
  return (
    <>
  <div className="homeContainer">
<div className=" justify-content-start d-flex container">
<FeaturedProperties defaultData={resData} />
</div>
</div>
</>
  )
}

export default AllRestaurants