import RestaurantCard from "./RestaurantCard.js"
import {resList} from "../utils/mockData.js"
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Body=()=>{
    const [listOfRestaurants,setListOfRestaurant] =useState([]);
    const [searchText,setSearchText]=useState("");
    const [filteredRestaurant,setFilteredRestaurant]=useState([])
    
    useEffect(()=>{
     fetchData();
    },[])

    const fetchData=async()=>{
      const data =await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999"
        );
        const json =await data?.json();
        //console.log(json)
        
      setListOfRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants||json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants||json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
     };
     const onlineStatus =useOnlineStatus()
     if(onlineStatus===false){
      return(
        <div>
          <h3>please Check your Internet Connection</h3>
        </div>
      )
     
     }

   
     
     
    
    
     return listOfRestaurants?.length == 0 ? (<Shimmer/>) :(
     
      <div className="mb-3">
        <div className="relative mb-4 flex w-1/2 f px-4 mx-16">
          <input type="text"  className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid
           border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]
          text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 
          focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 
          dark:focus:border-primary"placeholder="Search" aria-label="Search" value={searchText}
         
         onChange={(e)=>{setSearchText(e.target.value)
                    
          }}/>
          <button className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" onClick={()=>{
            //filter the restraunt cards update the ui 
           const filteredRestaurant= listOfRestaurants.filter((res)=>
              res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant)
           // console.log(filteredRestaurant)
          }}>search</button>
       <div className="mx-4">
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 border border-blue-700 rounded" onClick={()=>{
            const filteredList=listOfRestaurants.filter(
            (res)=>res?.info?.avgRatingString>3.0
            );
               setListOfRestaurant(filteredList)
               }}
               >Top Rated Restaurant</button>
       </div>
          
      
      </div>
      
      <div className="grid grid-cols-4 gap-1">
         
         
      {filteredRestaurant.map((restaurant)=>(
        <Link key={restaurant?.info?.id}  to={"/restaurants/"+restaurant?.info?.id}> <RestaurantCard resData={restaurant}/> </Link>

      ))}
       
                
        </div>
      
  
        </div>
    );   
  };
  export default Body;