import { RES_IMG_CDN } from "../utils/constants.js";

const RestaurantCard=(props)=>{
  
const { resData }= props;
  const {cloudinaryImageId, name, avgRating,costForTwo,sla,deliveryTime,  cuisines}=resData?.info; 
  return(
 
      <div className="max-w-sm rounded overflow-hidden shadow-lg py-4">
    <img className="w-full" src={RES_IMG_CDN + cloudinaryImageId}  alt={name}/>
    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name}</div>
    <p className="text-gray-700 text-base">
     {cuisines.join(",")}
    </p>
    </div>
    <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{avgRating}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{costForTwo}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{sla.deliveryTime} min</span>
  </div>
  </div>

    
  )
}
export default RestaurantCard;