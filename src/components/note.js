import RestaurantCard from "./RestaurantCard.js"
import {resList} from "../utils/mockData.js"
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
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
        const json =await data.json();
      //  console.log(json)
        
      setListOfRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
     };

   
     
     
    
    
     return listOfRestaurants?.length == 0 ? (<Shimmer/>) :(
     
      <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text"  className="search-box" value={searchText}
           onChange={(e)=>{setSearchText(e.target.value)
                    
          }}/>
          <button onClick={()=>{
            //filter the restraunt cards update the ui 
           const filteredRestaurant= listOfRestaurants.filter((res)=>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant)
           // console.log(filteredRestaurant)
          }}>search</button>
        </div>
          <button className="filter-btn" onClick={()=>{
            const filteredList=listOfRestaurants.filter(
            (res)=>res.info.avgRatingString>4.4
            );
               setListOfRestaurant(filteredList)
               }}
               >Top Rated Restaurant</button>
      
      </div>
      
      <div className="res-container">
       
         
      {filteredRestaurant.map((restaurant)=>(
        
        <Link key={restaurant?.info?.id}  to={"/restaurants/"+restaurant?.info?.name.toLowerCase().split(' ').join('-')+"-"
        +restaurant?.info?.locality.toString().toLowerCase().split(' ').join('-')+"-"
        +restaurant?.info?.areaName.toString().toLowerCase().split(' ').join('-')+"-bangalore-"
        +restaurant?.info?.id
        }> <RestaurantCard resData={restaurant}/> </Link>  
      ))}
      
                
        </div>
      
  
      </div>
    );   
  };
  export default Body;

  <Link key={restaurant?.info?.id}  to={"/restaurants/"
  +restaurant?.info?.name.toLowerCase().replace(/[\s~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/]+/g, '-')+"-"
  +restaurant?.info?.locality.toLowerCase().replace(/[\s~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/]+/g, '-')+"-"
  +restaurant?.info?.areaName.toLowerCase().replace(/[\s~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/]+/g, '-')+"-bangalore-"
  +restaurant?.info?.id
  }> <RestaurantCard resData={restaurant}/> </Link> 

  //complete
  {filteredRestaurant.map((restaurant)=>(
        
    <Link key={restaurant?.info?.id}  to={"/restaurants/"
    +restaurant?.info?.name.toLowerCase().replace(/[''']/g,'').split(/[,.\s]/).join('-')+"-"
    +restaurant?.info?.locality.toString().toLowerCase().replace(/[''']/g,'').split(/[,.\s]/).join('-')+"-"
    +restaurant?.info?.areaName.toString().toLowerCase().replace(/[''']/g,'').split(/[,.\s]/).join('-')+"-bangalore-"
    +restaurant?.info?.id
    }> <RestaurantCard resData={restaurant}/> </Link>  
  ))}