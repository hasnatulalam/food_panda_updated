import { useParams } from "react-router-dom"

import RestaurantInfo from "./RestaurantInfo.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";



import RestaurantMenuList from "./RestaurantMenuList";

import Shimmer from "./Shimmer.js";
import MenuShimmer from "./MenuShimmer.js"

const RestaurantDetails=()=>{
    const {resId}=useParams()
    const resInfo =useRestaurantMenu(resId);
     const menu=useRestaurantMenu(resId)
   
     if(resInfo===null) return <MenuShimmer/>

    return (
        <div>
       <RestaurantInfo key={resInfo.info.id} resInfo={resInfo?.info} />
       <RestaurantMenuList key={resInfo.menu.item?.card?.info?.id} menu={resInfo?.menu} />
        </div>
    )

}
export default RestaurantDetails;