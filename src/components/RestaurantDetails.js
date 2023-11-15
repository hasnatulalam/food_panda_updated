import { useParams } from "react-router-dom"

import RestaurantInfo from "./RestaurantInfo.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";



import RestaurantMenuList from "./RestaurantMenuList";

import Shimmer from "./Shimmer.js";

const RestaurantDetails=()=>{
    const {resId}=useParams()
    const resInfo =useRestaurantMenu(resId);
     const menu=useRestaurantMenu(resId)
   
     if(resInfo===null) return <Shimmer/>

    return (
        <div>
       <RestaurantInfo resInfo={resInfo?.info} />
       <RestaurantMenuList menu={resInfo?.menu} />
        </div>
    )

}
export default RestaurantDetails;